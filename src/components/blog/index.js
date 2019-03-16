import React, { useState } from 'react';

const Home = () => {
  const [value, setValue] = useState('');

  //   useEffect(() => {
  //     return () => {}, [];
  //   });

  return (
    <main
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column'
      }}>
      <p>The Micro Blog</p>
      <input onChange={setValue()} name="title" />
    </main>
  );
};

export default Home;
