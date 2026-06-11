import React from 'react';

const Hero = () => {
  return (
    <div style={{ backgroundColor: '#111827', color: '#fff', padding: '60px 20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '36px', marginBottom: '10px' }}>Latest Smartphones, Lowest Prices</h1>
      <p style={{ color: '#ccc', marginBottom: '20px' }}>Check out the new arrivals with 5G technology and amazing cameras.</p>
      <button style={{ backgroundColor: '#fff', color: '#111827', border: 'none', padding: '10px 24px', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer' }}>Shop Now</button>
    </div>
  );
};

export default Hero;