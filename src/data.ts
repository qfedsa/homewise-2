import { Property, Seller, Buyer } from './types';

export const initialProperties: Property[] = [
  {
    id: '1',
    title: 'Moderne Stadtwohnung im Zentrum',
    price: 450000,
    location: 'München',
    size: 85,
    rooms: 3,
    type: 'Wohnung',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80',
    description: 'Hochwertig ausgestattete Wohnung mit Balkon und Tiefgarage',
    timestamp: '2024-03-15T10:30:00Z',
    sellerId: '1'
  },
  {
    id: '2',
    title: 'Familienhaus mit Garten',
    price: 780000,
    location: 'Hamburg',
    size: 165,
    rooms: 5,
    type: 'Haus',
    imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1000&q=80',
    description: 'Freistehendes Einfamilienhaus in ruhiger Lage',
    timestamp: '2024-03-14T15:45:00Z',
    sellerId: '2'
  },
  {
    id: '3',
    title: 'Penthouse mit Dachterrasse',
    price: 890000,
    location: 'Berlin',
    size: 120,
    rooms: 4,
    type: 'Wohnung',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
    description: 'Luxuriöses Penthouse mit Panoramablick',
    timestamp: '2024-03-13T09:15:00Z',
    sellerId: '1'
  }
];

export const sellers: Seller[] = [
  {
    id: '1',
    name: 'Thomas Müller',
    company: 'Müller Immobilien GmbH',
    email: 'mueller@immobilien.de',
    phone: '+49 89 123456',
    properties: ['1', '3']
  },
  {
    id: '2',
    name: 'Sarah Weber',
    company: 'Weber & Partner',
    email: 'weber@immobilien.de',
    phone: '+49 40 654321',
    properties: ['2']
  }
];

export const buyers: Buyer[] = [
  {
    id: '1',
    name: 'Familie Schmidt',
    preferences: {
      minPrice: 600000,
      maxPrice: 900000,
      locations: ['Hamburg', 'Bremen'],
      minSize: 150,
      propertyType: ['Haus'],
      minRooms: 5
    },
    matchedProperties: ['2']
  },
  {
    id: '2',
    name: 'Herr und Frau Weber',
    preferences: {
      minPrice: 400000,
      maxPrice: 600000,
      locations: ['München', 'Stuttgart'],
      minSize: 80,
      propertyType: ['Wohnung'],
      minRooms: 3
    },
    matchedProperties: ['1']
  }
];

const propertyImages = [
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80'
];

const locations = ['München', 'Hamburg', 'Berlin', 'Frankfurt', 'Köln', 'Stuttgart'];
const propertyTypes = ['Haus', 'Wohnung'] as const;
const descriptions = [
  'Moderne Ausstattung mit hochwertigen Materialien',
  'Ruhige Lage mit guter Verkehrsanbindung',
  'Perfekt für Familien oder Paare',
  'Energieeffizient und nachhaltig gebaut'
];

const buyerNames = [
  'Familie Becker',
  'Dr. Schneider',
  'Ehepaar Wagner',
  'Herr Hoffmann',
  'Familie Koch',
  'Frau Dr. Meyer'
];

export function generateNewBuyer(id: string): Buyer {
  const propertyType = Math.random() > 0.5 ? ['Haus'] : ['Wohnung'];
  const minPrice = Math.floor(Math.random() * (500000 - 300000) + 300000);
  const maxPrice = minPrice + Math.floor(Math.random() * (400000 - 200000) + 200000);
  const preferredLocations = locations
    .sort(() => Math.random() - 0.5)
    .slice(0, Math.floor(Math.random() * 2) + 1);

  return {
    id,
    name: buyerNames[Math.floor(Math.random() * buyerNames.length)],
    preferences: {
      minPrice,
      maxPrice,
      locations: preferredLocations,
      minSize: propertyType[0] === 'Haus' ? 120 : 60,
      propertyType,
      minRooms: propertyType[0] === 'Haus' ? 4 : 2
    },
    matchedProperties: []
  };
}

export function generateNewProperty(id: string): Property {
  const type = propertyTypes[Math.floor(Math.random() * propertyTypes.length)];
  const location = locations[Math.floor(Math.random() * locations.length)];
  const sellerId = sellers[Math.floor(Math.random() * sellers.length)].id;
  
  return {
    id,
    title: `${type === 'Haus' ? 'Neues Haus' : 'Neue Wohnung'} in ${location}`,
    price: Math.floor(Math.random() * (1000000 - 300000) + 300000),
    location,
    size: Math.floor(Math.random() * (200 - 50) + 50),
    rooms: Math.floor(Math.random() * (6 - 2) + 2),
    type,
    imageUrl: propertyImages[Math.floor(Math.random() * propertyImages.length)],
    description: descriptions[Math.floor(Math.random() * descriptions.length)],
    timestamp: new Date().toISOString(),
    sellerId
  };
}

export function matchPropertyWithBuyers(property: Property, buyersList: Buyer[]): Buyer[] {
  return buyersList.filter(buyer => {
    const priceMatch = property.price >= buyer.preferences.minPrice && 
                      property.price <= buyer.preferences.maxPrice;
    const locationMatch = buyer.preferences.locations.includes(property.location);
    const typeMatch = buyer.preferences.propertyType.includes(property.type);
    const sizeMatch = property.size >= buyer.preferences.minSize;
    const roomsMatch = property.rooms >= buyer.preferences.minRooms;

    return priceMatch && locationMatch && typeMatch && sizeMatch && roomsMatch;
  });
}
