"use client";
import React, { useState } from "react";
import { MdSearch, MdKeyboardArrowDown } from "react-icons/md";

import Pagination from "./Pagination";
import { HiHashtag } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
const Feedback = () => {
  const feedbackData = [
    {
      id: 1,
      name: "Abhishek Sharma Goyal",
      subject: "Need a Solar Plant for residential building with 3KW Capacity",
    },
    {
      id: 2,
      name: "Abhishek Sharma Goyal",
      subject: "Need a Solar Plant for residential building with 3KW Capacity",
    },
    {
      id: 3,
      name: "Abhishek Sharma Goyal",
      subject: "Need a Solar Plant for residential building with 3KW Capacity",
    },
    {
      id: 4,
      name: "Abhishek Sharma Goyal",
      subject: "Need a Solar Plant for residential building with 3KW Capacity",
    },
  ];
  const [status, setStatus] = useState("");

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Closed");
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentDisplayedfeedbackData = feedbackData.slice(
    indexOfFirstUser,
    indexOfLastUser
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="">
      <div className="flex gap-3 max-[1100px]:flex-col">
        {/*---- All feedbacks start here ----*/}
        <div className="w-1/2 h-full border border-[#7a7A7A] max-[1100px]:w-full pb-6  rounded-lg ">
          <div className="flex justify-between bg-[#F4F4FF] py-4 px-3">
            <p className="text-[22px] font-[600] text-[#000] pt-2 mr-2">
              All Feedbacks
            </p>
            <div className="flex items-center border border-gray-300 rounded-lg px-2 py-1">
              <input
                type="text"
                placeholder="Search..."
                className="outline-none w-24 p-1 text-[12px] font-[400] text-[#B5B7C0]"
              />
              <MdSearch className="text-gray-500 text-xl ml-2" />
            </div>
            <div className="relative">
              <p className="flex items-center text-[1rem] ml-3 text-[#7E7E7E]">
                Sort by:
                <button
                  onClick={toggleDropdown}
                  className="text-gray-700 ml-2 hover:text-indigo-600 px-6 py-2 flex items-center border border-black rounded-md"
                >
                  <span className="mr-2 text-[#7E7E7E]">{selectedOption}</span>
                  <MdKeyboardArrowDown />
                </button>
              </p>
              {dropdownOpen && (
                <div className="absolute right-0 bg-white shadow-lg rounded-md mt-2 w-48">
                  <a href="#">
                    <button
                      onClick={() => handleOptionClick("Closed")}
                      className="block w-full text-left px-4 py-2 text-[#7A7A7A] hover:bg-gray-100"
                    >
                      Newest
                    </button>
                  </a>
                  <a href="#">
                    <button
                      onClick={() => handleOptionClick("Oldest")}
                      className="block w-full text-left px-4 py-2 text-[#7A7A7A] hover:bg-gray-100"
                    >
                      Oldest
                    </button>
                  </a>
                  <a href="#">
                    <button
                      onClick={() => handleOptionClick("Most Popular")}
                      className="block w-full text-left px-4 py-2 text-[#7A7A7A] hover:bg-gray-100"
                    >
                      Most Popular
                    </button>
                  </a>
                </div>
              )}
            </div>
          </div>
          {/*---- Table ----*/}
          <div className="flex-grow">
            <table className="min-w-full bg-white mt-8">
              <thead>
                <tr>
                  <th className="text-[14px] border-b border-b-gray-300 font-[500] text-[#969891] pb-2">
                    Full Name
                  </th>
                  <th className="text-[14px] border-b border-b-gray-300 font-[500] text-[#969891] pb-2">
                    Subject
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentDisplayedfeedbackData.map((data, index) => (
                  <React.Fragment key={data.id}>
                    <tr>
                      <td className="text-[#292D32] font-[500] text-[12px] border-b border-b-gray-300 py-3 text-center">
                        {data.name}
                      </td>
                      <td className="text-[#292D32] font-[500] text-[12px] border-b border-b-gray-300 py-3 text-center">
                        {data.subject}
                      </td>
                    </tr>
                    {index !== currentDisplayedfeedbackData.length - 1 && (
                      <tr>
                        <td colSpan="5" className="py-2"></td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
          {/*---- Pagination ----*/}
          <div className="flex justify-center items-center mt-4">
            <Pagination
              currentPage={currentPage}
              usersPerPage={usersPerPage}
              totalUsers={feedbackData.length}
              paginate={paginate}
            />
          </div>
        </div>
        {/*---- All feedbacks close ----*/}
        {/*---- feedback details start here ----*/}
        <div className="w-1/2 h-full border border-[#7A7A7A] max-[1100px]:w-full pb-11  rounded-lg ">
          <div className="flex justify-between bg-[#F4F4FF] px-3 py-5">
            <h1 className="text-[22px] font-[600] text-[#4348BD] ">
              Feedback Details
            </h1>
            <div className="relative inline-block ">
              <select
                value={status}
                onChange={handleStatusChange}
                className="block w-full px-4 py-2 pr-10 text-gray-700  border border-gray-300 rounded-md shadow-sm appearance-none bg-[#F4F4FF]"
              >
                <option value="">Change status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="pending">Pending</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pb-8 pointer-events-none">
                <RiArrowDropDownLine />
              </div>
            </div>
          </div>
          <div className=" py-4 px-3 ">
            <div className="flex gap-3 justify-between mb-6">
              <div className="flex gap-3">
                <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                  <HiHashtag className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#666666] font-[400] text-[13px]">
                    Feedback Id
                  </h4>
                  <p className="text-[12px] font-[600] text-[#48494D]">12345</p>
                </div>
              </div>
              <div className="flex gap-3 ">
                <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                  <HiHashtag className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#666666] font-[400] text-[13px]">
                    Full Name
                  </h4>
                  <p className="text-[12px] font-[600] text-[#48494D]">
                    Abhishek Sharma Goyal
                  </p>
                </div>
              </div>
              <div className="flex gap-3 ">
                <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                  <HiHashtag className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#666666] font-[400] text-[13px] break-words">
                    Email Id
                  </h4>
                  <p className="text-[12px] font-[600] text-[#48494D] break-all">
                    abhishek@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 justify-between mb-6">
              <div className="flex gap-3">
                <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                  <HiHashtag className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#666666] font-[400] text-[13px]">
                    Phone Number
                  </h4>
                  <p className="text-[12px] font-[600] text-[#48494D]">
                    123456789
                  </p>
                </div>
              </div>
              <div className="flex gap-3 ">
                <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                  <HiHashtag className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#666666] font-[400] text-[13px]">
                    Subject
                  </h4>
                  <p className="text-[12px] font-[600] text-[#48494D]">
                    Solar Panel Installation
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 justify-between">
              <div className="flex gap-3 ">
                <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                  <HiHashtag className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#666666] font-[400] text-[13px]">
                    Message
                  </h4>
                  <p className="text-[12px] font-[600] text-[#48494D]">
                    Need a Solar Plant for residential building with 3KW
                    Capacity
                  </p>
                </div>
              </div>
              <div className="flex gap-3 ">
                <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                  <HiHashtag className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#666666] font-[400] text-[13px]">
                    Registered Address
                  </h4>
                  <p className="text-[12px] font-[600] text-[#48494D]">
                    D.No:24-10-12/A,Patella street,punjab
                    junction,punjab-530044.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
