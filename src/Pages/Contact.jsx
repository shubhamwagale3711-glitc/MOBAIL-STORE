import React from 'react';

const Contact = () => {
  return (
    <div style={{ padding: '50px 20px', maxWidth: '400px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '15px' }}>Contact Us</h2>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input type="text" placeholder="Your Name" style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ddd' }} />
        <input type="email" placeholder="Your Email" style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ddd' }} />
        <textarea placeholder="Your Message" style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ddd', height: '100px', resize: 'none' }}></textarea>
        <button type="button" style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '12px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
  );
};

export default Contact;