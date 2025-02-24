import { PropertyManagementLead } from '../types';

export function generateEmailTemplate(lead: PropertyManagementLead) {
  const lastName = lead.name.split(' ').slice(-1)[0];
  const title = lead.name.includes('Dr.') ? 'Dr. ' : '';
  const anrede = title ? `Sehr geehrter Herr ${title}${lastName}` : `Sehr geehrte(r) Herr/Frau ${lastName}`;

  // Kernbedürfnisse identifizieren
  const painPoints = lead.reason.toLowerCase();
  const digitalFokus = lead.requirements?.digitalCommunication || lead.requirements?.onlinePortal;
  const serviceOrientiert = lead.requirements?.maintenanceService;
  
  // Hauptvorteile basierend auf Bedürfnissen
  const benefits = [];
  if (painPoints.includes('nebenkostenabrechnung')) {
    benefits.push('transparente, digitale Nebenkostenabrechnungen');
  }
  if (painPoints.includes('digital')) {
    benefits.push('moderne Online-Portale für Eigentümer und Mieter');
  }
  if (painPoints.includes('instandhaltung') || painPoints.includes('wartung')) {
    benefits.push('proaktives Instandhaltungsmanagement');
  }
  if (painPoints.includes('kommunikation')) {
    benefits.push('direkte Kommunikationswege');
  }

  const mainBenefit = benefits.length > 0 
    ? benefits[0] 
    : 'effiziente, digitale Verwaltungsprozesse';

  return {
    subject: `Lösung für Ihre ${lead.propertyType}-Verwaltung in ${lead.location}`,
    body: `${anrede},

als spezialisierte Hausverwaltung mit Fokus auf ${mainBenefit} möchten wir Ihnen eine optimale Lösung für Ihre ${lead.propertyType} mit ${lead.units} Einheiten anbieten.

${digitalFokus ? 'Unser digitales Verwaltungskonzept ermöglicht:' : 'Unsere Verwaltungsleistungen umfassen:'} 
• Transparente Abrechnungen und Dokumentation
• Eigenes Eigentümer- und Mieterportal${serviceOrientiert ? '\n• 24/7 Wartungsservice und Handwerkermanagement' : ''}
• Regelmäßige ${lead.requirements?.propertyInspection === 'monthly' ? 'monatliche' : lead.requirements?.propertyInspection === 'quarterly' ? 'vierteljährliche' : 'jährliche'} Objektbegehungen

${lead.budget ? `Mit einem Budget von ${lead.budget.min}-${lead.budget.max}€ pro Einheit können wir Ihnen einen erstklassigen Service garantieren.` : 'Gerne erstellen wir Ihnen ein maßgeschneidertes Angebot.'}

Lassen Sie uns in einem kurzen Gespräch die Details besprechen. Wann passt es Ihnen am besten?

Mit besten Grüßen
Ihr Homewise-Team`
  };
}
