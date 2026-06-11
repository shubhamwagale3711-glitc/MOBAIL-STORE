import React from 'react';

const ProductCard = ({ name, price, imageUrl }) => {
return (
<div style={{ border: '1px solid #eee', borderRadius: '10px', padding: '15px', width: '220px', backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', fontFamily: 'sans-serif' }}>
<div style={{ height: '160px', backgroundColor: '#f3f4f6', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px', overflow: 'hidden' }}>
<img
src={imageUrl || "https://m.media-amazon.com/images/I/61giwQtR1qL.SX679.jpg"}
alt={name || "Smartphone"}
style={{ width: '90%', height: '90%', objectFit: 'cover' }}
onError={(e) => {
e.target.src = "https://m.media-amazon.com/images/I/61giwQtR1qL.SX679.jpg";
}}
/>
</div>
<h3 style={{ fontSize: '18px', margin: '0 0 8px 0', color: '#333' }}>{name || "Smartphone X"}</h3>
<p style={{ fontSize: '14px', color: '#666', margin: '0 0 12px 0' }}>8GB RAM | 128GB Storage</p>
<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
<span style={{ fontSize: '18px', fontWeight: 'bold', color: '#007bff' }}>{price || "₹49,999"}</span>
<span style={{ color: '#ffc107', fontSize: '14px' }}></span>
</div>
<button style={{ width: '100%', backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '8px 0', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
Add to Cart
</button>
</div>
);
};

export default ProductCard;