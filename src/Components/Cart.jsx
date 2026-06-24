import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateQuantity, removeItem } from '../Redux/CartSclice'; // Make sure the path to your slice file is correct

const Cart = () => {
  const cartData = useSelector((state) => state.cart.cartData);
  const dispatch = useDispatch();

  const subtotal = cartData.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
  const shipping = cartData.length > 0 ? 0.00 : 0; 
  const total = subtotal + shipping;

  if (!cartData || cartData.length === 0) {
    return (
      <div className="w-[90%] mx-auto mt-12 text-center py-20 bg-white border border-slate-100 rounded-2xl p-8 shadow-xs select-none">
        <span className="text-5xl mb-4 block">🛒</span>
        <h3 className="text-lg font-bold text-slate-800">Your Cart is Empty</h3>
        <p className="text-sm text-slate-400 mt-1">Explore our products to find something great!</p>
        <Link to="/" className="mt-6 inline-block px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm rounded-xl transition-all shadow-sm active:scale-95">
          Return to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="w-[90%] mx-auto mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 select-none">
      
      {/* Left Column: Cart Items List */}
      <div className="lg:col-span-2 space-y-4">
        <h2 className="text-xl font-black text-slate-900 tracking-tight">
          Shopping Bag ({cartData.reduce((sum, item) => sum + (item.quantity || 1), 0)} units)
        </h2>
        
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs space-y-6">
          {cartData.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 last:border-0 last:pb-0">
              
              {/* Product Info Block */}
              <div className="flex items-center gap-4 min-w-0 flex-1">
                <div className="w-20 h-20 bg-slate-50 border border-slate-100 rounded-xl overflow-hidden flex items-center justify-center p-2 flex-shrink-0">
                  <img className="max-w-full max-h-full object-contain" src={item.img} alt={item.title} />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] uppercase font-bold text-indigo-500 tracking-wider">{item.brand}</span>
                  <h3 className="text-sm font-semibold text-slate-800 truncate mt-0.5">{item.title}</h3>
                  <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">{item.description}</p>
                </div>
              </div>

              {/* Dynamic Operations Core */}
              <div className="flex items-center justify-between sm:justify-end gap-8 w-full sm:w-auto border-t sm:border-0 pt-3 sm:pt-0">
                
                {/* Quantity Adjustment Controls */}
                <div className="flex items-center border border-slate-200 rounded-xl p-1 gap-2 bg-slate-50">
                  <button 
                    onClick={() => {
                      if (item.quantity > 1) {
                        dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
                      } else {
                        dispatch(removeItem(item.id));
                      }
                    }}
                    className="w-7 h-7 flex items-center justify-center text-slate-500 hover:bg-white rounded-lg shadow-xs active:scale-90 transition-all font-bold text-xs cursor-pointer"
                  >
                    -
                  </button>
                  <span className="text-xs font-bold text-slate-800 min-w-[20px] text-center">
                    {item.quantity || 1}
                  </span>
                  <button 
                    onClick={() => dispatch(updateQuantity({ id: item.id, quantity: (item.quantity || 1) + 1 }))}
                    className="w-7 h-7 flex items-center justify-center text-slate-500 hover:bg-white rounded-lg shadow-xs active:scale-90 transition-all font-bold text-xs cursor-pointer"
                  >
                    +
                  </button>
                </div>

                {/* Subtotal Display & Remove Text Button */}
                <div className="flex flex-col items-end min-w-[90px]">
                  <span className="text-base font-black text-slate-900">
                    ${(item.price * (item.quantity || 1)).toFixed(2)}
                  </span>
                  <button 
                    onClick={() => dispatch(removeItem(item.id))}
                    className="text-xs text-rose-500 hover:text-rose-600 font-medium underline mt-1 cursor-pointer"
                  >
                    Remove
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Checkout Sidebar Summary */}
      <div className="lg:col-span-1">
        <h2 className="text-xl font-black text-slate-900 tracking-tight mb-4 opacity-0 hidden lg:block">Summary</h2>
        <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-md space-y-6 sticky top-6">
          <h3 className="text-base font-bold tracking-tight">Order Summary</h3>
          
          <div className="space-y-3 border-b border-slate-800 pb-4 text-sm font-medium text-slate-400">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="text-white">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping Delivery</span>
              <span className="text-emerald-400 font-bold">FREE</span>
            </div>
          </div>

          <div className="flex justify-between items-baseline">
            <span className="text-sm font-semibold">Total Invoice</span>
            <span className="text-2xl font-black text-white">${total.toFixed(2)}</span>
          </div>

          <button 
            onClick={() => alert(`Proceeding to mock gateway for: $${total.toFixed(2)}`)}
            className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl shadow-lg transition-all active:scale-[0.98] cursor-pointer"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

    </div>
  );
};

export default Cart;