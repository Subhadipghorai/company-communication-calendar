import React from 'react';
import { Edit, Trash2 } from 'lucide-react';
import type { Company } from '../../../types';

interface CompanyTableProps {
  companies: Company[];
  onEdit: (company: Company) => void;
  onDelete: (id: string) => void;
}

export function CompanyTable({ companies, onEdit, onDelete }: CompanyTableProps) {
  return (
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
                  onClick={() => onEdit(company)}
                  className="text-blue-600 hover:text-blue-900 mr-4"
                  title="Edit"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onDelete(company.id)}
                  className="text-red-600 hover:text-red-900"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}