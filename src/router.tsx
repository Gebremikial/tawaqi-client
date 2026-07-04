import { createBrowserRouter } from 'react-router-dom';
// Import your pages from src/features/... once you create them
export const router = createBrowserRouter([
  { path: '/', element: <LandingPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/feed', element: <FeedPage /> },
  // Add other routes here as per the documentation [cite: 95]
]);