import { isValidEmail } from './utils';

interface PipedriveConfig {
  apiToken: string;
  domain?: string;
  pipelineId: number;
  stageId: number;
}

interface PipedrivePerson {
  name: string;
  email: { value: string; primary: boolean; }[];
  org_id: number;
}

interface PipedriveDeal {
  title: string;
  person_id: number;
  pipeline_id: number;
  stage_id: number;
}

export class PipedriveClient {
  private config: PipedriveConfig;
  private baseUrl: string;

  constructor(config: PipedriveConfig) {
    this.config = config;
    this.baseUrl = `https://${config.domain || 'mentera'}.pipedrive.com/api/v1`;
  }

  private async fetchWithAuth(endpoint: string, options: RequestInit = {}) {
    const url = new URL(endpoint, this.baseUrl);
    url.searchParams.append('api_token', this.config.apiToken);

    const response = await fetch(url.toString(), {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`Pipedrive API error: ${response.statusText} - ${JSON.stringify(errorData)}`);
    }

    return response.json();
  }

  async createLead(email: string): Promise<{ success: boolean; error?: string }> {
    try {
      if (!isValidEmail(email)) {
        return { success: false, error: 'Invalid email format' };
      }

      // First, create a person
      const person: PipedrivePerson = {
        name: email.split('@')[0], // Use part of email as name
        email: [{ value: email, primary: true }],
        org_id: 1 // Assuming Mentera has ID 1
      };

      const personResponse = await this.fetchWithAuth('/persons', {
        method: 'POST',
        body: JSON.stringify(person),
      });

      if (!personResponse.success) {
        throw new Error('Failed to create person in Pipedrive');
      }

      // Then create a deal associated with the person
      const deal: PipedriveDeal = {
        title: `Beta Signup: ${email}`,
        person_id: personResponse.data.id,
        pipeline_id: this.config.pipelineId,
        stage_id: this.config.stageId
      };

      const dealResponse = await this.fetchWithAuth('/deals', {
        method: 'POST',
        body: JSON.stringify(deal),
      });

      if (!dealResponse.success) {
        throw new Error('Failed to create deal in Pipedrive');
      }

      return { success: true };
    } catch (error) {
      console.error('Error creating Pipedrive lead:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to create lead' 
      };
    }
  }
} 