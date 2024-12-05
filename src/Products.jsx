import React from 'react';
import './Products.css'; // Import the CSS file
import Motorcyle from './Image/Motorcyle.jpg';
import Motor2jpg from './Image/Motor2jpg.jpg';
import Bicycle from './Image/Bicycle.jpg';
function Products() {
  const products = [
    {
      id: 1,
      name: 'Electric Motorcycle',
      description: 'Efficient and eco-friendly for urban commutes.',
      image: Motorcyle,  // Use the imported image variable
      price: '$500',
    },
    {
      id: 2,
      name: 'Motorcycle for Disabled',
      description: 'Empowering mobility and independence.',
      image: Motor2jpg, // Replace with actual image path
      price: '$400',
    },
    {
      id: 3,
      name: 'Electric Bicycle',
      description: 'Sustainable transportation for fitness and leisure.',
      image: Bicycle, // Replace with actual image path
      price: '$300',
    },
    // Add more products here
  ];

  return (
    <div className="products-container">
      <h1>Our Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;