"use client";
import React from "react";
import { HiHashtag } from "react-icons/hi";
import { BiRupee } from "react-icons/bi";
import { FaCircle } from "react-icons/fa";
import { IoNavigateCircleOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { GetFileURL } from "@/app/functions/ServerFunctions";
const CustomerRFQs2 = ({ quotedetails }) => {
  console.log(quotedetails);
  const proposals = quotedetails.proposals;
  const customer = [
    { label: "Quotation Id", value: quotedetails.customer[0].customer_id },
    {
      label: "Date",
      value: new Date(quotedetails.customer[0].cr_date).toLocaleDateString(
        "en-GB",
        {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }
      ),
    },
    { label: "Email Id", value: quotedetails.customer[0].email },
    { label: "PhoneNumber", value: quotedetails.customer[0].mobile },
  ];

  const requirementDetails = [
    { label: "Establishment", value: quotedetails.customer[0].type },
    {
      label: "Connection Type",
      value: quotedetails.customer[0].connection_type,
    },
    {
      label: "Total Roof Area",
      value: quotedetails.customer[0].area_sqft + " Sqft",
    },

    {
      label: "Last Month Consumption",
      value: quotedetails.customer[0].consumption_last_month + " KW",
    },
    {
      label: "Need Subsidy",
      value: quotedetails.customer[0].subsidy ? "Yes" : "No",
    },
    { label: "Floor No", value: quotedetails.customer[0].install_floor },

    {
      label: "Roof Rights?",
      value: quotedetails.customer[0].rf_rights ? "Yes" : "No",
    },
    {
      label: "Capacity",
      value: quotedetails.customer[0].capacity_install + " KW",
    },
    {
      label: "Current Sanction Load",
      value: quotedetails.customer[0].sanctioned_load + " KW",
    },
  ];

  const requirementDetails1 = [
    { label: "Establishment", value: quotedetails.customer[0].type },
    {
      label: "Connection Type",
      value: quotedetails.customer[0].connection_type,
    },
    {
      label: "Total Roof Area",
      value: quotedetails.customer[0].area_sqft + " Sqft",
    },
    {
      label: "Capacity",
      value: quotedetails.customer[0].capacity_install + " KW",
    },
    {
      label: "Electricity Connectivity",
      value: quotedetails.customer[0].electricity_connectivity ? "Yes" : "No",
    },
  ];

  const requirementDetails2 = [
    { label: "Establishment", value: quotedetails.customer[0].type },
    {
      label: "Connection Type",
      value: quotedetails.customer[0].connection_type,
    },
    {
      label: "Total Roof Area",
      value: quotedetails.customer[0].area_sqft + " Sqft",
    },
    {
      label: "Capacity",
      value: quotedetails.customer[0].capacity_install + " KW",
    },
    {
      label: "Current Sanction Load",
      value: quotedetails.customer[0].sanctioned_load + " KW",
    },
    {
      label: "Last Month Consumption",
      value: quotedetails.customer[0].consumption_last_month + " KW",
    },
    { label: "Type Of Roof", value: quotedetails.customer[0].rf_type },
  ];
  const status =
    quotedetails.customer[0].company_id === "0" &&
    quotedetails.proposals.length === 0
      ? "New"
      : quotedetails.customer[0].company_id === "0" &&
        quotedetails.proposals.length > 0
      ? "Proposals Stage"
      : "Completed";
  const statuscolor =
    status === "Proposals Stage"
      ? "text-orange-500"
      : status === "New"
      ? "text-yellow-500"
      : status === "Completed"
      ? "text-green-500"
      : "";

  const attachments = [
    "RoofLayout",
    "Electricity Bill",
    "GST Certificate(if Commercial)",
    "Identity Proof",
  ];

  // const proposals = [
  //   { company: "Company1", date: "30-07-2023", amount: "28,000" },
  //   { company: "Company2", date: "30-07-2023", amount: "28,000" },
  //   { company: "Company3", date: "30-07-2023", amount: "28,000" },
  // ];

  const handleFile = async (filename) => {
    try {
      const response = await GetFileURL(filename);
      console.log(response);
      if (response.status === 200) {
        console.log(response.data);
        window.open(response.data.url, "_blank");
      } else {
        toast.error(
          "Failed to Get the file from the server. Please try again."
        );
      }
    } catch (error) {
      alert(error);
      toast.error("Error while Getting file from Server. Please try again.");
    } finally {
    }
  };

  const renderDetails = (details) =>
    details.map(({ label, value, icon: Icon }, index) => (
      <div key={index} className="flex gap-3">
        <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
          {Icon ? (
            <Icon className="w-5 h-5" />
          ) : (
            <HiHashtag className="w-5 h-5" />
          )}
        </div>
        <div>
          <h4 className="text-[#666666] font-[400] text-[13px]">{label}</h4>
          <p className="text-[12px] font-[600] text-[#48494D]">{value}</p>
        </div>
      </div>
    ));

  return (
    <div className="">
      <div className="p-1">
        {/* Container for Customer Details and Proposals */}
        <div className="flex gap-4">
          {/* Customer Details Section */}
          <div className="flex-1   border border-[#7A7A7A]  rounded-lg">
            <div className="flex justify-between mb-4 bg-[#F4F4FF] px-5 py-3">
              <div>
                <h5 className="text-[12px] font-[500]">Customer Name</h5>
                <p className="text-[1.2rem] text-[#4348BD] font-[500]">
                  {quotedetails.customer[0].name}
                </p>
              </div>
              <div>
                <h5 className="text-[12px] font-[500]">Status</h5>
                <div className="flex gap-2">
                  <div>
                    <FaCircle size={14} className={`mt-1 ${statuscolor}`} />
                  </div>
                  <p className="text-[1.2rem] text-[#4348BD] font-[500]">
                    {status}
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex gap-2 justify-between break-all">
                {renderDetails(customer)}
              </div>
              {/*---2nd row----*/}
              <div className="flex gap-2 mt-11 py-6 justify-between border-b border-b-gray-300">
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
                        {quotedetails.customer[0].house_number},{" "}
                        {quotedetails.customer[0].street_name},{" "}
                        {quotedetails.customer[0].state.toString().trim()},
                        {quotedetails.customer[0].district.toString().trim()},{" "}
                        {quotedetails.customer[0].city.toString().trim()},{" "}
                        {quotedetails.customer[0].pin_code.toString().trim()},
                      </p>
                      <button className="  rounded-full text-[12px] ml-2 ">
                        <IoNavigateCircleOutline
                          size={24}
                          className="text-[#4348BD]"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                    <HiHashtag className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[#666666] font-[400] text-[13px]">
                      Organization Type
                    </h4>
                    <p className="text-[12px] font-[600] text-[#48494D]">
                      {quotedetails.customer[0].org_type.toString().trim()}
                    </p>
                  </div>
                </div>
              </div>
              {/*----3rd row----*/}
              {quotedetails.customer[0].type.toString().trim() ===
                "Residential" &&
                quotedetails.customer[0].connection_type.toString().trim() ===
                  "Offgrid" && (
                  <div className="border-b border-b-gray-300 py-5">
                    <div className="flex gap-8 mb-6 py-4">
                      <h4 className="text-[22px] font-[600] text-[#000]">
                        Requirement
                      </h4>
                      <button className="px-6 border border-gray-500 rounded-full text-[1rem] font-bolds bg-[#4348BD3B] text-[#181C88]">
                        If Residential and On Grid
                      </button>
                    </div>
                    <div className="grid grid-cols-3 grid-rows-3 gap-x-3 gap-y-8 break-all">
                      {renderDetails(requirementDetails)}
                    </div>
                  </div>
                )}

              {/*---4th row----*/}
              {quotedetails.customer[0].type.toString().trim() ===
                "Residential" &&
                quotedetails.customer[0].connection_type.toString().trim() ===
                  "Ongrid" && (
                  <div className="border-b border-b-gray-300 py-5">
                    <div className="flex gap-8 mb-6 py-4">
                      <h4 className="text-[22px] font-[600] text-[#000]">
                        Requirement
                      </h4>
                      <button className="px-6 border border-gray-500 bg-[#4348BD3B] text-[#181C88] rounded-full text-[1rem] font-bold">
                        If Residential and off Grid
                      </button>
                    </div>
                    <div className="grid grid-cols-3 grid-row-2 gap-x-4 gap-y-6 break-all">
                      {renderDetails(requirementDetails1)}
                    </div>
                  </div>
                )}
              {/*---5th row----*/}
              {quotedetails.customer[0].type.toString().trim() ===
                "Commercial" && (
                <div className="border-b border-b-gray-300 py-5">
                  <div className="flex gap-8 mb-6 py-4">
                    <h4 className="text-[22px] font-[600] text-[#000]">
                      Requirement
                    </h4>
                    <button className="px-6 border bg-[#4348BD3B] text-[#181C88] border-gray-500 rounded-full text-[1rem] font-bold">
                      If Commercial
                    </button>
                  </div>
                  <div className="grid grid-rows-3 grid-cols-3  gap-x-5 gap-y-6 break-all">
                    {renderDetails(requirementDetails2)}
                  </div>
                </div>
              )}
              {/*---6th row----*/}
              <div className="table w-full border-collapse py-5">
                <div className="mb-6 py-4">
                  <h4 className="text-[22px] font-[600] text-[#000]">
                    Attachments
                  </h4>
                </div>

                {/* Headings for the attachment list */}
                <div className="border border-gray-300   rounded-md">
                  {/* Table Head */}
                  <div className="table w-full bg-gray-200">
                    <div className="table-row ">
                      <div className="table-cell p-2 font-bold text-gray-700">
                        Attachments
                      </div>
                      <div className="table-cell pr-6 p-2 font-bold text-gray-700 text-right">
                        View
                      </div>
                    </div>
                  </div>

                  {/* Table Body */}
                  <div className="table w-full border-t border-gray-300">
                    {/* GST Certificate */}
                    {quotedetails.customer[0].gst_upload &&
                      !quotedetails.customer[0].gst_upload.includes(
                        "undefined"
                      ) && (
                        <div className="table-row border border-gray-300 ">
                          <div className="table-cell p-2">GST Certificate</div>
                          <div className="table-cell p-2 text-right">
                            <button
                              className="px-4 py-1 rounded-md border  border-[#4348BD] text-[#4348BD]"
                              onClick={() =>
                                handleFile(quotedetails.customer[0].gst_upload)
                              }
                            >
                              View
                            </button>
                          </div>
                        </div>
                      )}

                    {/* Identity Document */}
                    {quotedetails.customer[0].id_upload &&
                      !quotedetails.customer[0].id_upload.includes(
                        "undefined"
                      ) && (
                        <div className="table-row border  border-gray-300 ">
                          <div className="table-cell p-2">
                            Identity Document
                          </div>
                          <div className="table-cell text-right p-2">
                            <button
                              className="px-4 py-1 rounded-md border  border-[#4348BD] text-[#4348BD]"
                              onClick={() =>
                                handleFile(quotedetails.customer[0].id_upload)
                              }
                            >
                              View
                            </button>
                          </div>
                        </div>
                      )}

                    {/* Roof Layout */}
                    {quotedetails.customer[0].rf_layout_upload_doc &&
                      !quotedetails.customer[0].rf_layout_upload_doc.includes(
                        "undefined"
                      ) && (
                        <div className="table-row border-b  border-b-gray-300">
                          <div className="table-cell p-2">Roof Layout</div>
                          <div className="table-cell p-2 text-right">
                            <button
                              className="px-4 py-1 rounded-md border  border-[#4348BD] text-[#4348BD]"
                              onClick={() =>
                                handleFile(
                                  quotedetails.customer[0].rf_layout_upload_doc
                                )
                              }
                            >
                              View
                            </button>
                          </div>
                        </div>
                      )}

                    {/* Video */}
                    {quotedetails.customer[0].video_upload &&
                      !quotedetails.customer[0].video_upload.includes(
                        "null"
                      ) && (
                        <div className="table-row border border-gray-300 ">
                          <div className="table-cell p-2">Video</div>
                          <div className="table-cell p-2 text-right">
                            <button
                              className="px-4 py-1  rounded-md border border-[#4348BD] text-[#4348BD]"
                              onClick={() =>
                                handleFile(
                                  quotedetails.customer[0].video_upload
                                )
                              }
                            >
                              View
                            </button>
                          </div>
                        </div>
                      )}

                    {/* Reference Site Pictures */}
                    {quotedetails.customer[0].images_upload &&
                      quotedetails.customer[0].images_upload.split(",").length >
                        0 &&
                      quotedetails.customer[0].images_upload
                        .split(",")
                        .map((url, index) => (
                          <div
                            className="table-row border border-gray-300 "
                            key={index}
                          >
                            <div className="table-cell p-2">
                              Reference Site Picture {index + 1}
                            </div>
                            <div className="table-cell text-right p-2">
                              <button
                                className="px-4 py-1 rounded-md border border-[#4348BD] text-[#4348BD]"
                                onClick={() => handleFile(url)}
                              >
                                View
                              </button>
                            </div>
                          </div>
                        ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Proposals Section */}
          <div className="flex-1 border border-gray-400 rounded-lg">
            <h4 className="text-[1.2rem] font-[600] text-[#4348BD] p-4 bg-[#F4F4FF]">
              Proposals Received to the User
            </h4>
            <div className="p-4">
              {/* Header Row */}
              <div className="flex justify-between border-b border-b-gray-300 py-2 ">
                <span className="text-[14px] font-[600] text-[#9698A1]">
                  Company Name
                </span>
                <span className="text-[14px] font-[600] text-[#9698A1]">
                  Date of Submission
                </span>
                <span className="text-[14px] font-[600] text-[#9698A1]">
                  Amount
                </span>
              </div>

              {/* Proposals List */}
              <div className="">
                {proposals.map((proposal, index) => (
                  <div
                    key={index}
                    className="flex justify-between border-b border-b-gray-300 py-4"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[14px] text-[#4348BD] font-[500]">
                        {proposal.company_name}
                      </span>
                    </div>
                    <span className="text-[12px] font-[600] text-[#48494D]">
                      {new Date(proposal.date).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })}
                    </span>
                    <span className="text-[12px] font-[600] text-[#48494D] flex gap-1">
                      <BiRupee size={16} className="mt-[1px]" />
                      {proposal.total_project_cost}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerRFQs2;
