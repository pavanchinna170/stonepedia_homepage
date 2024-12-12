import React from 'react';
import './FeaturedProducts.css';

function FeaturedProducts() {
  return (
    <section className="featured-products" id="products">
      <h2>Our Products</h2>
      <div className="product-grid">
        <div className="product-card">Marble</div>
        <div className="product-card">Granite</div>
        <div className="product-card">Quartz</div>
        <div className="product-card">Slate</div>
      </div>
    </section>
  );
}

export default FeaturedProducts;