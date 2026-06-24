import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosContact } from "react-icons/io";
import { useDispatch } from "react-redux";
import { Link, Links, useNavigate } from "react-router-dom";
import { setSearchQuery } from "../Redux/SearchSlice";
import { IoHome } from "react-icons/io5";

const Header = () => {
  const navigate = useNavigate();
  const dispatcah = useDispatch();
  const [query, setQuery] = useState("");

  return (
    <div className="bg-slate-50 sticky top-0 z-50 md:top-17">
      <div className=" flex items-center justify-between w-[90%] mx-auto flex-wrap gap-y-4 py-3  ">
        <div className="flex-shrink-0">
          <img
            className="w-16 sm:w-20"
            src="https://play-lh.googleusercontent.com/ZGkYgpg7SY0Lnv8cT66qEPovt2BAgDhuD0u3GziXYxIwGymZ1_nRudjvKZ_G0DAvBw"
            alt="logo"
          />
        </div>

        <div className="flex items-center gap-3 sm:gap-5 cursor-pointer text-xl sm:text-2xl order-2 sm:order-3">
          <div className="flex items-center flex-wrap gap-1 sm:gap-2 border-r pr-3 sm:pr-5 capitalize text-xs sm:text-base">
            <IoHome className="text-xl sm:text-2xl" />
            <Link to={"/"}>home</Link>
          </div>
          <div className="flex items-center flex-wrap gap-1 sm:gap-2 border-r pr-3 sm:pr-5 capitalize text-xs sm:text-base">
            <IoIosContact className="text-xl sm:text-2xl" />
            <Link>singUp/signIn</Link>
          </div>
          <div className="flex items-center flex-wrap gap-1 sm:gap-2 border-r pr-3 sm:pr-5 capitalize text-xs sm:text-base">
            <CiShoppingCart className="text-xl sm:text-2xl" />
            <Link to={"/cart"}>
              <span>cart</span>
            </Link>
          </div>
        </div>

        <div className="w-full sm:w-auto order-3 sm:order-2 flex-grow sm:flex-grow-0 sm:mx-10">
          <div className="flex items-center justify-between border rounded py-2 px-4 gap-x-2 w-full max-w-md mx-auto sm:w-[300px] md:w-[400px]">
            <div className="flex items-center gap-x-2 flex-grow">
              <CiSearch className="text-xl flex-shrink-0" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="focus:outline-none w-full text-sm sm:text-base"
                type="text"
                placeholder="search something... "
              />
            </div>
            <FaBars
              onClick={() => {
                if (query != "") {
                  dispatcah(setSearchQuery(query));
                  navigate("/search");
                }
              }}
              className="text-base flex-shrink-0 text-gray-500 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
