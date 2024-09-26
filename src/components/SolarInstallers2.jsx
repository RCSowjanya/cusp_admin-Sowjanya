"use client";
import React, { useState } from "react";
import { HiHashtag } from "react-icons/hi";
import { BiRupee } from "react-icons/bi";
import { FaCircle } from "react-icons/fa";
import { IoNavigateCircleOutline } from "react-icons/io5";
import { FiChevronDown } from "react-icons/fi";
import { GetFileURL } from "@/app/functions/ServerFunctions";
import { toast } from "react-toastify";
const SolarInstallers2 = ({ installerDet, proposals }) => {
  console.log(installerDet)
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown state
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

 const handleFile=async(filename)=>{
    try {
     
      const response = await GetFileURL(filename);
      console.log(response)
      if (response.status === 200) {
        console.log(response.data)
        window.open(response.data.url, '_blank');
      } else {
       
        toast.error("Failed to Get the file from the server. Please try again.");
       
      }
    } catch (error) {
     
      toast.error("Error while Getting file from Server. Please try again.");
     
  
    } finally {
     
  
    }
  
 }
  return (
    <div className="">
      <div className="p-1">
        {/* Container for Customer Details and Proposals */}
        <div className="flex gap-4">
          {/* Customer Details Section */}
          <div className="flex-1   border border-[#7A7A7A]  rounded-lg">
            <div className="flex justify-between mb-4 bg-[#F4F4FF] px-2 py-6 break-all">
              <div>
                <h5 className="text-[12px] font-[500]">Customer Name</h5>
                <p className="text-[1.2rem] text-[#4348BD] font-[500]">
                  {installerDet.company_name}
                </p>
              </div>
              <div>
                <h5 className="text-[12px] font-[500]">Status</h5>
                <div className="flex gap-2">
                  <div>
                    <FaCircle size={14} className="text-green-500 mt-1" />
                  </div>
                  <p className="text-[1.2rem] text-[#4348BD] font-[500]">
                    {installerDet.company_status}
                  </p>
                </div>
              </div>
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="text-gray-700 hover:text-indigo-600 gap-4 flex p-2 justify-between  border border-[#7A7A7A] rounded-full"
                >
                  Change Status <FiChevronDown className="mt-1" />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 bg-white shadow-lg rounded-md mt-2 w-48">
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className="p-4">
              <div className="grid grid-cols-3 grid-rows-2 gap-x-2 gap-y-3 pb-4 break-all border-b border-b-gray-300">
                <div className="flex gap-3">
                  <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">

                    <HiHashtag className="w-5 h-5" />

                  </div>
                  <div>
                    <h4 className="text-[#666666] font-[400] text-[13px]">Installer Id</h4>
                    <p className="text-[12px] font-[600] text-[#48494D]">{installerDet.company_id}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">

                    <HiHashtag className="w-5 h-5" />

                  </div>
                  <div>
                    <h4 className="text-[#666666] font-[400] text-[13px]">Business Role</h4>
                    <p className="text-[12px] font-[600] text-[#48494D]">{installerDet.business_role}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">

                    <HiHashtag className="w-5 h-5" />

                  </div>
                  <div>
                    <h4 className="text-[#666666] font-[400] text-[13px]">Type of Entity</h4>
                    <p className="text-[12px] font-[600] text-[#48494D]">{installerDet.type_of_entity}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">

                    <HiHashtag className="w-5 h-5" />

                  </div>
                  <div>
                    <h4 className="text-[#666666] font-[400] text-[13px]">Total Years in Solar Installations</h4>
                    <p className="text-[12px] font-[600] text-[#48494D]">{installerDet.total_years_in_solar_installation}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">

                    <HiHashtag className="w-5 h-5" />

                  </div>
                  <div>
                    <h4 className="text-[#666666] font-[400] text-[13px]">GST No</h4>
                    <p className="text-[12px] font-[600] text-[#48494D]">{installerDet.gst_no}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">

                    <HiHashtag className="w-5 h-5" />

                  </div>
                  <div>
                    <h4 className="text-[#666666] font-[400] text-[13px]">TAN No</h4>
                    <p className="text-[12px] font-[600] text-[#48494D]">{installerDet.tan_no}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">

                    <HiHashtag className="w-5 h-5" />

                  </div>
                  <div>
                    <h4 className="text-[#666666] font-[400] text-[13px]">PAN No</h4>
                    <p className="text-[12px] font-[600] text-[#48494D]">{installerDet.pan_no}</p>
                  </div>
                </div>
              </div>
              {/*---2nd row----*/}
              <div>
                <h4 className="text-[1.2rem] font-[600] text-[#000] py-6">
                  Registered Office Address
                </h4>
                <div className="grid grid-cols-3 grid-rows-2 gap-x-3 gap-y-5 border-b border-b-gray-300">
                  <div className="flex gap-3">
                    <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                      <HiHashtag className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[#666666] font-[400] text-[13px]">
                        Address
                      </h4>
                      <div className="flex">
                        <p className="text-[12px] font-[600] text-[#48494D]">
                          {installerDet.flat_number}, {installerDet.street_name}, {installerDet.city}, Pincode-{installerDet.pin_code}, {installerDet.state}
                        </p>
                        {/* <button className="  rounded-full text-[12px]">
                          <IoNavigateCircleOutline
                            size={24}
                            className="text-[#4348BD]"
                          />
                        </button> */}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                      <HiHashtag className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[#666666] font-[400] text-[13px]">
                        City
                      </h4>
                      <p className="text-[12px] font-[600] text-[#48494D]">
                        {installerDet.city}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                      <HiHashtag className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[#666666] font-[400] text-[13px]">
                        State
                      </h4>
                      <p className="text-[12px] font-[600] text-[#48494D]">
                        {installerDet.state}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                      <HiHashtag className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[#666666] font-[400] text-[13px]">
                        Pincode
                      </h4>
                      <p className="text-[12px] font-[600] text-[#48494D]">
                        {installerDet.pin_code}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                      <HiHashtag className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[#666666] font-[400] text-[13px]">
                        Email
                      </h4>
                      <p className="text-[12px] font-[600] text-[#48494D]">
                        {installerDet.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                      <HiHashtag className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[#666666] font-[400] text-[13px]">
                        Phone Number
                      </h4>
                      <p className="text-[12px] font-[600] text-[#48494D]">
                        {installerDet.mobile}
                      </p>
                    </div>
                  </div>
                </div>
                {/*---empanelled-row---*/}
                <div className="grid grid-cols-3 grid-rows-2 gap-x-3 gap-y-3  pb-4 mt-4 border-b border-b-gray-300">
                  <div className="flex gap-3">
                    <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                      <HiHashtag className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[#666666] font-[400] text-[13px]">
                        Empanelled with State Electricity Board
                      </h4>
                      <div className="flex">
                        <p className="text-[12px] font-[600] text-[#48494D]">
                          {installerDet.empanelled_with_state_board ? "Yes" : "No"}
                        </p>
                        {/* <button className="  rounded-full text-[12px]">
                          <IoNavigateCircleOutline
                            size={24}
                            className="text-[#4348BD]"
                          />
                        </button> */}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                      <HiHashtag className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[#666666] font-[400] text-[13px]">
                        Name of the Electricity Boards Empanelled with
                      </h4>
                      <p className="text-[12px] font-[600] text-[#48494D]">
                        {installerDet.name_of_empanelled_electricity_board}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                      <HiHashtag className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[#666666] font-[400] text-[13px]">
                        Combined capacity of total installations done till date
                      </h4>
                      <p className="text-[12px] font-[600] text-[#48494D]">
                        {installerDet.combined_capacity_of_total_installations_till_date} KW
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                      <HiHashtag className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[#666666] font-[400] text-[13px]">
                        Installation Capacity of the Largest Project Worked on
                      </h4>
                      <p className="text-[12px] font-[600] text-[#48494D]">
                        {installerDet.installed_capacity_of_largest_project_worked_on} KW
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                      <HiHashtag className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[#666666] font-[400] text-[13px]">
                        List of Product Brands
                      </h4>
                      <p className="text-[12px] font-[600] text-[#48494D]">
                        {installerDet.list_of_product_brands}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                      <HiHashtag className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[#666666] font-[400] text-[13px]">
                        Geographical Regions Where Direct Services Can be
                        Provided
                      </h4>
                      <p className="text-[12px] font-[600] text-[#48494D]">
                        {installerDet.geographical_regions}
                      </p>
                    </div>
                  </div>
                </div>

                {/*----3rd row----*/}
                <div className="grid grid-cols-3 grid-row-1 border-b border-b-gray-300 py-5">
                  <div className="flex gap-3">
                    <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                      <HiHashtag className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[#666666] font-[400] text-[13px]">
                        Total Employees
                      </h4>
                      <p className="text-[12px] font-[600] text-[#48494D]">
                        {installerDet.no_of_employees}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                      <HiHashtag className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[#666666] font-[400] text-[13px]">
                        Total Installation Crews
                      </h4>
                      <p className="text-[12px] font-[600] text-[#48494D]">{installerDet.total_no_of_installation_crews}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                      <HiHashtag className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[#666666] font-[400] text-[13px]">
                        Reference Site Details
                      </h4>
                      <p className="text-[12px] font-[600] text-[#48494D]">
                        {installerDet.reference_site_details}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/*---6th row----*/}
              <div className="border-b border-b-gray-300 py-5">
                <div className="mb-6 py-4">
                  <h4 className="text-[22px] font-[600] text-[#000]">
                    Attachments
                  </h4>
                </div>

                {/* Headings for the attachment list */}
                <div className="flex justify-between text-[1rem] font-bold  text-[#48494D] mb-4">
                  <span>Attachment Name</span>
                  <span>View</span>
                </div>

                {/* Attachment list */}
                <div className="flex flex-col gap-4">
                  <div className="items-center">
                    {/* GST Certificate */}
                    <div className="flex justify-between p-2">
                      {installerDet.gst_upload_doc && !installerDet.gst_upload_doc.includes("null") && (
                        <>
                          <div className="flex items-center gap-2">GST Certificate</div>
                          <div className="flex items-center gap-2">
                            <button
                              className="px-6 py-1 rounded-md border border-[#4348BD] text-[#4348BD]"
                              onClick={() => handleFile(installerDet.gst_upload_doc)}
                            >
                              View
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="flex justify-between p-2">
                      {/* PAN */}
                      {installerDet.pan_upload && !installerDet.pan_upload.includes("null") && (
                        <>
                          <div className="flex items-center gap-2">PAN</div>
                          <div className="flex items-center gap-2">
                            <button
                              className="px-6 py-1 rounded-md border border-[#4348BD] text-[#4348BD]"
                              onClick={() => handleFile(installerDet.pan_upload)}
                            >
                              View
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="flex justify-between p-2">
                      {/* TAN */}
                      {installerDet.tan_upload && !installerDet.tan_upload.includes("null") && (
                        <>
                          <div className="flex items-center gap-2">TAN</div>
                          <div className="flex items-center gap-2">
                            <button
                              className="px-6 py-1 rounded-md border border-[#4348BD] text-[#4348BD]"
                              onClick={() => handleFile(installerDet.tan_upload)}
                            >
                              View
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="flex justify-between p-2">
                      {/* Empanelment Certificate */}
                      {installerDet.empanellment_certificate_upload && !installerDet.empanellment_certificate_upload.includes("null") && (
                        <>
                          <div className="flex items-center gap-2">Empanelment Certificate</div>
                          <div className="flex items-center gap-2">
                            <button
                              className="px-6 py-1 rounded-md border border-[#4348BD] text-[#4348BD]"
                              onClick={() => handleFile(installerDet.empanellment_certificate_upload)}
                            >
                              View
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="flex justify-between p-2">
                      {/* Reference Site Pictures */}
                      {installerDet.reference_site_pictures_upload && JSON.parse(installerDet.reference_site_pictures_upload).length > 0 && (
                        <>
                          {JSON.parse(installerDet.reference_site_pictures_upload).map((url, index) => (
                            <div key={index} className="items-center gap-2 mb-2">
                              <div>Reference Site Picture {index + 1}</div>
                              <div>
                                <button
                                  className="px-6 py-1 rounded-md border border-[#4348BD] text-[#4348BD]"
                                  onClick={() => handleFile(url)}
                                >
                                  View
                                </button>
                              </div>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          {/* Proposals Section */}
          <div className="flex-1 border border-gray-400  rounded-lg">
            <div className="flex gap-3 juatify-between w-full">
              <button className="bg-[#4348BD] w-full text-white py-2 px-8 rounded-t-lg">
                Quotations Received
              </button>
              <button className="border border-gray-400 w-full py-2 px-8 rounded-t-lg">
                Orders
              </button>
              <button className="border border-gray-400 w-full py-2 px-8 rounded-t-lg">
                Proposals Sent
              </button>
            </div>
          
            <h4 className="text-[1.2rem] font-[600] mt-4 px-4">
              Quotations Received
            </h4>
            {proposals.length>0 && 
            <>
            <div className="flex justify-between mt-3 text-[1rem] px-4 font-bold  text-[#9698A1]">
              <span>Quote ID</span>
              <span className="pr-[16%]">Date of Proposal</span>
              <span>Proposal Amount</span>
            </div>
            <div className="p-4">
              <div className="">
                {proposals.map((proposal, index) => (
                  <div
                    key={index}
                    className="flex justify-between border-b border-b-gray-300 py-4"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[14px] text-[#4348BD] font-[500]">
                        {proposal.customer_id}
                      </span>
                    </div>
                    <span className="text-[12px] font-[600] text-[#48494D]">
                      {proposal.proposal_date}
                    </span>
                    <span className="text-[12px] font-[600] text-[#48494D] flex gap-1">
                      <BiRupee size={16} className="mt-[1px]" />
                      {proposal.total_project_cost}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            </>
            }
            {proposals.length===0 &&
            <div className="flex px-4 ">No Proposals Submitted till now</div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarInstallers2;
