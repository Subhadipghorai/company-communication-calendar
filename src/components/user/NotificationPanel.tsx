import React from 'react';
import { useStore } from '../../store/useStore';
import { formatDate } from '../../lib/utils';

export function NotificationPanel() {
  const { companies, communications, communicationMethods } = useStore();

  const getOverdueCommunications = () => {
    const today = new Date();
    return companies.map(company => {
      const lastComm = communications
        .filter(comm => comm.companyId === company.id)
        .sort((a, b) => b.date.getTime() - a.date.getTime())[0];

      if (!lastComm) return null;

      const nextDueDate = new Date(lastComm.date);
      nextDueDate.setDate(nextDueDate.getDate() + company.communicationPeriodicity);

      if (nextDueDate < today) {
        return { company, dueDate: nextDueDate };
      }
      return null;
    }).filter(Boolean);
  };

  const getTodayCommunications = () => {
    const today = new Date();
    return companies.map(company => {
      const lastComm = communications
        .filter(comm => comm.companyId === company.id)
        .sort((a, b) => b.date.getTime() - a.date.getTime())[0];

      if (!lastComm) return null;

      const nextDueDate = new Date(lastComm.date);
      nextDueDate.setDate(nextDueDate.getDate() + company.communicationPeriodicity);

      if (
        nextDueDate.getDate() === today.getDate() &&
        nextDueDate.getMonth() === today.getMonth() &&
        nextDueDate.getFullYear() === today.getFullYear()
      ) {
        return { company, dueDate: nextDueDate };
      }
      return null;
    }).filter(Boolean);
  };

  const overdue = getOverdueCommunications();
  const todayDue = getTodayCommunications();

  return (
    <div className="bg-white rounded-lg shadow p-6 space-y-6">
      <div>
        <h3 className="text-lg font-medium text-red-600 mb-4">
          Overdue Communications ({overdue.length})
        </h3>
        <div className="space-y-3">
          {overdue.map((item) => (
            <div
              key={item.company.id}
              className="p-3 bg-red-50 rounded-lg border border-red-200"
            >
              <div className="font-medium text-red-900">{item.company.name}</div>
              <div className="text-sm text-red-700">
                Due: {formatDate(item.dueDate)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-yellow-600 mb-4">
          Due Today ({todayDue.length})
        </h3>
        <div className="space-y-3">
          {todayDue.map((item) => (
            <div
              key={item.company.id}
              className="p-3 bg-yellow-50 rounded-lg border border-yellow-200"
            >
              <div className="font-medium text-yellow-900">
                {item.company.name}
              </div>
              <div className="text-sm text-yellow-700">
                Due: {formatDate(item.dueDate)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}