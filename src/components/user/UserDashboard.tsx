import React from 'react';
import { CompanyGrid } from './CompanyGrid.tsx';
import { NotificationPanel } from './NotificationPanel.tsx';
import { CalendarView } from './CalendarView.tsx';

export function UserDashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <CompanyGrid />
        <CalendarView />
      </div>
      
      <div className="lg:col-span-1">
        <NotificationPanel />
      </div>
    </div>
  );
}