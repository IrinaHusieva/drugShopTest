import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header/Header';
import CartPage from './pages/cartPage/CartPage';
import ShopPage from './pages/shopPage/ShopPage';
import { CartProvider } from './cartContext';

export const App = () => {
  return (
    <Router>
      <CartProvider>
        <div>
          <Header />
          <Routes>
            <Route path="/drugShopTest" element={<Navigate to="/drugShopTest/shop" />} />
<Route path="/drugShopTest/shop" element={<ShopPage />} />
            <Route path="/drugShopTest/cart" element={<CartPage />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
};
