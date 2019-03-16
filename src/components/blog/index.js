import React, { useState, useEffect } from 'react';

const Home = () => {
  const [value, setValue] = useState('');

  useEffect(() => {
    return () => {}, [];
  });

  return (
    <main>
      <input onChange={setValue()} name="title">
        {value}
      </input>
    </main>
  );
};

export default Home;
