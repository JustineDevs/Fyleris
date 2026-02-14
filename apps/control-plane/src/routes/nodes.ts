import { Router, Request, Response } from 'express';

const router = Router();

interface Node {
  id: string;
  workspaceId: string;
  type: 'shared' | 'org_dedicated' | 'workspace_dedicated';
  provider?: 'Render' | 'Fly' | 'AWS' | 'Railway';
  region?: string;
  status: 'provisioning' | 'healthy' | 'degraded' | 'error';
  url?: string;
  createdAt: Date;
  updatedAt: Date;
}

const nodes: Node[] = [
  {
    id: 'node-001',
    workspaceId: 'ws-001',
    type: 'workspace_dedicated',
    provider: 'Render',
    region: 'us-east-1',
    status: 'healthy',
    url: 'https://node-001.fyrelis.app',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  }
];

router.get('/', (req: Request, res: Response) => {
  const { workspaceId } = req.query;
  let data = nodes;
  
  if (workspaceId) {
    data = nodes.filter(n => n.workspaceId === workspaceId);
  }

  res.json({ data, meta: { total: data.length } });
});

router.get('/:id', (req: Request, res: Response) => {
  const node = nodes.find(n => n.id === req.params.id);
  if (!node) {
    return res.status(404).json({ error: 'Node not found' });
  }
  res.json({ data: node });
});

router.post('/', (req: Request, res: Response) => {
  const { workspaceId, type, provider, region } = req.body;

  if (!workspaceId || !type) {
    return res.status(400).json({ error: 'workspaceId and type are required' });
  }

  const newNode: Node = {
    id: `node-${Date.now()}`,
    workspaceId,
    type,
    provider,
    region,
    status: 'provisioning',
    createdAt: new Date(),
    updatedAt: new Date()
  };

  nodes.push(newNode);
  res.status(201).json({ data: newNode });
});

router.post('/:id/restart', (req: Request, res: Response) => {
  const node = nodes.find(n => n.id === req.params.id);
  if (!node) {
    return res.status(404).json({ error: 'Node not found' });
  }

  node.status = 'provisioning';
  node.updatedAt = new Date();

  res.json({ 
    data: node,
    message: 'Node restart initiated'
  });
});

router.delete('/:id', (req: Request, res: Response) => {
  const index = nodes.findIndex(n => n.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Node not found' });
  }

  nodes.splice(index, 1);
  res.status(204).send();
});

export { router as nodesRouter };
