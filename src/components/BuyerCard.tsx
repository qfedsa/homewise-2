import React from 'react';
import { Buyer } from '../types';
import { User, Euro, MapPin, Home, Maximize, BedDouble } from 'lucide-react';

interface BuyerCardProps {
  buyer: Buyer;
}

export const BuyerCard: React.FC<BuyerCardProps> = ({ buyer }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="flex items-center mb-4">
        <User className="w-6 h-6 mr-2 text-blue-600" />
        <h3 className="text-xl font-semibold">{buyer.name}</h3>
      </div>
      <div className="space-y-3">
        <div className="flex items-center text-gray-600">
          <Euro className="w-5 h-5 mr-2" />
          <span>{buyer.preferences.minPrice.toLocaleString('de-DE')} € - {buyer.preferences.maxPrice.toLocaleString('de-DE')} €</span>
        </div>
        <div className="flex items-center text-gray-600">
          <MapPin className="w-5 h-5 mr-2" />
          <span>{buyer.preferences.locations.join(', ')}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Home className="w-5 h-5 mr-2" />
          <span>{buyer.preferences.propertyType.join(', ')}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Maximize className="w-5 h-5 mr-2" />
          <span>Min. {buyer.preferences.minSize} m²</span>
        </div>
        <div className="flex items-center text-gray-600">
          <BedDouble className="w-5 h-5 mr-2" />
          <span>Min. {buyer.preferences.minRooms} Zimmer</span>
        </div>
      </div>
      <div className="mt-4">
        <span className="text-sm font-medium text-blue-600">
          {buyer.matchedProperties.length} Übereinstimmungen gefunden
        </span>
      </div>
    </div>
  );
};
