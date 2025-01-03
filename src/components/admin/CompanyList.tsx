import React, { useState } from 'react';
import { useStore } from '../../store/useStore';
import { Plus, Edit, Trash2 } from 'lucide-react';
import type { Company } from '../../types';

export function CompanyList() {
  const { companies, addCompany, updateCompany, deleteCompany } = useStore();
  const [isEditing, setIsEditing] = useState(false);
  const [editingCompany, setEditingCompany] = useState<Company | null>(null);

  const initialCompanyState: Omit<Company, 'id'> = {
    name: '',
    location: '',
    linkedInProfile: '',
    emails: [''],
    phoneNumbers: [''],
    comments: '',
    communicationPeriodicity: 14, // Default to 2 weeks
  };

  const [formData, setFormData] = useState(initialCompanyState);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing && editingCompany) {
      updateCompany({ ...formData, id: editingCompany.id } as Company);
    } else {
      addCompany({ ...formData, id: crypto.randomUUID() } as Company);
    }
    setFormData(initialCompanyState);
    setIsEditing(false);
    setEditingCompany(null);
  };

  const handleEdit = (company: Company) => {
    setIsEditing(true);
    setEditingCompany(company);
    setFormData(company);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this company?')) {
      deleteCompany(id);
    }
  };

  return (
    <div className="space-y-6">
      <button
        onClick={() => {
          setIsEditing(false);
          setEditingCompany(null);
          setFormData(initialCompanyState);
        }}
        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        <Plus className="w-4 h-4 mr-2" />
        Add Company
      </button>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Company Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
              placeholder='Company Location'
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">LinkedIn Profile</label>
          <input
            type="url"
            value={formData.linkedInProfile}
            onChange={(e) => setFormData({ ...formData, linkedInProfile: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
            placeholder='LinkedIn Profile'
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email Addresses</label>
          {formData.emails.map((email, index) => (
            <div key={index} className="flex mt-1">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  const newEmails = [...formData.emails];
                  newEmails[index] = e.target.value;
                  setFormData({ ...formData, emails: newEmails });
                }}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
                placeholder='Email Address'
              />
              {index === formData.emails.length - 1 && (
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, emails: [...formData.emails, ''] })}
                  className="ml-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                >
                  +
                </button>
              )}
            </div>
          ))}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Numbers</label>
          {formData.phoneNumbers.map((phone, index) => (
            <div key={index} className="flex mt-1">
              <input
                type="tel"
                value={phone}
                onChange={(e) => {
                  const newPhones = [...formData.phoneNumbers];
                  newPhones[index] = e.target.value;
                  setFormData({ ...formData, phoneNumbers: newPhones });
                }}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
                placeholder='Phone Number'
              />
              {index === formData.phoneNumbers.length - 1 && (
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, phoneNumbers: [...formData.phoneNumbers, ''] })}
                  className="ml-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                >
                  +
                </button>
              )}
            </div>
          ))}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Communication Periodicity (days)</label>
          <input
            type="number"
            min="1"
            value={formData.communicationPeriodicity}
            onChange={(e) => setFormData({ ...formData, communicationPeriodicity: parseInt(e.target.value) })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
            placeholder='Communication Periodicity'
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Comments</label>
          <textarea
            value={formData.comments}
            onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            rows={3}
            placeholder="Comments"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          {isEditing ? 'Update Company' : 'Add Company'}
        </button>
      </form>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Company
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Periodicity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {companies.map((company) => (
              <tr key={company.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{company.name}</div>
                  <div className="text-sm text-gray-500">{company.emails[0]}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {company.location}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {company.communicationPeriodicity} days
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleEdit(company)}
                    className="text-blue-600 hover:text-blue-900 mr-4"
                    title="Edit Company"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(company.id)}
                    className="text-red-600 hover:text-red-900"
                    title="Delete Company"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}