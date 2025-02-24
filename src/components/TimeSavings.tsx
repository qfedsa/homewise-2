import React from 'react';
import { Clock } from 'lucide-react';

interface TimeSavingsProps {
  automatedEmailsCount: number;
  leadsGeneratedCount: number;
}

export const TimeSavings: React.FC<TimeSavingsProps> = ({ automatedEmailsCount, leadsGeneratedCount }) => {
  // Assume 15 minutes to manually generate each lead
  const manualLeadGenerationTimePerLead = 15;
  const totalManualLeadGenerationTime = leadsGeneratedCount * manualLeadGenerationTimePerLead;

  // Assume 5 minutes to manually send each email
  const manualEmailTimePerEmail = 5;
  const totalManualEmailTime = automatedEmailsCount * manualEmailTimePerEmail;

  const totalManualTimeInMinutes = totalManualLeadGenerationTime + totalManualEmailTime;
  const totalManualTimeInHours = totalManualTimeInMinutes / 60;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center mb-4">
        <Clock className="w-6 h-6 text-blue-600 mr-2" />
        <h2 className="text-lg font-semibold">Zeitersparnis</h2>
      </div>
      <div>
        <p className="text-gray-700">
          Geschätzte Zeit für Lead-Generierung: <span className="font-medium">{totalManualLeadGenerationTime} Minuten</span>
        </p>
        <p className="text-gray-700">
          Geschätzte Zeit für E-Mail-Versand: <span className="font-medium">{totalManualEmailTime} Minuten</span>
        </p>
        <p className="text-lg font-semibold text-blue-700 mt-4">
          Gesamt: <span className="font-bold">{totalManualTimeInHours.toFixed(1)} Stunden</span>
        </p>
        <p className="text-gray-600 mt-2 text-sm">
          * Schätzung basiert auf 15 Minuten pro Lead und 5 Minuten pro E-Mail.
        </p>
      </div>
    </div>
  );
};
