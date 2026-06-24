import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setError, setLoading, setResult } from "../Redux/BannerSlice";
import BannerSlide from "./BannerSlide";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import SuggestionList from "./SuggestionList";

const Banner = () => {
  const [count, setCount] = useState(0);
  const { error, loading, result } = useSelector((state) => state.banner);
  const dispatch = useDispatch();
  let res;

  async function fetchData() {
    dispatch(setLoading());
    try {
      const resp = await axios.get("https://dummyjson.com/products");
      console.log(resp);
      res = resp.data.products.map((item) => {
        return {
          id: item.id,
          title: item.description,
          brand: item.brand,
          img: item.images[0],
          offer: item.discountPercentage,
        };
      });
    } catch (error) {
      setError(error);
    }

    dispatch(setResult(res));
  }

  useEffect(() => {
    fetchData();
  }, []);


  if (error) return "something went wrong";
  if (loading || !result || result.length === 0) {
    return (
      <div className="relative w-full rounded-2xl max-w-[1500px] h-[400px] md:h-[450px] bg-[#eaeded] mx-auto overflow-hidden mt-5"></div>
    );
  }

  let provide = result[count];

  return (
    <div>
    <div
      id="banner"
      className="mt-5 relative w-full rounded-2xl max-w-[90%] h-[400px] md:h-[450px] mx-auto overflow-hidden text-white shadow-xl group border border-slate-800 bg-cover bg-center transition-all duration-500"
      style={{ backgroundImage: `url(${provide.img})` }}
    >
       <div className="h-full w-100 absolute right-0 top-0 ml-20 bg-slate-100 ">
 <img className="w-100 " src={provide.img} alt="" />
       </div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent z-0" />

      <div className="absolute inset-y-0 left-0 pl-10 md:pl-16 flex flex-col justify-center max-w-[85%] sm:max-w-[55%] z-10 select-none">
        <h3 className="text-xs md:text-sm font-semibold tracking-widest text-indigo-400 uppercase mb-2 line-clamp-1">
          {provide.title}
        </h3>
        <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-4 bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent line-clamp-2">
          {provide.brand || "Featured Brand"}
        </h1>
        
        <div className="inline-flex items-center gap-2 mt-2">
          <span className="px-3 py-1.5 bg-rose-500/20 border border-rose-500/40 rounded-md text-rose-400 text-lg md:text-2xl font-bold backdrop-blur-sm">
            Up To {Math.round(provide.offer || 5)}% OFF
          </span>
        </div>
      </div>

      <button
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
        className={`absolute top-[40%] left-2 sm:left-4 z-20 transform hover:scale-110 active:scale-95 transition-all duration-200 p-1 rounded-full hover:bg-white/10 ${
          count === 0 ? "opacity-20 cursor-not-allowed" : "text-white/50 hover:text-white"
        }`}
      >
        <CiCircleChevLeft className="text-4xl sm:text-5xl md:text-[52px]" />
      </button>

      <button
        onClick={() => {
          if (count < result.length - 1) {
            setCount(count + 1);
          }
        }}
        className={`absolute top-[40%] right-2 sm:right-4 z-20 transform hover:scale-110 active:scale-95 transition-all duration-200 p-1 rounded-full hover:bg-white/10 ${
          count === result.length - 1 ? "opacity-20 cursor-not-allowed" : "text-white/50 hover:text-white"
        }`}
      >
        <CiCircleChevRight className="text-4xl sm:text-5xl md:text-[52px]" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20 bg-slate-950/40 px-4 py-2 rounded-full backdrop-blur-sm">
        {result.map((_, index) => (
          <button
            key={index}
            onClick={() => setCount(index)}
            className={`h-2 text-black rounded-full transition-all duration-300 ${
              count === index 
                ? "w-6 bg-indigo-400" 
                : "w-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
    <SuggestionList />
    </div>
  );
};

export default Banner;