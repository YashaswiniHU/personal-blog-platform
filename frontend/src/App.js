import React, { useState, useEffect } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import { fetchPosts, createPost } from './api'; // Import API methods
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const data = await fetchPosts();
      setPosts(data);
    }
    loadPosts();
  }, []);

  const addPost = async (newPostData) => {
    const newPost = await createPost(newPostData);
    if (newPost) setPosts([newPost, ...posts]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Personal Blog</h1>
        <h3>Welcome to My Personal Blog</h3>
      </header>
      <main>
        <PostForm addPost={addPost} />
        <PostList posts={posts} />
      </main>
    </div>
  );
}

export default App;
