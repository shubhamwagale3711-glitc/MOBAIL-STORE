import React from 'react';
import ProductCard from '../Components/ProductCard';

const Products = () => {
  return (
    <div style={{ padding: '40px 20px', maxWidth: '1100px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>All Available Smartphones</h2>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>

        <ProductCard
          name="iPhone 16 Pro"
          price="₹1,29,999"
          imageUrl="https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro.jpg"
        />

        <ProductCard
          name="Samsung S25 Ultra"
          price="₹1,34,999"
          imageUrl="https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s25-ultra.jpg"
        />

        <ProductCard
          name="OnePlus 13"
          price="₹64,999"
          imageUrl="https://fdn2.gsmarena.com/vv/bigpic/oneplus-13.jpg"
        />

        <ProductCard
          name="Google Pixel 9"
          price="₹79,999"
          imageUrl="https://fdn2.gsmarena.com/vv/bigpic/google-pixel-9.jpg"
        />

        <ProductCard
          name="Realme GT 6"
          price="₹40,999"
          imageUrl="https://fdn2.gsmarena.com/vv/bigpic/realme-gt6.jpg"
        />

        <ProductCard
          name="Xiaomi 14"
          price="₹69,999"
          imageUrl="https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14.jpg"
        />

      </div>
    </div>
  );
};

export default Products;