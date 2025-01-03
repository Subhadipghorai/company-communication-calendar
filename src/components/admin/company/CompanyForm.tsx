import React from 'react';
import type { Company } from '../../../types';
import { EmailList } from './EmailList';
import { PhoneList } from './PhoneList';

interface CompanyFormProps {
  formData: Omit<Company, 'id'>;
  isEditing: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (data: Omit<Company, 'id'>) => void;
}

export function CompanyForm({ formData, isEditing, onSubmit, onChange }: CompanyFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Company Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => onChange({ ...formData, name: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
            placeholder='Company Name'
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            value={formData.location}
            onChange={(e) => onChange({ ...formData, location: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
            placeholder='Location'
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">LinkedIn Profile</label>
        <input
          type="url"
          value={formData.linkedInProfile}
          onChange={(e) => onChange({ ...formData, linkedInProfile: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
          placeholder='LinkedIn Profile'
        />
      </div>

      <EmailList 
        emails={formData.emails} 
        onChange={(emails) => onChange({ ...formData, emails })} 
      />

      <PhoneList 
        phones={formData.phoneNumbers} 
        onChange={(phoneNumbers) => onChange({ ...formData, phoneNumbers })} 
      />

      <div>
        <label className="block text-sm font-medium text-gray-700">Communication Periodicity (days)</label>
        <input
          type="number"
          min="1"
          value={formData.communicationPeriodicity}
          onChange={(e) => onChange({ ...formData, communicationPeriodicity: parseInt(e.target.value) })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
          placeholder='Communication Periodicity'
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Comments</label>
        <textarea
          value={formData.comments}
          onChange={(e) => onChange({ ...formData, comments: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          rows={3}
          placeholder='Comments'

        />
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        {isEditing ? 'Update Company' : 'Add Company'}
      </button>
    </form>
  );
}