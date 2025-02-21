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

      {/* Main Footer Section */}
      <div className="border-b border-gray-700 py-10 px-4 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Logo and Socials */}
        <div>
          <img src={Logo} alt="E-tutor Logo" className="h-10" />
          <p className="text-gray-400 mt-2">Aliquam rhoncus ligula est, non pulvinar elit convallis nec.</p>
          <div className="flex gap-3 mt-3">
            <Facebook className="w-5 h-5 text-gray-400 hover:text-white" />
            <Instagram className="w-5 h-5 text-gray-400 hover:text-white" />
            <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
            <Twitter className="w-5 h-5 text-gray-400 hover:text-white" />
            <Youtube className="w-5 h-5 text-gray-400 hover:text-white" />
          </div>
        </div>

        {/* Top Categories */}
        <div>
          <h3 className="font-semibold">Top 4 Category</h3>
          <ul className="text-gray-400 space-y-2 mt-2">
            <li>Development</li>
            <li>Finance & Accounting</li>
            <li>Design</li>
            <li>Business</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold">Quick Links</h3>
          <ul className="text-gray-400 space-y-2 mt-2">
            <li>About</li>
            <li className="flex items-center gap-1">Become Instructor <span className="ml-1">→</span></li>
            <li>Contact</li>
            <li>Career</li>
          </ul>
        </div>

        {/* Support & App Downloads */}
        <div>
          <h3 className="font-semibold">Support</h3>
          <ul className="text-gray-400 space-y-2 mt-2">
            <li>Help Center</li>
            <li>FAQs</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
          <div className="mt-4">
            <h3 className="font-semibold">Download Our App</h3>
            <div className="flex gap-2 mt-2">
              <button className="bg-gray-700 px-3 py-2 rounded-lg">App Store</button>
              <button className="bg-gray-700 px-3 py-2 rounded-lg">Play Store</button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="py-4 text-center text-gray-400 text-sm">© 2021 - Eduflex. Designed by Templatecookie. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
