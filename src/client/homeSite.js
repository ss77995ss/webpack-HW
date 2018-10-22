import React from 'react';
import './assets/style.css';

const HomeSite = () => {
  const welcomeText = 'Hello World';
  return (
    <div className="home">
      {welcomeText}
    </div>
  );
};

export default HomeSite;
