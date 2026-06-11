import React from 'react';

const Navbar = ({ setCurrentPage, currentPage }) => {
  const linkStyle = (page) => ({
    background: 'none',
    border: 'none',
    color: currentPage === page ? '#007bff' : '#333',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    fontFamily: 'sans-serif'
  });

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '13px 28px', backgroundColor: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 80 }}>
      <h1 onClick={() => setCurrentPage('home')} style={{ color: '#007bff', margin: 0, fontFamily: 'sans-serif', cursor: 'pointer' }}> MOBAIL ZONE</h1>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={() => setCurrentPage('home')} style={linkStyle('home')}>Home</button>
        <img scr ="https://www.google.com/imgres?q=MOBILE%20LOGO&imgurl=https%3A%2F%2Fwww.vhv.rs%2Fdpng%2Fd%2F21-211236_transparent-background-mobile-logo-png-png-download.png&imgrefurl=https%3A%2F%2Fwww.vhv.rs%2Fviewpic%2FiJTTox_transparent-background-mobile-logo-png-png-download%2F&docid=G5l7NtR2uXEMqM&tbnid=S9MLzehMGmizOM&vet=12ahUKEwiay5zvuvyUAxVU1jgGHR0ZDvYQnPAOegQIaxAB..i&w=860&h=947&hcb=2&ved=2ahUKEwiay5zvuvyUAxVU1jgGHR0ZDvYQnPAOegQIaxAB"/>
        <button onClick={() => setCurrentPage('products')} style={linkStyle('products')}>Products</button>
        <button onClick={() => setCurrentPage('about')} style={linkStyle('about')}>About</button>
        <button onClick={() => setCurrentPage('contact')} style={linkStyle('contact')}>Contact</button>
      </div>
      <button style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>Cart (0)</button>
    </nav>
  );
};

export default Navbar;