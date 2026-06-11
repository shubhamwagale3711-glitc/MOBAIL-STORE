import React from 'react';
import Hero from '../Components/Hero';
import Categories from '../Components/Categories';
import ProductCard from '../Components/ProductCard';

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <h2 style={{ textAlign: 'center', marginTop: '40px', fontFamily: 'sans-serif' }}>
      </h2>

    
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          flexWrap: 'wrap',
          padding: '30px'
        }}
      >
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
      </div>

      
      <div
        style={{
          textAlign: 'center',
          padding: '50px',
          backgroundColor: '#f4f4f4',
          marginTop: '40px'
        }}
      >
        <h2 style={{ fontFamily: 'sans-serif', marginBottom: '30px' }}>
          What our Customers say?
        </h2>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            flexWrap: 'wrap',
            maxWidth: '950px',
            margin: '0 auto'
          }}
        >
          <div
            style={{
              backgroundColor: '#fff',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              flex: '1',
              minWidth: '250px'
            }}
          >
            <p style={{ fontStyle: 'italic', color: '#555' }}>
              "Great experience shopping here! The mobile delivery was super fast."
            </p>
            <h5 style={{ margin: '10px 0 0 0' }}>- SHUBHAMKUMAR WAGALE</h5>
          </div>

          <div
            style={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              flex: '1',
              minWidth: '250px'
            }}
          >
            <p style={{ fontStyle: 'italic', color: '#555' }}>
              "Best prices online! Got my premium phone with huge discount."
            </p>
            <h5 style={{ margin: '10px 0 0 0' }}>- SKW</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;