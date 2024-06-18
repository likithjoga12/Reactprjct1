// src/MultipurposePage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const Multipurpose = () => {
  const { type } = useParams();

  const renderContent = () => {
    switch (type) {
      case 'about':
        return <div>This is the About Page</div>;
      case 'contact':
        return <div>This is the Contact Page</div>;
      case 'services':
        return <div>This is the Services Page</div>;
      default:
        return <div>Welcome to our website!</div>;
        
    }
  };

  return (
    <div>
      <h1>Multipurpose </h1>
      {renderContent()}
    </div>
  );
};

export default Multipurpose;
