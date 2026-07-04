// client/src/features/feed/PostCard.tsx
import React from 'react';
import { Post } from '../../types/post';

interface PostCardProps {
  post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white mb-4">
      <div className="flex items-center mb-3">
        {/* Placeholder for Avatar component */}
        <div className="w-10 h-10 rounded-full bg-gray-200 mr-3" />
        <h3 className="font-semibold">{post.author.name}</h3>
      </div>
      
      <p className="mb-3">{post.content}</p>
      
      {/* Media Rendering */}
      {post.media_urls.length > 0 && (
        <div className="mb-3">
          <img src={post.media_urls[0]} alt="Post media" className="rounded" />
        </div>
      )}

      <div className="flex gap-4 text-sm text-gray-600">
        <span>{post.likes_count} Likes</span>
        <span>{post.comments_count} Comments</span>
      </div>
    </div>
  );
};