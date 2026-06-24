import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setCartData } from "../Redux/CartSclice";

const CategoryList = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()
 
 function addToCart(e){
  dispatch(setCartData(e))
}
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const resp = await axios.get(url);
      const res = await resp.data.products.map((item) => {
        return {
          id: item.id,
          title: item.title || item.description,
          description: item.description,
          brand: item.brand || "Generic",
          img: item.images[0],
          offer: item.discountPercentage,
          price: item.price,
        };
      });
      setData(res);
      setLoading(false);
    }
    fetchData();
  }, [url]);
  return (
    <div className="w-[90%] mx-auto mt-8  select-none">
      {loading ? (
        <div className="flex flex-nowrap overflow-x-auto gap-6 p-4 w-full">
          {" "}
          {[...Array(8)].map((_, i) => (
            <div key={i} className="min-w-[280px] bg-slate-100 animate-pulse rounded-2xl h-[380px]" />
          ))}
        </div>
      ) : data.length === 0 ? (
<div className="flex flex-col items-center justify-center py-20 text-center">          <p className="text-lg font-medium text-slate-600">
            No items matched your search .
          </p>
          <p className="text-sm text-slate-400 mt-1">
            Check your spelling or search for alternative items.
          </p>
        </div>
      ) : (
        <div className="flex flex-nowrap overflow-x-auto gap-6 p-4 w-full mb-12" id="scroll">
          {" "}
          {data.map((item) => (
            <Link key={item.id}  to={`/search/${item.id}`}>
              <div className="bg-white min-w-[310px] border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group justify-between h-[400px] p-4">
                <div className="w-full h-[45%] bg-slate-50 rounded-xl overflow-hidden flex items-center justify-center relative p-2">
                  {item.offer > 0 && (
                    <span className="absolute top-2 left-2 px-2 py-1 bg-rose-500 text-white text-xs font-bold rounded-md z-10">
                      {Math.round(item.offer)}% OFF
                    </span>
                  )}
                  <img
                    className="max-w-full max-h-full object-contain transform group-hover:scale-105 transition-transform duration-300 ease-out"
                    src={item.img}
                    alt={item.brand}
                  />
                </div>

                <div className="flex flex-col flex-grow mt-4 justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-indigo-500 tracking-wider">
                      {item.brand}
                    </span>
                    <h2 className="text-sm font-semibold text-slate-800 line-clamp-2 mt-1 leading-snug min-h-[40px]">
                      {item.title}
                    </h2>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-lg font-black text-slate-900">
                        ${item.price}
                      </span>
                    </div>
                    <button 
  onClick={(e) => { 
    e.preventDefault(); 
    e.stopPropagation(); 
    addToCart(item)
    console.log("button clicked");
  }}
  className="px-4 py-2 bg-red-500 hover:bg-red-300 text-white text-xs font-medium rounded-xl transition-all shadow-sm active:scale-95"
>
  Cart +
</button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryList;
