import React from 'react';
import { useStore } from '../../store/useStore';
import { Check, X } from 'lucide-react';

export function CommunicationMethodList() {
  const { communicationMethods } = useStore();

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Method
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Sequence
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Mandatory
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {communicationMethods.map((method) => (
            <tr key={method.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{method.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{method.description}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {method.sequence}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {method.isMandatory ? (
                  <Check className="w-5 h-5 text-green-600" />
                ) : (
                  <X className="w-5 h-5 text-red-600" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}