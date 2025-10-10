# 🛍️ React E-Commerce Application

A modern, responsive e-commerce web application built with React, featuring user authentication, product browsing, shopping cart functionality, and a sleek user interface.

## 🌟 Features

### 🔐 User Authentication
- **User Registration**: Create new accounts with full name, email, password, and user ID
- **User Login**: Secure authentication with email and password validation
- **Form Validation**: Client-side validation for all input fields
- **Responsive Design**: Beautiful gradient backgrounds and modern UI

### 🛒 Shopping Experience
- **Product Catalog**: Browse products from FakeStore API with real product data
- **Search Functionality**: Real-time product search with instant filtering
- **Category Filtering**: Filter products by categories (electronics, clothing, etc.)
- **Sorting Options**: Sort by price (low to high, high to low) and title (A-Z, Z-A)
- **Shopping Cart**: Add products to cart with quantity management
- **Cart Drawer**: Slide-out cart with product details and total calculation

### 🎨 User Interface
- **Modern Design**: Clean, professional interface with hover effects
- **Responsive Layout**: Mobile-friendly design that works on all devices
- **Product Cards**: Beautiful product cards with images, descriptions, and pricing
- **Interactive Elements**: Smooth animations and transitions
- **Navigation**: Intuitive navigation with search and cart access

## 🚀 Technology Stack

- **Frontend**: React 19.1.0
- **Routing**: React Router DOM 7.7.1
- **Build Tool**: Vite 7.0.4
- **Styling**: CSS3 with modern features
- **API**: FakeStore API for product data
- **Authentication**: MockAPI for user management
- **Development**: ESLint for code quality

## 📁 Project Structure

```
e-commerce/
├── src/
│   ├── App.jsx          # Main application component with routing
│   ├── Home.jsx         # Product catalog and shopping functionality
│   ├── Login.jsx       # User authentication login
│   ├── Signup.jsx      # User registration
│   ├── Home.css        # Styling for home page and product grid
│   ├── Login.css       # Login page styling
│   ├── Signup.css      # Registration page styling
│   └── main.jsx        # Application entry point
├── public/
│   └── vite.svg        # Vite logo
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
└── eslint.config.js    # ESLint configuration
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd REACT-E-COMMERCE/e-commerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🔧 Key Components

### App.jsx
Main application component that handles routing between different pages:
- `/` - Home page (product catalog)
- `/Login` - User login
- `/Signup` - User registration

### Home.jsx
Core shopping functionality including:
- Product fetching from FakeStore API
- Search and filtering capabilities
- Shopping cart management
- Product display with sorting options

### Authentication Components
- **Login.jsx**: Handles user authentication with API validation
- **Signup.jsx**: Manages new user registration with form validation

## 🌐 API Integration

### Product Data
- **Source**: FakeStore API (`https://fakestoreapi.com/products`)
- **Features**: Real product data with images, descriptions, and pricing
- **Categories**: Electronics, clothing, jewelry, and more

### User Management
- **Source**: MockAPI (`https://68870e3d071f195ca97f0e43.mockapi.io/users`)
- **Features**: User registration and authentication
- **Data**: Name, email, password, and user ID storage

## 🎨 Design Features

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Adaptive navigation
- Touch-friendly interactions

### Visual Elements
- Modern gradient backgrounds
- Smooth hover animations
- Card-based product layout
- Professional color scheme
- Clean typography

## 🚀 Getting Started

1. **Register a new account** or **login** with existing credentials
2. **Browse products** using the search bar or category filters
3. **Add items to cart** by clicking "Add to Cart" button
4. **View cart** by clicking the cart icon in the navigation
5. **Checkout** when ready to complete your purchase

## 🔮 Future Enhancements

- Payment integration
- User profile management
- Order history
- Product reviews and ratings
- Wishlist functionality
- Advanced filtering options
- Inventory management
- Admin dashboard

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Sarath** - Full Stack Developer
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- FakeStore API for providing product data
- MockAPI for user management services
- React community for excellent documentation
- Vite team for the amazing build tool

---

**Happy Shopping! 🛍️**
