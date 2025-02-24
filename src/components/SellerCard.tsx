import React from 'react';
import { Seller } from '../types';
import { Building2, Mail, Phone, Home } from 'lucide-react';

interface SellerCardProps {
  seller: Seller;
}

export const SellerCard: React.FC<SellerCardProps> = ({ seller }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="flex items-center mb-4">
        <Building2 className="w-6 h-6 mr-2 text-blue-600" />
        <div>
          <h3 className="text-xl font-semibold">{seller.name}</h3>
          <p className="text-gray-600">{seller.company}</p>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex items-center text-gray-600">
          <Mail className="w-5 h-5 mr-2" />
          <span>{seller.email}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Phone className="w-5 h-5 mr-2" />
          <span>{seller.phone}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Home className="w-5 h-5 mr-2" />
          <span>{seller.properties.length} aktive Angebote</span>
        </div>
      </div>
    </div>
  );
};
