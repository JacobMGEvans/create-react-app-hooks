import React, { useState } from 'react';

const Home = () => {
  const [title, setTitle] = useState('');

  //   useEffect(() => {
  //     return () => {}, [];
  //   });

  return (
    <form
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column'
      }}>
      <p>The Micro Blog</p>
      <input onChange={e => setTitle(e.target.value)} name="title" />
      <textarea name="body" id="body" cols="30" rows="10">
        Post:
      </textarea>
    </form>
  );
};

export default Home;
