import { Router, Request, Response } from 'express';

const router = Router();

type ChannelType = 'Slack' | 'Discord' | 'Telegram' | 'WebChat' | 'WhatsApp' | 'Email';

interface Channel {
  id: string;
  workspaceId: string;
  type: ChannelType;
  name?: string;
  connected: boolean;
  config?: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

const channels: Channel[] = [
  {
    id: 'ch-001',
    workspaceId: 'ws-001',
    type: 'Slack',
    name: 'General',
    connected: true,
    config: { webhook: 'https://hooks.slack.com/...' },
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: 'ch-002',
    workspaceId: 'ws-001',
    type: 'Discord',
    name: 'Support',
    connected: true,
    config: { botToken: '***' },
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  }
];

router.get('/', (req: Request, res: Response) => {
  const { workspaceId } = req.query;
  let data = channels;
  
  if (workspaceId) {
    data = channels.filter(c => c.workspaceId === workspaceId);
  }

  res.json({ data, meta: { total: data.length } });
});

router.get('/:id', (req: Request, res: Response) => {
  const channel = channels.find(c => c.id === req.params.id);
  if (!channel) {
    return res.status(404).json({ error: 'Channel not found' });
  }
  res.json({ data: channel });
});

router.post('/', (req: Request, res: Response) => {
  const { workspaceId, type, name } = req.body;

  if (!workspaceId || !type) {
    return res.status(400).json({ error: 'workspaceId and type are required' });
  }

  const newChannel: Channel = {
    id: `ch-${Date.now()}`,
    workspaceId,
    type,
    name,
    connected: false,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  channels.push(newChannel);
  res.status(201).json({ data: newChannel });
});

router.post('/:id/connect', (req: Request, res: Response) => {
  const channel = channels.find(c => c.id === req.params.id);
  if (!channel) {
    return res.status(404).json({ error: 'Channel not found' });
  }

  channel.connected = true;
  channel.updatedAt = new Date();

  res.json({ 
    data: channel,
    message: 'Channel connected successfully'
  });
});

router.delete('/:id', (req: Request, res: Response) => {
  const index = channels.findIndex(c => c.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Channel not found' });
  }

  channels.splice(index, 1);
  res.status(204).send();
});

export { router as channelsRouter };
