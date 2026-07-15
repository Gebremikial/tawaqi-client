import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import { AppShell } from './components/layout/AppShell';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { LandingPage } from './features/auth/LandingPage';
import { LoginPage } from './features/auth/LoginPage';
import { RegisterPage } from './features/auth/RegisterPage';
import { FeedPage } from './features/feed/FeedPage';
import { JobsPage } from './features/jobs/JobsPage';
import { ProfilePage } from './features/profile/ProfilePage';
import { ConnectionsPage } from './features/connections/ConnectionsPage';
import { SearchPage } from './features/search/SearchPage';
import { MessagesPage } from './features/messages/MessagesPage';
import { AnalyticsPage } from './features/analytics/AnalyticsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: React.createElement(AppShell),
    children: [
      { index: true, element: React.createElement(LandingPage) },
      { path: 'login', element: React.createElement(LoginPage) },
      { path: 'register', element: React.createElement(RegisterPage) },
      {
        element: React.createElement(ProtectedRoute),
        children: [
          { path: 'feed', element: React.createElement(FeedPage) },
          { path: 'jobs', element: React.createElement(JobsPage) },
          { path: 'profile', element: React.createElement(ProfilePage) },
          { path: 'connections', element: React.createElement(ConnectionsPage) },
          { path: 'search', element: React.createElement(SearchPage) },
          { path: 'messages', element: React.createElement(MessagesPage) },
          { path: 'analytics', element: React.createElement(AnalyticsPage) },
        ],
      },
      { path: '*', element: React.createElement(Navigate, { to: '/', replace: true }) },
    ],
  },
]);
