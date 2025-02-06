import { useState } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { GiShop } from "react-icons/gi";
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";

import { Link } from "react-router-dom";

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  const toggleProductsDropdown = () => {
    setIsProductsOpen(!isProductsOpen);
  };
  return (
    <div
      className={`border-r-[1px] border-gray-100 text-[#3c82f6] md:fixed bg-white  h-screen ${
        isCollapsed ? "w-16" : "w-64"
      } transition-all duration-800 ease-in-out`}
    >
      <div className="p-4 flex justify-between items-center">
        {/* Toggle Button */}
        <button onClick={toggleSidebar} className="focus:outline-none">
          {isCollapsed ? <FaAnglesRight /> : <FaAnglesLeft></FaAnglesLeft>}
        </button>
      </div>

      <ul className="mt-4">
        <Link to="/">
          <li className="p-4 hover:bg-[#eff6ff] flex items-center">
            {isCollapsed ? (
              <MdSpaceDashboard className="size-6"></MdSpaceDashboard>
            ) : (
              "Dashboard"
            )}
          </li>
        </Link>

        <Link to="/users">
          <li className="p-4 hover:bg-[#eff6ff] flex items-center">
            {isCollapsed ? <FaUsers className="size-6" /> : "Users"}
          </li>
        </Link>

        <li>
          <button
            onClick={toggleProductsDropdown}
            className="w-full p-4 hover:bg-[#eff6ff] flex items-center justify-between"
          >
            {isCollapsed ? (
              <Link to="/products">
                <GiShop className="size-6" />
              </Link>
            ) : (
              <>
                <span>Products</span>
                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    isProductsOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </>
            )}
          </button>

          {!isCollapsed && isProductsOpen && (
            <ul className="pl-8">
              <Link to="/products">
                <li className="p-2 hover:bg-[#eff6ff]">All Products</li>
              </Link>
              <Link to="/add-product">
                <li className="p-2 hover:bg-[#eff6ff]">Create Products</li>
              </Link>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
