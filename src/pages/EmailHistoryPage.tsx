import React, { useState } from 'react';
import { EmailHistory } from '../types';
import { Mail, Search, Filter } from 'lucide-react';

interface EmailHistoryPageProps {
  emails: EmailHistory[];
}

export const EmailHistoryPage: React.FC<EmailHistoryPageProps> = ({ emails }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<'all' | 'seller' | 'buyer'>('all');
  const [showEmailContent, setShowEmailContent] = useState<string | null>(null);

  const filteredEmails = emails
    .filter(email => 
      (selectedType === 'all' || email.type === selectedType) &&
      (email.recipient.toLowerCase().includes(searchTerm.toLowerCase()) ||
       email.email.subject.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-xl font-semibold text-gray-700">E-Mail-Verlauf</h2>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <div className="relative flex-grow sm:flex-grow-0">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Suche nach Empfänger oder Betreff"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value as 'all' | 'seller' | 'buyer')}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md appearance-none bg-white"
            >
              <option value="all">Alle E-Mails</option>
              <option value="seller">Abgeber</option>
              <option value="buyer">Interessenten</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="divide-y divide-gray-200">
          {filteredEmails.map((email) => (
            <div key={email.id} className="p-4 hover:bg-gray-50">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <Mail className={`w-5 h-5 mt-1 ${email.type === 'seller' ? 'text-blue-600' : 'text-green-600'}`} />
                  <div>
                    <p className="font-medium text-gray-900">{email.recipient}</p>
                    <p className="text-sm text-gray-600">{email.email.subject}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(email.timestamp).toLocaleString('de-DE', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowEmailContent(showEmailContent === email.id ? null : email.id)}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  {showEmailContent === email.id ? 'Ausblenden' : 'Anzeigen'}
                </button>
              </div>
              {showEmailContent === email.id && (
                <div className="mt-4 pl-8 text-sm text-gray-700 whitespace-pre-wrap">
                  {email.email.body}
                </div>
              )}
            </div>
          ))}
          {filteredEmails.length === 0 && (
            <div className="p-4 text-center text-gray-500">
              Keine E-Mails gefunden
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
