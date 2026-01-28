import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Products from './pages/Products';

// Placeholder pages for routes that don't exist yet
const Placeholder = ({ title }) => (
  <div className="flex items-center justify-center min-h-[60vh] bg-stone-50">
    <div className="text-center p-8 bg-white border border-stone-200 rounded-lg shadow-sm">
        <h1 className="text-3xl font-display font-medium text-primary-900 mb-2">{title}</h1>
        <p className="text-stone-500">This section is currently being crafted.</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<Placeholder title="Craftsmanship" />} />
          <Route path="/cart" element={<Placeholder title="Your Cart" />} />
          <Route path="/login" element={<Placeholder title="Member Login" />} />
          <Route path="/profile" element={<Placeholder title="My Profile" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
