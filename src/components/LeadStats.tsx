import React from 'react';
import { LeadStatsData } from '../types';
import { BarChart3, PieChart, Activity, Users, Euro } from 'lucide-react';

interface LeadStatsProps {
  stats: LeadStatsData;
}

export const LeadStats: React.FC<LeadStatsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6">
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex items-center mb-3">
          <Activity className="w-5 h-5 text-blue-600 mr-2" />
          <h3 className="font-semibold">Status</h3>
        </div>
        <div className="space-y-2">
          {Object.entries(stats.byStatus).map(([status, count]) => (
            <div key={status} className="flex justify-between items-center">
              <span className="text-sm text-gray-600">
                {status === 'new' ? 'Neu' :
                 status === 'contacted' ? 'Kontaktiert' :
                 status === 'interested' ? 'Interessiert' : 'Nicht interessiert'}
              </span>
              <span className="font-medium">{count}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex items-center mb-3">
          <BarChart3 className="w-5 h-5 text-blue-600 mr-2" />
          <h3 className="font-semibold">Immobilientyp</h3>
        </div>
        <div className="space-y-2">
          {Object.entries(stats.byType).map(([type, count]) => (
            <div key={type} className="flex justify-between items-center">
              <span className="text-sm text-gray-600">{type}</span>
              <span className="font-medium">{count}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex items-center mb-3">
          <PieChart className="w-5 h-5 text-blue-600 mr-2" />
          <h3 className="font-semibold">Quelle</h3>
        </div>
        <div className="space-y-2">
          {Object.entries(stats.bySource).map(([source, count]) => (
            <div key={source} className="flex justify-between items-center">
              <span className="text-sm text-gray-600">{source}</span>
              <span className="font-medium">{count}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex items-center mb-3">
          <Users className="w-5 h-5 text-blue-600 mr-2" />
          <h3 className="font-semibold">Einheiten</h3>
        </div>
        <div className="space-y-2">
          {Object.entries(stats.byUnits).map(([range, count]) => (
            <div key={range} className="flex justify-between items-center">
              <span className="text-sm text-gray-600">{range}</span>
              <span className="font-medium">{count}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex items-center mb-3">
          <Euro className="w-5 h-5 text-blue-600 mr-2" />
          <h3 className="font-semibold">Budget (pro Einheit)</h3>
        </div>
        <div className="space-y-2">
          {Object.entries(stats.byBudget).map(([range, count]) => (
            <div key={range} className="flex justify-between items-center">
              <span className="text-sm text-gray-600">{range} €</span>
              <span className="font-medium">{count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
