// src/types/post.ts
import type { User } from './user';

export interface Post {
  id: string;
  author_id: string;
  author: User; // Populated from API
  content: string;
  media_urls: string[];
  post_type: 'text' | 'image' | 'video';
  visibility: 'public' | 'connections';
  likes_count: number;
  comments_count: number;
  created_at: string;
}