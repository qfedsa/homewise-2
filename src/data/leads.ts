import { PropertyManagementLead } from '../types';

const reasons = [
  'Aktuelle Verwaltung kündigt zum Jahresende',
  'Unzufrieden mit Nebenkostenabrechnung',
  'Sucht digitale Hausverwaltung',
  'Probleme mit Instandhaltungsmanagement',
  'Mangelnde Kommunikation der aktuellen Verwaltung',
  'WEG-Verwaltung nicht mehr zeitgemäß',
  'Aktuelle Verwaltung zu teuer',
  'Beschwerden der Mieter über aktuelle Verwaltung',
  'Verwalterwechsel wegen Pensionierung',
  'Neue Immobilie ohne Verwaltung'
];

const locations = [
  'München', 'Hamburg', 'Berlin', 'Frankfurt',
  'Köln', 'Stuttgart', 'Düsseldorf', 'Leipzig',
  'Dresden', 'Hannover', 'Nürnberg', 'Bremen'
];

const propertyTypes = [
  'Mehrfamilienhaus',
  'Eigentumswohnung',
  'Wohnanlage',
  'Gewerbeimmobilie'
] as const;

const firstNames = [
  'Thomas', 'Michael', 'Andreas', 'Peter', 'Stefan',
  'Christine', 'Maria', 'Anna', 'Sabine', 'Julia',
  'Wolfgang', 'Klaus', 'Monika', 'Barbara', 'Ursula'
];

const lastNames = [
  'Müller', 'Schmidt', 'Schneider', 'Fischer', 'Weber',
  'Meyer', 'Wagner', 'Becker', 'Schulz', 'Hoffmann',
  'Koch', 'Richter', 'Wolf', 'Schröder', 'Neumann'
];

const companies = [
  'Eigentümergemeinschaft',
  'Immobilien GmbH',
  'Hausverwaltung',
  'Grundbesitz KG',
  'Vermögensverwaltung',
  'Investment GmbH & Co. KG'
];

const inspectionIntervals = ['monthly', 'quarterly', 'yearly'] as const;

export const initialLeads: PropertyManagementLead[] = [
  {
    id: '1',
    name: 'Dr. Michael Weber',
    company: 'Weber Immobilien GmbH',
    location: 'München',
    propertyType: 'Mehrfamilienhaus',
    units: 25,
    reason: 'Unzufrieden mit aktueller Hausverwaltung',
    timestamp: new Date().toISOString(),
    status: 'new',
    source: 'WEG-Portal',
    requirements: {
      digitalCommunication: true,
      onlinePortal: true,
      propertyInspection: 'monthly',
      maintenanceService: true
    },
    budget: {
      min: 25,
      max: 35
    }
  },
  {
    id: '2',
    name: 'Anna Schmidt',
    company: 'Eigentümergemeinschaft Parkstraße',
    location: 'Hamburg',
    propertyType: 'Eigentumswohnung',
    units: 12,
    reason: 'Sucht professionelle Hausverwaltung',
    timestamp: new Date().toISOString(),
    status: 'new',
    source: 'Immobilienscout24',
    requirements: {
      digitalCommunication: true,
      onlinePortal: true,
      propertyInspection: 'quarterly',
      maintenanceService: true
    },
    budget: {
      min: 30,
      max: 40
    }
  },
  {
    id: '3',
    name: 'Peter Fischer',
    company: 'Fischer & Söhne Gewerbeobjekte',
    location: 'Berlin',
    propertyType: 'Gewerbeimmobilie',
    units: 1,
    reason: 'Benötigt zuverlässige Objektbetreuung',
    timestamp: new Date().toISOString(),
    status: 'new',
    source: 'Empfehlung',
    requirements: {
      digitalCommunication: false,
      onlinePortal: true,
      propertyInspection: 'weekly',
      maintenanceService: false
    },
    budget: {
      min: 40,
      max: 60
    }
  },
  {
    id: '4',
    name: 'Monika Meyer',
    company: 'Meyer Investment GmbH',
    location: 'Köln',
    propertyType: 'Wohnanlage',
    units: 60,
    reason: 'Aktuelle Verwaltung kündigt zum Jahresende',
    timestamp: new Date().toISOString(),
    status: 'new',
    source: 'Direktanfrage',
    requirements: {
      digitalCommunication: true,
      onlinePortal: true,
      propertyInspection: 'yearly',
      maintenanceService: true
    },
    budget: {
      min: 20,
      max: 28
    }
  }
];


export function generateNewLead(id: string): PropertyManagementLead {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const hasTitle = Math.random() > 0.7;
  const name = `${hasTitle ? 'Dr. ' : ''}${firstName} ${lastName}`;
  const company = Math.random() > 0.5
    ? `${lastName} ${companies[Math.floor(Math.random() * companies.length)]}`
    : `Eigentümergemeinschaft ${['Park', 'Berg', 'Schloss', 'Stadt', 'See'][Math.floor(Math.random() * 5)]}straße ${Math.floor(Math.random() * 100) + 1}`;

  const sources = ['WEG-Portal', 'Immobilienscout24', 'Empfehlung', 'LinkedIn', 'Immowelt', 'Direktanfrage'];
  const units = Math.floor(Math.random() * (50 - 8) + 8);

  return {
    id,
    name,
    company,
    location: locations[Math.floor(Math.random() * locations.length)],
    propertyType: propertyTypes[Math.floor(Math.random() * propertyTypes.length)],
    units,
    reason: reasons[Math.floor(Math.random() * reasons.length)],
    timestamp: new Date().toISOString(),
    status: 'new',
    source: sources[Math.floor(Math.random() * sources.length)],
    requirements: {
      digitalCommunication: Math.random() > 0.3,
      onlinePortal: Math.random() > 0.2,
      propertyInspection: inspectionIntervals[Math.floor(Math.random() * inspectionIntervals.length)],
      maintenanceService: Math.random() > 0.4
    },
    budget: {
      min: Math.floor(Math.random() * (15) + 20),
      max: Math.floor(Math.random() * (20) + 35)
    }
  };
}
