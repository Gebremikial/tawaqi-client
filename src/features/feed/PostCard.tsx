import type { Post } from '../../types/post'

interface PostCardProps {
  post: Post
}

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <article className="card post-card">
      <div className="post-header">
        <div className="avatar">{post.author.name.charAt(0)}</div>
        <div>
          <h3>{post.author.name}</h3>
          <p>{post.author.profession ?? 'Creative professional'} • {post.author.location ?? 'Global'}</p>
        </div>
      </div>

      <p className="post-content">{post.content}</p>

      {post.media_urls.length > 0 && (
        <img className="post-image" src={post.media_urls[0]} alt="Post media" />
      )}

      <div className="post-meta">
        <span>{post.likes_count} likes</span>
        <span>{post.comments_count} comments</span>
        <span>{post.post_type}</span>
      </div>
    </article>
  )
}
