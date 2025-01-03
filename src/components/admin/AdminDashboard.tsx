import React from 'react';
import { CompanyList } from './CompanyList.tsx';
import { CommunicationMethodList } from './CommunicationMethodList.tsx';

export function AdminDashboard() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Company Management
        </h2>
        <CompanyList />
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Communication Methods
        </h2>
        <CommunicationMethodList />
      </section>
    </div>
  );
}