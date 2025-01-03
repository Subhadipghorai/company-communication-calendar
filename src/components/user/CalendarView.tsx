import React from 'react';
import { DayPicker } from 'react-day-picker';
import { useStore } from '../../store/useStore';

export function CalendarView() {
  const { communications, companies, communicationMethods } = useStore();

  const getCommunicationsForDate = (date: Date) => {
    return communications.filter(comm => {
      const commDate = new Date(comm.date);
      return (
        commDate.getDate() === date.getDate() &&
        commDate.getMonth() === date.getMonth() &&
        commDate.getFullYear() === date.getFullYear()
      );
    });
  };

  const modifiersStyles = {
    communication: {
      backgroundColor: '#3b82f6',
      color: 'white',
      borderRadius: '100%',
    },
  };

  const communicationDates = communications.map(comm => new Date(comm.date));

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Communication Calendar
      </h2>
      <div className="flex gap-8">
        <DayPicker
          modifiers={{ communication: communicationDates }}
          modifiersStyles={modifiersStyles}
          mode="single"
          onDayClick={(date) => {
            if (date) {
              const comms = getCommunicationsForDate(date);
              console.log('Communications for date:', comms);
            }
          }}
        />
        <div className="flex-1">
          <h3 className="text-lg font-medium text-gray-900 mb-3">Legend</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-blue-500" />
              <span className="text-sm text-gray-600">Communication</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-red-500" />
              <span className="text-sm text-gray-600">Overdue</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-yellow-500" />
              <span className="text-sm text-gray-600">Due Today</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}