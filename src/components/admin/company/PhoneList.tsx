import React from 'react';

interface PhoneListProps {
  phones: string[];
  onChange: (phones: string[]) => void;
}

export function PhoneList({ phones, onChange }: PhoneListProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">Phone Numbers</label>
      {phones.map((phone, index) => (
        <div key={index} className="flex mt-1">
          <input
            type="tel"
            value={phone}
            onChange={(e) => {
              const newPhones = [...phones];
              newPhones[index] = e.target.value;
              onChange(newPhones);
            }}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
            placeholder='Phone Number'
          />
          {index === phones.length - 1 && (
            <button
              type="button"
              onClick={() => onChange([...phones, ''])}
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