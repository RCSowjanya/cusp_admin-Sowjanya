"use client";
import React, { useState } from "react";
import { BiRupee } from "react-icons/bi";
import Modal from "./Modal";

const SolarInstallers3 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    setIsModalOpen(false);
    // Add your submit logic here
    alert("Form Submitted Successfully!");
  };

  const rowData = [
    {
      label: "Solar Photovoltaic",
      supplier1: "Solar",
      supplier2: "28-7-2024",
      supplier3: "28,000",
      supplier4: "28,000",
    },
    {
      label: "Panels Quantity",
      supplier1: "Solar",
      supplier2: "28-7-2024",
      supplier3: "28,000",
      supplier4: "28,000",
    },
    {
      label: "System Capacity (kW)*",
      supplier1: "Solar",
      supplier2: "28-7-2024",
      supplier3: "28,000",
      supplier4: "28,000",
    },
    {
      label: "Area Requirement",
      supplier1: "Solar",
      supplier2: "28-7-2024",
      supplier3: "28,000",
      supplier4: "28,000",
    },
    {
      label: "Panels Brand",
      supplier1: "Solar",
      supplier2: "28-7-2024",
      supplier3: "28,000",
      supplier4: "28,000",
    },
    {
      label: "Panel Technology",
      supplier1: "Solar",
      supplier2: "28-7-2024",
      supplier3: "28,000",
      supplier4: "28,000",
    },
    {
      label: "Solar Inverter Capacity(in kW)",
      supplier1: "Solar",
      supplier2: "28-7-2024",
      supplier3: "28,000",
      supplier4: "28,000",
    },
    {
      label: "Solar Inverter Type",
      supplier1: "Solar",
      supplier2: "28-7-2024",
      supplier3: "28,000",
      supplier4: "28,000",
    },
    {
      label: "Solar Inverter Brand",
      supplier1: "Solar",
      supplier2: "28-7-2024",
      supplier3: "28,000",
      supplier4: "28,000",
    },
    {
      label: "Battery Capacity",
      supplier1: "Solar",
      supplier2: "28-7-2024",
      supplier3: "28,000",
      supplier4: "28,000",
    },
    {
      label: "Battery Technology",
      supplier1: "Solar",
      supplier2: "28-7-2024",
      supplier3: "28,000",
      supplier4: "28,000",
    },
    {
      label: "Number of Batteries",
      supplier1: "Solar",
      supplier2: "28-7-2024",
      supplier3: "28,000",
      supplier4: "28,000",
    },
    {
      label: "Solar Battery Brand",
      supplier1: "Solar",
      supplier2: "28-7-2024",
      supplier3: "28,000",
      supplier4: "28,000",
    },
    {
      label: "Module Mounting",
      supplier1: "Solar",
      supplier2: "28-7-2024",
      supplier3: "28,000",
      supplier4: "28,000",
    },
    {
      label: "Earthing Safety",
      supplier1: "Solar",
      supplier2: "28-7-2024",
      supplier3: "28,000",
      supplier4: "28,000",
    },
    {
      label: "DC Distribution Box",
      supplier1: "Solar",
      supplier2: "28-7-2024",
      supplier3: "28,000",
      supplier4: "28,000",
    },
    {
      label: "AC Distribution Box",
      supplier1: "Solar",
      supplier2: "28-7-2024",
      supplier3: "28,000",
      supplier4: "28,000",
    },
    {
      label: "DC Cables (Upto 50 Mts)**",
      supplier1: "Solar",
      supplier2: "28-7-2024",
      supplier3: "28,000",
      supplier4: "28,000",
    },
    {
      label: "AC Cables (Upto 20 Mts)**",
      supplier1: "Solar",
      supplier2: "28-7-2024",
      supplier3: "28,000",
      supplier4: "28,000",
    },
    {
      label: "Panels Warranty",
      supplier1: "Solar",
      supplier2: "28-7-2024",
      supplier3: "28,000",
      supplier4: "28,000",
    },
    {
      label: "Inverter Warranty",
      supplier1: "Solar",
      supplier2: "28-7-2024",
      supplier3: "28,000",
      supplier4: "28,000",
    },
    {
      label: "Total System Cost",
      supplier1: "Solar",
      supplier2: "28-7-2024",
      supplier3: "28,000",
      supplier4: "28,000",
    },
    {
      label: "Installation Cost",
      supplier1: "Solar",
      supplier2: "28-7-2024",
      supplier3: "28,000",
      supplier4: "28,000",
    },
    {
      label: "Net Metering Cost",
      supplier1: "Solar",
      supplier2: "28-7-2024",
      supplier3: "28,000",
      supplier4: "28,000",
    },
    {
      label: "Net Metering Liasioning Cost",
      supplier1: "Solar",
      supplier2: "28-7-2024",
      supplier3: "28,000",
      supplier4: "28,000",
    },
    {
      label: "Total Project Cost",
      supplier1: "Solar",
      supplier2: "28-7-2024",
      supplier3: "28,000",
      supplier4: "28,000",
    },
    {
      label: "Tax",
      supplier1: "Solar",
      supplier2: "28-7-2024",
      supplier3: "28,000",
      supplier4: "28,000",
    },
    {
      label: "Total Project Cost",
      supplier1: "Solar",
      supplier2: "28-7-2024",
      supplier3: "28,000",
      supplier4: "28,000",
    },
    {
      label: "Delivery Period",
      supplier1: "Solar",
      supplier2: "28-7-2024",
      supplier3: "28,000",
      supplier4: "28,000",
    },
    {
      label: "Scope of Maintenance",
      supplier1: "Solar",
      supplier2: "28-7-2024",
      supplier3: "28,000",
      supplier4: "28,000",
    },
    {
      label: "Payment Terms",
      supplier1: "Solar",
      supplier2: "28-7-2024",
      supplier3: "28,000",
      supplier4: "28,000",
    },
    {
      label: "Price Validity",
      supplier1: "Solar",
      supplier2: "28-7-2024",
      supplier3: "28,000",
      supplier4: "28,000",
    },
  ];

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
              <th className="p-2">Supplier1</th>
              <th className="p-2">Supplier2</th>
              <th className="p-2">Supplier3</th>
              <th className="p-2">Supplier4</th>
            </tr>
          </thead>
          <tbody>
            {rowData.map((row, index) => (
              <tr key={index} className={index % 2 === 1 ? "bg-[#D4DCFF]" : ""}>
                <td className="p-2">
                  <span className="text-[14px] text-[#292D32] font-[600]">
                    {row.label}
                  </span>
                </td>
                <td className="p-2 text-[14px] text-[#292D32] font-[600]">
                  <p>{row.supplier1}</p>
                </td>
                <td className="p-2 text-[14px] text-[#292D32] font-[600]">
                  <p>{row.supplier2}</p>
                </td>
                <td className="p-2 text-[14px] text-[#292D32] font-[600]">
                  <div className="flex">
                    <BiRupee className="mt-[2px]" />
                    <p>{row.supplier3}</p>
                  </div>
                </td>
                <td className="p-2 text-[14px] text-[#292D32] font-[600]">
                  <div className="flex">
                    <BiRupee className="mt-[2px]" />
                    <p>{row.supplier4}</p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="border border-gray-300 px-2 space-y-3 mx-2 py-3">
        <p className="text-[#4348BD] font-[600] text-[14px]">
          * This is based on the information Provided.Accurate details Will be
          provided after Site Visit
        </p>
        <p className="text-[#4348BD] font-[600] text-[14px]">
          ** Cables over and above the mentioned quantity will be charged
          separately
        </p>
        <p className="text-[#4348BD] font-[600] text-[14px]">
          *** This is tentative and subject to variation by +/- 5%. Final quote
          will be provided after site visit.
        </p>
      </div>
    </div>
  );
};

export default SolarInstallers3;
