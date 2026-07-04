// src/types/job.ts

export interface JobCall {
  id: string;
  poster_id: string;
  title: string;
  location: string;
  salary: string;
  description: string;
  required_skills: string[];
  status: 'active' | 'closed' | 'draft';
  expires_at: string;
  created_at: string;
}