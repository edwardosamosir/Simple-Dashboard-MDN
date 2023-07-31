import React from 'react';
import underConstructionPic from '../assets/underConstruction.jpg';

export default function CustomersCookingPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1 style={{ textAlign: 'center' }}>Customers page is still under construction.</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
        <img src={underConstructionPic} alt="Under Construction" style={{ maxWidth: '100%', maxHeight: '100%', width: '400px' }} />
      </div>
    </div>
  );
}
  