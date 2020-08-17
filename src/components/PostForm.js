import React, { useState } from 'react';

const PostForm = () => {
  const [body, setBody] = useState('');
  const [title, setTitle] = useState('');

  const submitPost = (event) => {
    event.preventDefault();

    const post = {
      title,
      body,
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h1>Add Post</h1>
      <form onSubmit={submitPost}>
        <div>
          <label>Title: </label>
          <br />
          <input
            type="text"
            name="title"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
          />
        </div>
        <div>
          <label>Body: </label>
          <br />
          <textarea
            name="body"
            onChange={(event) => setBody(event.target.value)}
            value={body}
          />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostForm;
