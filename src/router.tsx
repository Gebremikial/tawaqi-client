import { createBrowserRouter } from "react-router-dom";
import FeedPage from "@/features/feed/FeedPage";
import LoginPage from "@/features/auth/LoginPage";
import RegisterPage from "@/features/auth/RegisterPage";
import ProfilePage from "@/features/profile/ProfilePage";
import JobsPage from "@/features/jobs/JobsPage";

export const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/feed", element: <FeedPage /> },
  { path: "/profile/:username", element: <ProfilePage /> },
  { path: "/jobs", element: <JobsPage /> },
  // more routes added as we build each feature
]);