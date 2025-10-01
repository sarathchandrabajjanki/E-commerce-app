// Home.jsx
import React, { useEffect, useState } from "react";
import "./Home.css";

function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("none");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const json = await res.json();
        setProducts(json);

        // Extract unique categories
        const cats = ["all", ...new Set(json.map((p) => p.category))];
        setCategories(cats);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    }
    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      alert("Already added to cart");
    } else {
      setCart([...cart, product]);
    }
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  // Filter and search products
  let displayedProducts = products
    .filter((p) => (category === "all" ? true : p.category === category))
    .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));

  // Sort products
  if (sort === "price-asc") displayedProducts.sort((a, b) => a.price - b.price);
  if (sort === "price-desc") displayedProducts.sort((a, b) => b.price - a.price);
  if (sort === "title-asc") displayedProducts.sort((a, b) => a.title.localeCompare(b.title));
  if (sort === "title-desc") displayedProducts.sort((a, b) => b.title.localeCompare(a.title));

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">🛍️ MyShop</div>
        <input
          type="text"
          className="search-bar"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="cart-icon" onClick={() => setIsCartOpen(true)}>
          🛒 {cart.length}
        </div>
      </nav>

      {/* Filters */}
      <div className="filters">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>

        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="none">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="title-asc">Title: A-Z</option>
          <option value="title-desc">Title: Z-A</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {displayedProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-details">
              <h2 className="product-title">{product.title}</h2>
              <p className="product-price">${product.price}</p>
              <p className="product-description" title={product.description}>
                {product.description.length > 80
                  ? product.description.slice(0, 80) + "..."
                  : product.description}
              </p>
              <div className="product-buttons">
                <button className="buy-now">Buy Now</button>
                <button onClick={() => handleAddToCart(product)} className="add-cart">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Drawer */}
      <div className={`cart-drawer ${isCartOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h2>🛒 Cart ({cart.length})</h2>
          <button className="close-btn" onClick={() => setIsCartOpen(false)}>✖</button>
        </div>
        <div className="cart-items">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p><strong>Price:</strong> ${item.price}</p>
                </div>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className="cart-total">
            <h3>Total: ${totalPrice}</h3>
            <button className="checkout-btn">Checkout</button>
          </div>
        )}
      </div>

      {/* Overlay */}
      {isCartOpen && <div className="overlay" onClick={() => setIsCartOpen(false)}></div>}
    </div>
  );
}

export default Home;
