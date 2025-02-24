import React from 'react';
import { Filter, ChevronDown, Home, MapPin, ListChecks, Users, Euro } from 'lucide-react';
import { LeadFilter } from '../types';

interface LeadFiltersProps {
  filters: LeadFilter;
  onFilterChange: (newFilters: LeadFilter) => void;
  availableLocations: string[];
  availablePropertyTypes: string[];
  availableSources: string[];
  onPresetFilterChange: (newFilters: LeadFilter) => void;
}

export const LeadFilters: React.FC<LeadFiltersProps> = ({
  filters,
  onFilterChange,
  availableLocations,
  availablePropertyTypes,
  availableSources,
  onPresetFilterChange,
}) => {
  const handlePropertyTypeChange = (type: string) => {
    const newTypes = filters.propertyType.includes(type)
      ? filters.propertyType.filter((t) => t !== type)
      : [...filters.propertyType, type];
    onFilterChange({ ...filters, propertyType: newTypes });
  };

  const handleLocationChange = (location: string) => {
    const newLocations = filters.location.includes(location)
      ? filters.location.filter((l) => l !== location)
      : [...filters.location, location];
    onFilterChange({ ...filters, location: newLocations });
  };

  const handleStatusChange = (status: string) => {
    const newStatus = filters.status.includes(status)
      ? filters.status.filter((s) => s !== status)
      : [...filters.status, status];
    onFilterChange({ ...filters, status: newStatus });
  };

  const handleUnitsChange = (field: 'min' | 'max', value: number | null) => {
    onFilterChange({
      ...filters,
      units: { ...filters.units, [field]: value },
    });
  };

  const handleBudgetChange = (field: 'min' | 'max', value: number | null) => {
    onFilterChange({
      ...filters,
      budget: { ...filters.budget, [field]: value },
    });
  };

  const applyPresetFilter = (presetFilters: LeadFilter) => {
    onPresetFilterChange(presetFilters);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-gray-700 mb-1 flex items-center"><ListChecks className="w-4 h-4 mr-1 text-gray-500" /> Schnellfilter</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => applyPresetFilter({
              propertyType: ['Mehrfamilienhaus'],
              location: [],
              status: [],
              source: [],
              units: { min: null, max: 50 },
              budget: { min: null, max: null },
            })}
            className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
          >
            MFH bis 50 Einheiten
          </button>
          <button
            onClick={() => applyPresetFilter({
              propertyType: ['Gewerbeimmobilie'],
              location: [],
              status: [],
              source: [],
              units: { min: null, max: null },
              budget: { min: null, max: null },
            })}
            className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-800 hover:bg-green-200 transition-colors"
          >
            Gewerbeobjekte
          </button>
          <button
            onClick={() => applyPresetFilter({
              propertyType: [],
              location: [],
              status: ['new'],
              source: [],
              units: { min: null, max: null },
              budget: { min: null, max: null },
            })}
            className="px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800 hover:bg-yellow-200 transition-colors"
          >
            Neue Leads
          </button>
          <button
            onClick={() => applyPresetFilter({
              propertyType: [],
              location: [],
              status: [],
              source: [],
              units: { min: null, max: null },
              budget: { min: null, max: null },
            })}
            className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
          >
            Alle
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="mb-2">
          <label htmlFor="property-type" className="block text-sm font-medium text-gray-700 flex items-center"><Home className="w-4 h-4 mr-1 text-gray-500" /> Immobilientyp</label>
          <div className="relative mt-1">
            <select
              id="property-type"
              multiple
              value={filters.propertyType}
              onChange={(e) =>
                handlePropertyTypeChange(
                  Array.from(e.target.selectedOptions).map((option) => option.value)[0]
                )
              }
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
              {availablePropertyTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
          </div>
        </div>

        <div className="mb-2">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 flex items-center"><MapPin className="w-4 h-4 mr-1 text-gray-500" /> Standort</label>
          <div className="relative mt-1">
            <select
              id="location"
              multiple
              value={filters.location}
              onChange={(e) =>
                handleLocationChange(
                  Array.from(e.target.selectedOptions).map((option) => option.value)[0]
                )
              }
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
              {availableLocations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
          </div>
        </div>

        <div className="mb-2">
          <label htmlFor="status" className="block text-sm font-medium text-gray-700 flex items-center"><ListChecks className="w-4 h-4 mr-1 text-gray-500" /> Status</label>
          <div className="relative mt-1">
            <select
              id="status"
              multiple
              value={filters.status}
              onChange={(e) =>
                handleStatusChange(
                  Array.from(e.target.selectedOptions).map((option) => option.value)[0]
                )
              }
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
              {['new', 'contacted', 'interested', 'not_interested'].map((status) => (
                <option key={status} value={status}>
                  {status === 'new'
                    ? 'Neu'
                    : status === 'contacted'
                    ? 'Kontaktiert'
                    : status === 'interested'
                    ? 'Interessiert'
                    : 'Nicht interessiert'}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
          </div>
        </div>

        <div className="mb-2">
          <label htmlFor="units-min" className="block text-sm font-medium text-gray-700 flex items-center"><Users className="w-4 h-4 mr-1 text-gray-500" /> Einheiten</label>
          <div className="flex space-x-2 mt-1">
            <input
              type="number"
              id="units-min"
              value={filters.units.min ?? ''}
              onChange={(e) => handleUnitsChange('min', e.target.value ? parseInt(e.target.value, 10) : null)}
              className="block w-1/2 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              placeholder="Min"
            />
            <input
              type="number"
              id="units-max"
              value={filters.units.max ?? ''}
              onChange={(e) => handleUnitsChange('max', e.target.value ? parseInt(e.target.value, 10) : null)}
              className="block w-1/2 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              placeholder="Max"
            />
          </div>
        </div>

        <div className="mb-2">
          <label htmlFor="budget-min" className="block text-sm font-medium text-gray-700 flex items-center"><Euro className="w-4 h-4 mr-1 text-gray-500" /> Budget €</label>
          <div className="flex space-x-2 mt-1">
            <input
              type="number"
              id="budget-min"
              value={filters.budget.min ?? ''}
              onChange={(e) => handleBudgetChange('min', e.target.value ? parseInt(e.target.value, 10) : null)}
              className="block w-1/2 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              placeholder="Min"
            />
            <input
              type="number"
              id="budget-max"
              value={filters.budget.max ?? ''}
              onChange={(e) => handleBudgetChange('max', e.target.value ? parseInt(e.target.value, 10) : null)}
              className="block w-1/2 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              placeholder="Max"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
