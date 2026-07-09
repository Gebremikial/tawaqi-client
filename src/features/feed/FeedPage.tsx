import { PostCard } from './PostCard'
import type { Post } from '../../types/post'

const mockPosts: Post[] = [
  {
    id: '1',
    author_id: 'a1',
    author: {
      id: 'a1',
      email: 'john@tawaqi.com',
      name: 'John Director',
      username: 'johndir',
      role: 'talent',
      profession: 'Director',
      location: 'Addis Ababa',
      bio: 'Award-winning short film director.',
      is_verified: true,
      is_active: true,
      created_at: '2026-01-01',
    },
    content: 'Just wrapped a new short film in Addis and I am sharing the behind-the-scenes moments.',
    media_urls: [],
    post_type: 'text',
    visibility: 'public',
    likes_count: 24,
    comments_count: 6,
    created_at: '2026-07-03',
  },
  {
    id: '2',
    author_id: 'a2',
    author: {
      id: 'a2',
      email: 'selam@tawaqi.com',
      name: 'Selam Bekele',
      username: 'selamb',
      role: 'media',
      profession: 'Content Producer',
      location: 'Nairobi',
      bio: 'Curating stories for entertainment brands.',
      is_verified: true,
      is_active: true,
      created_at: '2026-02-14',
    },
    content: 'Looking for fresh casting submissions for a new documentary series. We are prioritizing local creatives.',
    media_urls: ['https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80'],
    post_type: 'image',
    visibility: 'public',
    likes_count: 41,
    comments_count: 11,
    created_at: '2026-07-04',
  },
]

export const FeedPage = () => {
  return (
    <section className="page-stack">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Community</p>
          <h1>Newsfeed</h1>
          <p className="subtle">Stay in sync with your network, opportunities, and content.</p>
        </div>
      </div>

      <div className="composer-card">
        <h2>Share an update</h2>
        <p>Draft a post, announce a project, or call for collaborators.</p>
        <button type="button">Create post</button>
      </div>

      <div className="feed-list">
        {mockPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}
