"use client";
import React, { useState } from "react";
import { MdSearch, MdKeyboardArrowDown } from "react-icons/md";
import { useRouter } from "next/navigation";
import Pagination from "./Pagination";
const SolarInstallers = ({ setActiveItem, installers }) => {
  console.log(installers)
  const router = useRouter();
  const currentInstallers = installers

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Newest");
  const [selectedInstallerId, setSelectedInstallerId] = useState(null);
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
  const currentDisplayedInstallers = currentInstallers.slice(
    indexOfFirstUser,
    indexOfLastUser
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleRowClick = (installerId) => {
    // setSelectedInstallerId(installerId);
    // setActiveItem("Installers");
    // navigate(`/installers/${installerId}`);
    router.push("solar-detail/"+installerId);
  };

  return (
    <div>
      <div className="">
        {/*---- All users start here ----*/}
        <div className="w-full h-full border border-[#7A7A7A] rounded-lg  ">
          <div className="flex justify-between px-4 bg-[#F4F4FF] py-5">
            <p className="text-[22px] font-[600] text-[#000] mr-2">
              All Installers
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
                  className="text-[#7E7E7E] ml-2  px-6 py-2 flex items-center border border-[#7E7E7E] rounded-md"
                >
                  <span className="mr-2 text-[#7A7A7A]">{selectedOption}</span>
                  <MdKeyboardArrowDown />
                </button>
              </p>
              {dropdownOpen && (
                <div className="absolute right-0 bg-white shadow-lg rounded-md mt-2 w-48">
                  <a href="#">
                    <button
                      onClick={() => handleOptionClick("Approved")}
                      className="block w-full text-left px-4 py-2 text-[#7E7E7E] hover:bg-gray-100"
                    >
                      Approved
                    </button>
                  </a>
                  <a href="#">
                    <button
                      onClick={() => handleOptionClick("Oldest")}
                      className="block w-full text-left px-4 py-2 text-[#7E7E7E] hover:bg-gray-100"
                    >
                      Oldest
                    </button>
                  </a>
                  <a href="#">
                    <button
                      onClick={() => handleOptionClick("Most Popular")}
                      className="block w-full text-left px-4 py-2 text-[#7E7E7E] hover:bg-gray-100"
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
            <table className="min-w-full bg-white mt-11">
              <thead>
                <tr>
                <th className="text-[14px] border-b border-b-gray-300 font-[500] text-[#969891] pb-2">
                    Company ID
                  </th>
                  <th className="text-[14px] border-b border-b-gray-300 font-[500] text-[#969891] pb-2">
                    Company Name
                  </th>
                  <th className="text-[14px] border-b border-b-gray-300 font-[500] text-[#969891] pb-2">
                    Email Id
                  </th>
                  <th className="text-[14px] border-b border-b-gray-300 font-[500] text-[#969891] pb-2">
                    Phone Number
                  </th>
                  <th className="text-[14px] border-b border-b-gray-300 font-[500] text-[#969891] pb-2">
                    City
                  </th>
                  <th className="text-[14px] border-b border-b-gray-300 font-[500] text-[#969891] pb-2">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentDisplayedInstallers.map((installer, index) => (
                  <React.Fragment key={installer.company_id}>
                    <tr
                      key={installer.company_id}
                      onClick={() => handleRowClick(installer.company_id)}
                      className={`cursor-pointer ${
                        selectedInstallerId === installer.company_id
                          ? "bg-[#4348BD]"
                          : ""
                      }`}
                    >
                       <td className="text-[#292D32] font-[500] text-[12px] border-b border-b-gray-300 py-3 text-center">
                        {installer.company_id}
                      </td>
                      <td className="text-[#292D32] font-[500] text-[12px] border-b border-b-gray-300 py-3 text-center">
                        {installer.company_name}
                      </td>
                      <td className="text-[#292D32] font-[500] text-[12px] border-b border-b-gray-300 py-3 text-center">
                        {installer.email}
                      </td>
                      <td className="text-[#292D32] font-[500] text-[12px] border-b border-b-gray-300 py-3 text-center">
                        {installer.mobile}
                      </td>
                      <td className="text-[#292D32] font-[500] text-[12px] border-b border-b-gray-300 py-3 text-center">
                        {installer.city}
                      </td>
                      <td className="text-[#292D32] font-[500] text-[12px] border-b border-b-gray-300 py-3 text-center">
                        {installer.company_status}
                      </td>
                    </tr>
                    {index !== currentDisplayedInstallers.length - 1 && (
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
              totalUsers={currentInstallers.length}
              paginate={paginate}
            />
          </div>
        </div>
        {/*---- All users close ----*/}
      </div>
    </div>
  );
};

export default SolarInstallers;
