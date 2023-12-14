import React from 'react';
import img from '../images/logo.png';

function Home() {
  return (
    <div>
      <h1>Solucionessss</h1>
      <p>This is the content of the home page.</p>
      <img src={img} alt='logo'/>
    </div>
  );
}

export default Home;
