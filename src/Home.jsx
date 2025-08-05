// Home.jsx
import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    }
    fetchData();
  }, []);

  function handleAddToCart(product) {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      alert("Already added to cart");
    } else {
      setCart([...cart, product]);
    }
  }

  return (
    <div className="home-container">
      <h1 className="home-heading">🛒 E-Commerce Store</h1>
      <div className="product-grid">
        {data.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.title} className="product-image" />
            <div className="product-details">
              <h2 className="product-title">{item.title}</h2>
              <p className="product-price">${item.price}</p>
              <p className="product-description" title={item.description}>
                {item.description}
              </p>
              <button className="buy-now">Buy Now</button>
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="cart-section">
          <h2>🛒 Cart</h2>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p><strong>Price:</strong> ${item.price}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
