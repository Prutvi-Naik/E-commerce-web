import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { useGeolocation } from "../Hooks/useGeolocation";

const PreHeader = () => {
  const location = useGeolocation();

  return (
    <div className="bg-gray-200 py-2 sticky top-0 z-50">
    <div className="flex items-center justify-between w-[90%] mx-auto pb-3 flex-wrap">
      <div className="text-2xl text-gray-600 font-bold  max-sm:text-sm">
         Weclome to worldWide megamart</div>
      <div className="flex items-center justify-end gap-4 pt-3">
        <div className="flex items-center text-xl border-r px-3 gap-1 max-sm:font-thin max-sm:text-sm max-sm:flex-col">
          <CiLocationOn /> Deliver to
          <h4 className="font-bold italic"> { location.name}</h4>
        </div>
        <div className="flex items-center text-xl border-r px-3 gap-1 max-sm:font-thin max-sm:text-sm max-sm:flex-col">
         <CiDeliveryTruck /> Track your order
        </div>
        <div className="flex items-center text-xl border-r px-3 gap-1 max-sm:font-thin max-sm:text-sm max-sm:flex-col max-sm:justify-center max-sm:items-center">
         <BiSolidOffer/> All offers
        </div>
      </div>
    </div>
    </div>
  );
};

export default PreHeader;
