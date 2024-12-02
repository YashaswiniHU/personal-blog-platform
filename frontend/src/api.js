const API_URL = 'http://localhost:5000/api';

// Fetch all posts
export const fetchPosts = async () => {
  try {
    const response = await fetch(`${API_URL}/posts`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

// Create a new post
export const createPost = async (post) => {
  try {
    const response = await fetch(`${API_URL}/posts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    });
    return await response.json();
  } catch (error) {
    console.error('Error creating post:', error);
    return null;
  }
};
