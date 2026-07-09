// src/components/layout/AppLayout.tsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-6 hidden md:block">
        <h1 className="text-xl font-bold text-blue-600 mb-8">TAWAQI</h1>
        <nav className="space-y-4">
          <Link to="/feed" className="block p-2 hover:bg-gray-100 rounded">Feed</Link>
          <Link to="/jobs" className="block p-2 hover:bg-gray-100 rounded">Jobs</Link>
          <Link to="/messages" className="block p-2 hover:bg-gray-100 rounded">Messages</Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white border-b flex items-center px-6">
          <span className="font-semibold">Dashboard</span>
        </header>

        {/* Dynamic Page Content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};