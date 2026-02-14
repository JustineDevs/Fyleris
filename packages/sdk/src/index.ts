import type { Org, Workspace, Node, Channel, User, Role } from '@fyrelis/core-domain';

export interface FyrelisClientConfig {
  baseUrl: string;
  apiKey?: string;
  timeout?: number;
}

export class FyrelisClient {
  private baseUrl: string;
  private apiKey?: string;
  private timeout: number;

  constructor(config: FyrelisClientConfig) {
    this.baseUrl = config.baseUrl.replace(/\/$/, '');
    this.apiKey = config.apiKey;
    this.timeout = config.timeout || 30000;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...((options.headers as Record<string, string>) || {})
    };

    if (this.apiKey) {
      headers['Authorization'] = `Bearer ${this.apiKey}`;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(url, {
        ...options,
        headers,
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(
          error.message || `HTTP ${response.status}: ${response.statusText}`
        );
      }

      return await response.json();
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  }

  // Organizations API
  organizations = {
    list: async (): Promise<{ data: Org[]; meta: { total: number } }> => {
      return this.request('/api/organizations');
    },

    get: async (id: string): Promise<{ data: Org }> => {
      return this.request(`/api/organizations/${id}`);
    },

    create: async (data: { name: string }): Promise<{ data: Org }> => {
      return this.request('/api/organizations', {
        method: 'POST',
        body: JSON.stringify(data)
      });
    },

    update: async (
      id: string,
      data: Partial<Org>
    ): Promise<{ data: Org }> => {
      return this.request(`/api/organizations/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data)
      });
    },

    delete: async (id: string): Promise<void> => {
      return this.request(`/api/organizations/${id}`, {
        method: 'DELETE'
      });
    }
  };

  // Workspaces API
  workspaces = {
    list: async (
      orgId?: string
    ): Promise<{ data: Workspace[]; meta: { total: number } }> => {
      const query = orgId ? `?orgId=${orgId}` : '';
      return this.request(`/api/workspaces${query}`);
    },

    get: async (id: string): Promise<{ data: Workspace }> => {
      return this.request(`/api/workspaces/${id}`);
    },

    create: async (data: {
      orgId: string;
      name: string;
      purpose?: string;
      nodeBound?: string;
      region?: string;
    }): Promise<{ data: Workspace }> => {
      return this.request('/api/workspaces', {
        method: 'POST',
        body: JSON.stringify(data)
      });
    },

    update: async (
      id: string,
      data: Partial<Workspace>
    ): Promise<{ data: Workspace }> => {
      return this.request(`/api/workspaces/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data)
      });
    },

    delete: async (id: string): Promise<void> => {
      return this.request(`/api/workspaces/${id}`, {
        method: 'DELETE'
      });
    }
  };

  // Nodes API
  nodes = {
    list: async (
      workspaceId?: string
    ): Promise<{ data: Node[]; meta: { total: number } }> => {
      const query = workspaceId ? `?workspaceId=${workspaceId}` : '';
      return this.request(`/api/nodes${query}`);
    },

    get: async (id: string): Promise<{ data: Node }> => {
      return this.request(`/api/nodes/${id}`);
    },

    create: async (data: {
      workspaceId: string;
      type: 'shared' | 'org_dedicated' | 'workspace_dedicated';
      provider?: 'Render' | 'Fly' | 'AWS' | 'Railway';
      region?: string;
    }): Promise<{ data: Node }> => {
      return this.request('/api/nodes', {
        method: 'POST',
        body: JSON.stringify(data)
      });
    },

    restart: async (id: string): Promise<{ data: Node; message: string }> => {
      return this.request(`/api/nodes/${id}/restart`, {
        method: 'POST'
      });
    },

    delete: async (id: string): Promise<void> => {
      return this.request(`/api/nodes/${id}`, {
        method: 'DELETE'
      });
    }
  };

  // Channels API
  channels = {
    list: async (
      workspaceId?: string
    ): Promise<{ data: Channel[]; meta: { total: number } }> => {
      const query = workspaceId ? `?workspaceId=${workspaceId}` : '';
      return this.request(`/api/channels${query}`);
    },

    get: async (id: string): Promise<{ data: Channel }> => {
      return this.request(`/api/channels/${id}`);
    },

    create: async (data: {
      workspaceId: string;
      type: 'Slack' | 'Discord' | 'Telegram' | 'WebChat' | 'WhatsApp' | 'Email';
      name?: string;
    }): Promise<{ data: Channel }> => {
      return this.request('/api/channels', {
        method: 'POST',
        body: JSON.stringify(data)
      });
    },

    connect: async (id: string): Promise<{ data: Channel; message: string }> => {
      return this.request(`/api/channels/${id}/connect`, {
        method: 'POST'
      });
    },

    delete: async (id: string): Promise<void> => {
      return this.request(`/api/channels/${id}`, {
        method: 'DELETE'
      });
    }
  };

  // Health check
  health = async (): Promise<{ status: string; timestamp: string }> => {
    return this.request('/health');
  };
}

export default FyrelisClient;
