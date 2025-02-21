import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, Bell, Heart, ShoppingCart } from "lucide-react";
import logo from "../assets/LOGO.png";

export default function Navbar() {
  const [currency, setCurrency] = useState("USD");
  const [language, setLanguage] = useState("English");
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <nav className="bg-[#1D2026] text-sm text-gray-400 px-8 flex justify-between items-center">
        <div className="hidden md:flex gap-8">
          {["Home", "Courses", "About", "Contact", "Become an Instructor"].map(
            (name) => (
              <Link
                key={name}
                to="/"
                className={`text-sm px-2 ${
                  active === name
                    ? "text-white shadow-[inset_0px_2px_0px_0px_#FF6636]"
                    : "text-gray-400"
                }`}
                onClick={() => setActive(name)}
              >
                {name}
              </Link>
            )
          )}
        </div>
        <div className="hidden md:flex space-x-4">
          <select
            className="bg-[#1D2026] p-2 text-gray-400 border-none focus:outline-none"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="INR">INR</option>
          </select>
          <select
            className="bg-[#1D2026] p-2 text-gray-400 border-none focus:outline-none"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
          </select>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>
      {isOpen && (
        <div className="bg-[#1D2026] text-gray-400 py-4 flex flex-col items-center gap-4 md:hidden">
          {["Home", "Courses", "About", "Contact", "Become an Instructor"].map(
            (name) => (
              <Link
                key={name}
                to="/"
                className={`text-sm font-medium ${
                  active === name ? "text-white" : "text-gray-400"
                }`}
                onClick={() => {
                  setActive(name);
                  setIsOpen(false);
                }}
              >
                {name}
              </Link>
            )
          )}
        </div>
      )}
      {/* Bottom Navbar */}
      <nav className="bg-white border-b border-[#E9EAF0] px-8 py-5 gap-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="LOGO" className="h-8 w-auto" />
        </div>

        {/* Browse Dropdown */}
        <div className="flex items-center border p-1.5 px-4 border-gray-300">
          <select
            className=" text-gray-500 border-none focus:outline-none"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="English">Browse</option>
            <option value="Spanish">Browse</option>
            <option value="French">Browse</option>
          </select>
        </div>

        {/* Search Bar */}
        <div className="flex items-center mr-auto border border-gray-300 overflow-hidden w-[30%] max-w-md">
          <button className=" p-1 text-gray-500">
            <Search size={18} />
          </button>
          <input
            type="text"
            className="p-1.5 w-full outline-none"
            placeholder="Search..."
          />
        </div>
        {/* Icons & Buttons */}
        <div className="flex items-center gap-6">
          <Bell className="text-gray-500 cursor-pointer" size={18} />
          <Heart className="text-gray-500 cursor-pointer" size={18} />
          <ShoppingCart className="text-gray-500 cursor-pointer" size={18} />
          <button className="bg-[#FFEEE8] text-[#FF6636] px-4 py-1.5 ">
            Create Account
          </button>
          <button className=" bg-[#FF6636] text-white px-4 py-1.5">
            Sign In
          </button>
        </div>
      </nav>
    </>
  );
}
