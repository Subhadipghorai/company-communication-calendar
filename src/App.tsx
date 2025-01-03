import * as React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { UserDashboard } from './components/user/UserDashboard';
import { Calendar } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <Calendar className="h-6 w-6 text-blue-600 mr-2" />
          <h1 className="text-xl font-semibold text-gray-900">
            Company Communication Calendar
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="user" className="space-y-4">
          <TabsList>
            <TabsTrigger value="user">User Dashboard</TabsTrigger>
            <TabsTrigger value="admin">Admin Dashboard</TabsTrigger>
          </TabsList>
          
          <TabsContent value="user">
            <UserDashboard />
          </TabsContent>
          
          <TabsContent value="admin">
            <AdminDashboard />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

export default App;