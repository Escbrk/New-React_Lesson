import React, { useState, useRef } from 'react';
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
import PostItem from './components/posts/PostItem';
import PostList from './components/PostList/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './css/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'React', body: 'Description' },
    { id: 3, title: 'Node.js', body: 'Description' },
    { id: 4, title: 'Vue', body: 'Description' },
  ]);

  const [post, setPost] = useState({ title: '', body: '' });

  function addNewPost(e) {
    e.preventDefault();

    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: '', body: '' });
  }
  return (
    <div className="App">
      <form>
        <MyInput
          value={post.title}
          onChange={e => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Posts name"
        />
        <MyInput
          value={post.body}
          onChange={e => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="Posts description"
        />
        <MyButton onClick={addNewPost}>Create Post</MyButton>
      </form>
      <PostList posts={posts} title="Posts List 1" />
    </div>
  );
}

export default App;
