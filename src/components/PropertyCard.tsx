import React from 'react';
import { Property } from '../types';
import { Euro, MapPin, Home, Maximize, BedDouble } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        src={property.imageUrl} 
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
        <div className="space-y-2">
          <div className="flex items-center text-gray-600">
            <Euro className="w-5 h-5 mr-2" />
            <span>{property.price.toLocaleString('de-DE')} €</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="w-5 h-5 mr-2" />
            <span>{property.location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Home className="w-5 h-5 mr-2" />
            <span>{property.type}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Maximize className="w-5 h-5 mr-2" />
            <span>{property.size} m²</span>
          </div>
          <div className="flex items-center text-gray-600">
            <BedDouble className="w-5 h-5 mr-2" />
            <span>{property.rooms} Zimmer</span>
          </div>
        </div>
        <p className="mt-3 text-gray-600">{property.description}</p>
        <div className="mt-4 text-sm text-gray-500">
          Gefunden am: {new Date(property.timestamp).toLocaleDateString('de-DE')}
        </div>
      </div>
    </div>
  );
};
