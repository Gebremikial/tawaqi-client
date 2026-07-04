// client/src/features/feed/FeedPage.tsx
import React from 'react';
import { PostCard } from './PostCard';
import { Post } from '../../types/post';

// Mock data for now until the backend is integrated
const mockPosts: Post[] = [
  {
    id: '1',
    author: { id: 'a1', name: 'John Director', username: 'johndir', role: 'talent', is_verified: true, is_active: true, created_at: '2026-01-01' },
    author_id: 'a1',
    content: 'Just finished shooting a new short film in Addis! #filmmaking',
    media_urls: [],
    post_type: 'text',
    visibility: 'public',
    likes_count: 12,
    comments_count: 3,
    created_at: '2026-07-03'
  }
];

export const FeedPage: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Newsfeed</h1>
      
      {/* Post Composer placeholder would go here  */}
      
      <div className="feed-list">
        {mockPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};