import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header/Header';
import CartPage from '../pages/cartPage/CartPage';
import ShopPage from '../pages/shopPage/ShopPage';

export const App = () => {
  return (
    <Router>
      <div>
        <Header />
        
        <Routes>
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </Router>
  );
};
