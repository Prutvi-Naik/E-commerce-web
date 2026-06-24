import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import CategoryList from "./CategoryList";

const SuggestionList = () => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
  useEffect(() => {
    async function fetchData() {
        setLoading(true)
        let resp = await axios.get("https://dummyjson.com/products/categories")
        console.log(resp.data[0].name)
        setData(resp.data)
        setLoading(false)
    }
    fetchData();
  }, []);
  if(loading) return "loading"
  return <div className="w-[90%] mx-auto">
    <div>
        <div className="mt-3">{data.map((item,idx)=>{
          return(
           <div key={idx} className="">
             <h1 className="font-bold italic text-2xl">{item.name}</h1>
             <CategoryList url={item.url} />
           </div>
          )
        })} </div>
    </div>
  </div>;
};

export default SuggestionList;
