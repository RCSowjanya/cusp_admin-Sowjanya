"use client";
import React from "react";
import { BsBagCheck } from "react-icons/bs";

const CustomLegend = () => {
  return (
    <div className="flex flex-col mt-11">
      <div className="flex  justify-between">
        <div className="bg-green-100 p-2">
          <BsBagCheck size={20} className="text-[#4AB58E] font-[900] " />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[14px] font-[600]">Reality Sales</p>
          <p className="text-[12px] font-[400]">Global</p>
        </div>
        <div>
          <p className="text-[14px] font-[600] text-[#27AE60]">8000</p>
        </div>
      </div>
      <div className="flex  justify-between mt-4">
        <div className="bg-[#FFF4DE] p-2">
          <BsBagCheck size={20} className="text-[#FFCF00] font-[900]  " />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[14px] font-[600]">Target Sales</p>
          <p className="text-[12px] font-[400]">Commercial</p>
        </div>
        <div>
          <p className="text-[14px] font-[600] text-[#FFA412]">12211</p>
        </div>
      </div>
    </div>
  );
};

export default CustomLegend;
