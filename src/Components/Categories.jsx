import React from 'react';

const Categories = () => {
  const brands = ['Apple', 'Samsung', 'OnePlus', 'Xiaomi', 'Realme'];
  return (
    <div style={{ padding: '40px 30px', backgroundColor: '#f9f9f9', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h3 style={{ marginBottom: '15px', color: '#333' }}>Shop by Brands</h3>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
        {brands.map((brand, index) => (
          <button key={index} style={{ backgroundColor: '#fff', border: '1px solid #ddd', padding: '20px 30px', borderRadius: '9px', cursor: 'pointer', fontWeight: '700', color: '#555' }}>
            {brand}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Categories;