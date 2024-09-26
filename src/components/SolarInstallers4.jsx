"use client";
import React, { useState } from "react";
import Modal from "./Modal";

const SolarInstallers4 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    setIsModalOpen(false);
    alert("Form Submitted Successfully!");
  };

  const data = [
    { label: "Solar Photovoltaic", price: "32,000", tax: "28%" },
    { label: "Panels Quantity", price: "32,000", tax: "28%" },
    { label: "System Capacity (kW)", price: "32,000", tax: "28%" },
    { label: "Area Requirement", price: "32,000", tax: "28%" },
    { label: "Panels Brand", price: "32,000", tax: "28%" },
    { label: "Panel Technology", price: "32,000", tax: "28%" },
    { label: "Solar Inverter Capacity(in kW) ", price: "32,000", tax: "28%" },
    { label: "Solar Inverter Type", price: "32,000", tax: "28%" },
    { label: "Solar Inverter Brand", price: "32,000", tax: "28%" },
    { label: "Battery Capacity", price: "32,000", tax: "28%" },
    { label: "Battery Technology", price: "32,000", tax: "28%" },
    { label: "Number of Batteries", price: "32,000", tax: "28%" },
    { label: "Solar Battery Brand", price: "32,000", tax: "28%" },
    { label: "Module Mounting", price: "32,000", tax: "28%" },
    { label: "Earthing Safety", price: "32,000", tax: "28%" },
    { label: "DC Distribution Box", price: "32,000", tax: "28%" },
    { label: "AC Distribution Box", price: "32,000", tax: "28%" },
    { label: "DC Cables (Upto 50 Mts)**", price: "32,000", tax: "28%" },
    { label: "AC Cables (Upto 20 Mts)**", price: "32,000", tax: "28%" },
    { label: "Panels Warranty", price: "32,000", tax: "28%" },
    { label: "Inverter Warranty", price: "32,000", tax: "28%" },
    { label: "Total System Cost", price: "32,000", tax: "28%" },
    { label: "Installation Cost", price: "32,000", tax: "28%" },
    { label: "Net Metering Cost", price: "32,000", tax: "28%" },
    { label: "Net Metering Liasioning Cost", price: "32,000", tax: "28%" },
    { label: "Total Project Cost", price: "32,000", tax: "28%" },
    { label: "Tax", price: "32,000", tax: "28%" },
    { label: "Total Project Cost", price: "32,000", tax: "28%" },
    { label: "Delivery Period", price: "32,000", tax: "28%" },
    { label: "Scope of Maintenance", price: "32,000", tax: "28%" },
    { label: "Payment Terms", price: "32,000", tax: "28%" },
    { label: "Price Validity", price: "32,000", tax: "28%" },
  ];

  const suppliers = ["Supplier1", "Supplier2", "Supplier3", "Supplier4"];

  return (
    <div className="border border-gray-400 rounded-md">
      <div className="flex items-center justify-between p-2 border-b border-b-[#4348BD]">
        <div className="space-y-1">
          <h5 className="text-[12px] text-[#666666]">Customer Name</h5>
          <p className="text-[#4348BD] text-[14px] font-[500]">XXXXXX</p>
        </div>
        <div className="">
          <h5 className="text-[12px] text-[#666666]">Customer ID</h5>
          <p className="text-[#4348BD] text-[14px] font-[500]">98864</p>
        </div>
        <div className="">
          <h5 className="text-[12px] text-[#666666]">Property Type</h5>
          <p className="text-[#4348BD] text-[14px] font-[500]">
            Commercial/Residential
          </p>
        </div>
        <div className="">
          <h5 className="text-[12px] text-[#666666]">Subsidy Applicable</h5>
          <p className="text-[#4348BD] text-[14px] font-[500]">Yes/No</p>
        </div>

        <div className="">
          <h5 className="text-[12px]">Date</h5>
          <p className="text-[#4348BD] text-[14px] font-[500]">28-8-2024</p>
        </div>
        <div className="">
          <h5 className="text-[12px]">Quote No</h5>
          <p className="text-[#4348BD] text-[14px] font-[500]">28746789</p>
        </div>
        <div className="">
          <button
            className="bg-[#0BB68D] rounded-md text-white text-[14px] py-2 px-5"
            onClick={handleOpenModal}
          >
            Submit
          </button>
        </div>
      </div>

      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
      />

      {/* Table Section */}
      <div className="p-3">
        <table className="w-full">
          <thead>
            <tr className="bg-[#E5ECF9] text-[#7A7A7A] text-[13px] font-[400] text-left">
              <th></th>
              {suppliers.map((supplier, index) => (
                <th key={index} className="p-2">
                  {supplier}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, rowIndex) => (
              <tr key={rowIndex}>
                <td className="p-2">
                  <span className="text-[14px] text-[#292D32] font-[600]">
                    {item.label}
                  </span>
                </td>
                {suppliers.map((_, colIndex) => (
                  <td
                    key={colIndex}
                    className="p-2 text-[14px] text-[#292D32] font-[600]"
                  >
                    <div className="flex flex-col items-start gap-2">
                      <button className="bg-white border border-gray-400 text-[#292D32] font-[600] py-6 px-24 rounded-lg"></button>
                      <div className="flex gap-4 text-[14px] text-[#292D32] font-[600]">
                        <span>Price: {item.price}</span>
                        <span>Tax: {item.tax}</span>
                      </div>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SolarInstallers4;
