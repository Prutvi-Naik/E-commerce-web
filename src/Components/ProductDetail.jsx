import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TbTruckDelivery } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { setCartData } from "../Redux/CartSclice";

const ProductDetail = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { id } = useParams()
  const dispatch = useDispatch()

  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        let resp = await axios.get(`https://dummyjson.com/products/${id}`);
        setData(resp.data);
         const res = resp.data.products.map((item) => {
          return {
            id: item.id,
            title: item.title || item.description, 
            description: item.description,
            brand: item.brand || "Generic",
            img: item.images[0],
            offer: item.discountPercentage,
            price: item.price
          };
        });
        setData(res);
        if (resp.data?.images?.length > 0) {
          setActiveImage(resp.data.images[0]);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  console.log(data);
  console.log(loading);
  console.log(error);

  if (loading || !data || !data.id) {
    return <div className="h-96 md:h-140 w-[90%] mx-auto bg-blue-100 rounded-2xl mt-2 animate-pulse" />;
  }

  return (
    <div className="mt-2 w-full pb-10">
      <div className="w-[90%] mx-auto bg-gray-100 shadow-olive-200 rounded-2xl flex flex-col md:flex-row gap-6 md:gap-10 p-4 md:p-6">
        
        <div className="flex flex-col-reverse md:flex-row gap-4 w-full md:w-auto">
          
          <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-y-auto max-h-none md:max-h-[400px] py-1">
            {data.images.map((item, index) => {
              return (
                <img
                  key={index}
                  onClick={() => setActiveImage(item)}
                  className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 object-contain border bg-white p-2 rounded-lg cursor-pointer flex-shrink-0 transition-all ${
                    activeImage === item ? "border-blue-600 ring-2 ring-blue-400/20" : "border-gray-200"
                  }`}
                  src={item}
                  alt=""
                />
              );
            })}
          </div>

          <div className="border bg-white rounded-2xl w-full md:w-[400px] lg:w-[500px] aspect-square flex items-center justify-center p-4 shadow-sm overflow-hidden flex-shrink-0">
            <img 
              className="max-w-full max-h-full object-contain" 
              src={activeImage || data.images[0]} 
              alt="" 
            />
          </div>
        </div>

        <div className="pt-2 md:pt-10 flex-grow">
          <h1 className="font-bold italic text-xl md:text-2xl text-slate-800">{data.brand}</h1>
          <div className="my-2" />
          <h3 className="font-mono text-slate-600 text-sm md:text-lg leading-relaxed">{data.description}</h3>
          <div className="my-4" />
          
          <h2 className="font-bold text-red-400 text-2xl md:text-3xl flex flex-wrap items-baseline gap-2">
            ${data.price} 
            <span className="text-xs md:text-sm font-normal text-red-500 bg-red-50 px-2 py-0.5 rounded border border-red-200">
              ({data.discountPercentage}% OFF)
            </span>
          </h2>
          
          <h4 className="font-thin text-gray-500 text-xs md:text-sm mt-1">{data.returnPolicy}</h4>
          <div className="my-4 md:my-6" />
          
          <h5 className="flex items-center gap-2 text-lg md:text-2xl text-gray-700 font-bold">
            <TbTruckDelivery className="flex-shrink-0" />
            <span className="text-sm md:text-xl font-semibold">{data.shippingInformation}</span>
          </h5>
         <div className="flex gap-5 flex-wrap gap-x-2  text-2xl  font-bold md:mt-0 md:text-sm md:font-thin">
           <button className="px-5 mt-10 py-3 cursor-pointer bg-amber-300  rounded-2xl">Buy now</button>
          <button 
          onClick={(e,idx)=>{
            console.log(data)
              dispatch(setCartData(data))
          }}
          className="px-5 py-3 mt-10 cursor-pointer bg-red-400  rounded-2xl">Cart +</button>
         </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;