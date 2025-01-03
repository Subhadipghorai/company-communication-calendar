import React, { useState } from 'react';
import { useStore } from '../../../store/useStore';
import { Plus } from 'lucide-react';
import type { Company } from '../../../types';
import { CompanyForm } from './CompanyForm';
import { CompanyTable } from './CompanyTable';

const initialCompanyState: Omit<Company, 'id'> = {
  name: '',
  location: '',
  linkedInProfile: '',
  emails: [''],
  phoneNumbers: [''],
  comments: '',
  communicationPeriodicity: 14, // Default to 2 weeks
};

export function CompanyList() {
  const { companies, addCompany, updateCompany, deleteCompany } = useStore();
  const [isEditing, setIsEditing] = useState(false);
  const [editingCompany, setEditingCompany] = useState<Company | null>(null);
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

      <CompanyForm
        formData={formData}
        isEditing={isEditing}
        onSubmit={handleSubmit}
        onChange={setFormData}
      />

      <CompanyTable
        companies={companies}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}