import React, { useEffect, useState } from "react";
import "./Home.css";

function Home() {
  const [data, setData] = useState([]);

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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
