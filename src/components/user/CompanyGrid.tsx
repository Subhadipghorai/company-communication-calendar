import { useStore } from '../../store/useStore';
import { formatDate } from '../../lib/utils';
import { Tooltip } from '../ui/tooltip';

export function CompanyGrid() {
  const { companies, communications, communicationMethods } = useStore();

  const getLastFiveCommunications = (companyId: string) => {
    return communications
      .filter(comm => comm.companyId === companyId)
      .sort((a, b) => b.date.getTime() - a.date.getTime())
      .slice(0, 5);
  };

  const getNextScheduledCommunication = (companyId: string) => {
    const company = companies.find(c => c.id === companyId);
    if (!company) return null;

    const lastComm = communications
      .filter(comm => comm.companyId === companyId)
      .sort((a, b) => b.date.getTime() - a.date.getTime())[0];

    if (!lastComm) return null;

    const nextDate = new Date(lastComm.date);
    nextDate.setDate(nextDate.getDate() + company.communicationPeriodicity);

    return {
      date: nextDate,
      method: communicationMethods[0], // Default to first method in sequence
    };
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Company
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last 5 Communications
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Next Scheduled
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {companies.map((company) => {
              const lastFive = getLastFiveCommunications(company.id);
              const nextScheduled = getNextScheduledCommunication(company.id);
              
              return (
                <tr key={company.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {company.name}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      {lastFive.map((comm) => {
                        const method = communicationMethods.find(
                          m => m.id === comm.methodId
                        );
                        return (
                          <Tooltip
                            key={comm.id}
                            content={comm.notes}
                            className="bg-gray-800 text-white p-2 rounded text-sm"
                          >
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              {method?.name} - {formatDate(comm.date)}
                            </span>
                          </Tooltip>
                        );
                      })}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {nextScheduled && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {nextScheduled.method.name} - {formatDate(nextScheduled.date)}
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}