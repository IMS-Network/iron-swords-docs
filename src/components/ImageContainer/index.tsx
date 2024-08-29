import React from 'react';
import './styles.module.css';

const ConnectComponent = () => {
  return (
    <div className="connectContainer">
      <div className="imageContainer">
        <img src="/path-to-your-image.jpg" alt="Decorative" className="image" />
      </div>
      <div className="textContainer">
        <h1>Connect, innovate, succeed</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas
          massa vel nulla gravida pulvinar. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>
        <button className="ctaButton">Get started</button>
      </div>
    </div>
  );
};

export default ConnectComponent;
