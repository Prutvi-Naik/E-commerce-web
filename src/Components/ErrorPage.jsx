import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 select-none font-sans antialiased">
      <div className="max-w-md w-full text-center bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 flex flex-col items-center">
        
        {/* Animated Visual Error Code Illustration */}
        <div className="relative mb-6">
          <h1 className="text-9xl font-black text-indigo-600/10 tracking-widest selection:bg-transparent">
            404
          </h1>
          <span className="absolute inset-0 flex items-center justify-center text-5xl animate-bounce">
            🔍
          </span>
        </div>

        {/* Error Messages */}
        <h2 className="text-2xl font-black text-slate-800 tracking-tight leading-none">
          Page Not Found
        </h2>
        <p className="text-sm text-slate-400 mt-3 leading-relaxed max-w-xs">
          Sorry, the page you are looking for doesn't exist, has been removed, or is temporarily unavailable.
        </p>

        {/* Decorative Divider */}
        <div className="w-16 h-1 bg-indigo-500/20 rounded-full my-6" />

        {/* Action Button Container */}
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          
          {/* Secondary Action: Go Back */}
          <button
            onClick={() => navigate(-1)}
            className="flex-1 px-5 py-3 border border-slate-200 text-slate-600 font-semibold text-sm rounded-xl hover:bg-slate-50 transition-all active:scale-95 cursor-pointer"
          >
            Go Back
          </button>

          {/* Primary Action: Return Home */}
          <Link
            to="/"
            className="flex-1 px-5 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm rounded-xl transition-all shadow-md shadow-indigo-600/10 active:scale-95 text-center cursor-pointer"
          >
            Take Me Home
          </Link>

        </div>

        {/* Subtle Footer Support Notice */}
        <span className="text-[11px] text-slate-300 font-medium mt-8 tracking-wide">
          Error Code: ERR_ROUTE_NOT_FOUND
        </span>

      </div>
    </div>
  );
};

export default ErrorPage;