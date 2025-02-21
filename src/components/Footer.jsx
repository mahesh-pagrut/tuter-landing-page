import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Logo from "../assets/LOGO-F.png";

const Footer = () => {
  return (
    <footer className="bg-[#1D2026] text-white">
      {/* Top Call to Action */}
      <div className="border-b border-gray-700 py-10 text-center">
        <h2 className="text-xl md:text-2xl font-bold">Start learning with 67.1k students around the world.</h2>
        <div className="mt-4 flex justify-center gap-4">
          <button className="bg-red-500 px-5 py-2 rounded-lg font-semibold">Join The Family</button>
          <button className="bg-gray-700 px-5 py-2 rounded-lg font-semibold">Browse All Courses</button>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
