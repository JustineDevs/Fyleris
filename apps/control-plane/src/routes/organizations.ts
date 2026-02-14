import { Router, Request, Response } from 'express';

const router = Router();

// Mock data - replace with database queries
interface Organization {
  id: string;
  name: string;
  status: 'active' | 'inactive' | 'suspended';
  billingAccountId?: string;
  createdAt: Date;
  updatedAt: Date;
}

const organizations: Organization[] = [
  {
    id: 'org-001',
    name: 'Acme Inc',
    status: 'active',
    billingAccountId: 'ba-001',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  }
];

// GET /api/organizations - List all organizations
router.get('/', (req: Request, res: Response) => {
  res.json({
    data: organizations,
    meta: {
      total: organizations.length,
      page: 1,
      perPage: 10
    }
  });
});

// GET /api/organizations/:id - Get single organization
router.get('/:id', (req: Request, res: Response) => {
  const org = organizations.find(o => o.id === req.params.id);
  if (!org) {
    return res.status(404).json({ error: 'Organization not found' });
  }
  res.json({ data: org });
});

// POST /api/organizations - Create organization
router.post('/', (req: Request, res: Response) => {
  const { name } = req.body;
  
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  const newOrg: Organization = {
    id: `org-${Date.now()}`,
    name,
    status: 'active',
    createdAt: new Date(),
    updatedAt: new Date()
  };

  organizations.push(newOrg);
  res.status(201).json({ data: newOrg });
});

// PUT /api/organizations/:id - Update organization
router.put('/:id', (req: Request, res: Response) => {
  const org = organizations.find(o => o.id === req.params.id);
  if (!org) {
    return res.status(404).json({ error: 'Organization not found' });
  }

  const { name, status } = req.body;
  if (name) org.name = name;
  if (status) org.status = status;
  org.updatedAt = new Date();

  res.json({ data: org });
});

// DELETE /api/organizations/:id - Delete organization
router.delete('/:id', (req: Request, res: Response) => {
  const index = organizations.findIndex(o => o.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Organization not found' });
  }

  organizations.splice(index, 1);
  res.status(204).send();
});

export { router as organizationsRouter };
