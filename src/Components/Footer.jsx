import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-slate-800 mt-16 py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand / About */}
        <div>
          <h3 className="text-xl font-bold mb-3">ShopVerse</h3>
          <p className="text-slate-400 text-sm">
            Your one‑stop shop for trending products at unbeatable prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-slate-400 hover:text-white transition">Home</Link></li>
            <li><Link to="/products" className="text-slate-400 hover:text-white transition">Products</Link></li>
            <li><Link to="/about" className="text-slate-400 hover:text-white transition">About</Link></li>
            <li><Link to="/contact" className="text-slate-400 hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/faq" className="text-slate-400 hover:text-white transition">FAQ</Link></li>
            <li><Link to="/shipping" className="text-slate-400 hover:text-white transition">Shipping</Link></li>
            <li><Link to="/returns" className="text-slate-400 hover:text-white transition">Returns</Link></li>
            <li><Link to="/privacy" className="text-slate-400 hover:text-white transition">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Social / Newsletter */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Stay Connected</h4>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="text-slate-400 hover:text-white transition">📘</a>
            <a href="#" className="text-slate-400 hover:text-white transition">🐦</a>
            <a href="#" className="text-slate-400 hover:text-white transition">📸</a>
            <a href="#" className="text-slate-400 hover:text-white transition">▶️</a>
          </div>
          <p className="text-slate-400 text-sm">
            Subscribe to our newsletter for exclusive offers.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} ShopVerse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;