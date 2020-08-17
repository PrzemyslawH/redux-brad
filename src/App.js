import React from 'react';

import Posts from './components/Posts';
import PostForm from './components/PostForm';

function App() {
  return (
    <div>
      <PostForm />
      <hr />
      <Posts />
    </div>
  );
}

export default App;
