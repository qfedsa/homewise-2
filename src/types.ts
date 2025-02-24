export interface PropertyManagementLead {
    id: string;
    name: string;
    company: string;
    location: string;
    propertyType: 'Mehrfamilienhaus' | 'Eigentumswohnung' | 'Wohnanlage' | 'Gewerbeimmobilie';
    units: number;
    reason: string;
    timestamp: string;
    status: 'new' | 'contacted' | 'interested' | 'not_interested';
    source: string;
    requirements?: {
      digitalCommunication: boolean;
      onlinePortal: boolean;
      propertyInspection: 'monthly' | 'quarterly' | 'yearly';
      maintenanceService: boolean;
    };
    budget?: {
      min: number;
      max: number;
    };
  }

  export interface LeadFilter {
    propertyType: string[];
    location: string[];
    status: string[];
    source: string[];
    units: {
      min: number | null;
      max: number | null;
    };
    budget: {
      min: number | null;
      max: number | null;
    };
  }

  export interface LeadStatsData {
    total: number;
    byStatus: Record<string, number>;
    byType: Record<string, number>;
    bySource: Record<string, number>;
    byUnits: Record<string, number>;
    byBudget: Record<string, number>;
  }

  export interface EmailTemplate {
    subject: string;
    body: string;
  }

  export interface EmailHistory {
    id: string;
    recipient: string;
    email: EmailTemplate;
    timestamp: string;
    type: 'seller' | 'buyer';
  }
