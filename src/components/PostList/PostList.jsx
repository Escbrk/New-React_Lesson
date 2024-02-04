import React from 'react';
import PostItem from '../posts/PostItem';

export default function PostList({ posts, title }) {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem number={index + 1} post={post} key={post.id} />
      ))}
    </>
  );
}
