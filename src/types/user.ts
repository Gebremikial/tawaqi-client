// src/types/user.ts

export type UserRole = 'talent' | 'recruiter' | 'media' | 'admin';

export interface User {
  id: string;
  email: string;
  name: string;
  username: string;
  role: UserRole;
  profession?: string;
  location?: string;
  bio?: string;
  avatar_url?: string;
  cover_url?: string;
  is_verified: boolean;
  is_active: boolean;
  created_at: string;
}

export interface UserSkill {
  id: string;
  user_id: string;
  skill_name: string;
  endorsement_count: number;
}