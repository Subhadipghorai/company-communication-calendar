import React from 'react';

interface EmailListProps {
  emails: string[];
  onChange: (emails: string[]) => void;
}

export function EmailList({ emails, onChange }: EmailListProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">Email Addresses</label>
      {emails.map((email, index) => (
        <div key={index} className="flex mt-1">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              const newEmails = [...emails];
              newEmails[index] = e.target.value;
              onChange(newEmails);
            }}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
            placeholder='Email Address'
          />
          {index === emails.length - 1 && (
            <button
              type="button"
              onClick={() => onChange([...emails, ''])}
              className="ml-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
            >
              +
            </button>
          )}
        </div>
      ))}
    </div>
  );
}