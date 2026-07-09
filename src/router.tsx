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
    element: <AppShell />,
    children: [
      // Public Routes
      { index: true, element: <LandingPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },

      // Protected Routes (Wrapped in ProtectedRoute)
      {
        element: <ProtectedRoute />,
        children: [
          { path: 'feed', element: <FeedPage /> },
          { path: 'jobs', element: <JobsPage /> },
          { path: 'profile', element: <ProfilePage /> },
          { path: 'connections', element: <ConnectionsPage /> },
          { path: 'search', element: <SearchPage /> },
          { path: 'messages', element: <MessagesPage /> },
          { path: 'analytics', element: <AnalyticsPage /> },
        ],
      },
      
      // Fallback Route
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
]);