import React, { useEffect } from 'react';
import { Mail } from 'lucide-react';
import { EmailTemplate } from '../types';

interface EmailNotificationProps {
  email: EmailTemplate;
  onClose: () => void;
}

export const EmailNotification: React.FC<EmailNotificationProps> = ({ email, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-4 left-4 right-4 sm:left-auto sm:right-4 bg-blue-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 animate-fade-in z-50">
      <Mail className="w-5 h-5 flex-shrink-0" />
      <div className="flex-grow">
        <p className="text-sm font-medium line-clamp-1">{email.subject}</p>
        <p className="text-xs opacity-90">E-Mail wurde erfolgreich versendet</p>
      </div>
      <button
        onClick={onClose}
        className="text-white opacity-70 hover:opacity-100 p-1"
        aria-label="Schließen"
      >
        ×
      </button>
    </div>
  );
};
