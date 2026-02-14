import { Router, Request, Response } from 'express';

const router = Router();

interface Workspace {
  id: string;
  orgId: string;
  name: string;
  purpose?: string;
  status: 'active' | 'inactive';
  nodeBound?: string;
  region?: string;
  createdAt: Date;
  updatedAt: Date;
  lastActivityAt?: Date;
}

const workspaces: Workspace[] = [
  {
    id: 'ws-001',
    orgId: 'org-001',
    name: 'Founder Inbox',
    purpose: 'indie_founder',
    status: 'active',
    nodeBound: 'dedicated',
    region: 'us-east-1',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
    lastActivityAt: new Date()
  }
];

router.get('/', (req: Request, res: Response) => {
  const { orgId } = req.query;
  let data = workspaces;
  
  if (orgId) {
    data = workspaces.filter(w => w.orgId === orgId);
  }

  res.json({
    data,
    meta: { total: data.length }
  });
});

router.get('/:id', (req: Request, res: Response) => {
  const workspace = workspaces.find(w => w.id === req.params.id);
  if (!workspace) {
    return res.status(404).json({ error: 'Workspace not found' });
  }
  res.json({ data: workspace });
});

router.post('/', (req: Request, res: Response) => {
  const { orgId, name, purpose, nodeBound, region } = req.body;

  if (!orgId || !name) {
    return res.status(400).json({ error: 'orgId and name are required' });
  }

  const newWorkspace: Workspace = {
    id: `ws-${Date.now()}`,
    orgId,
    name,
    purpose,
    status: 'active',
    nodeBound,
    region,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  workspaces.push(newWorkspace);
  res.status(201).json({ data: newWorkspace });
});

router.put('/:id', (req: Request, res: Response) => {
  const workspace = workspaces.find(w => w.id === req.params.id);
  if (!workspace) {
    return res.status(404).json({ error: 'Workspace not found' });
  }

  const { name, status, purpose } = req.body;
  if (name) workspace.name = name;
  if (status) workspace.status = status;
  if (purpose) workspace.purpose = purpose;
  workspace.updatedAt = new Date();

  res.json({ data: workspace });
});

router.delete('/:id', (req: Request, res: Response) => {
  const index = workspaces.findIndex(w => w.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Workspace not found' });
  }

  workspaces.splice(index, 1);
  res.status(204).send();
});

export { router as workspacesRouter };
