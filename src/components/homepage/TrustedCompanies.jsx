import React from "react";

import netflix from "/assets/companies/netflix.png";
import youtube from "/assets/companies/youtube.png";
import google from "/assets/companies/google.png";
import lenovo from "/assets/companies/lenovo.png";
import slack from "/assets/companies/slack.png";
import verizon from "/assets/companies/verizon.png";
import lexmark from "/assets/companies/lexmark.png";
import microsoft from "/assets/companies/microsoft.png";

const TrustedCompanies = () => {
  const companies = [
    { id: 1, image: netflix, alt: "Netflix" },
    { id: 2, image: youtube, alt: "YouTube" },
    { id: 3, image: google, alt: "Google" },
    { id: 4, image: lenovo, alt: "Lenovo" },
    { id: 5, image: slack, alt: "Slack" },
    { id: 6, image: verizon, alt: "Verizon" },
    { id: 7, image: lexmark, alt: "Lexmark" },
    { id: 8, image: microsoft, alt: "Microsoft" },
  ];

  return (
    <section className="bg-[#FFFFFF] py-5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="md:w-1/3 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-2xl font-bold">6.3k trusted companies</h2>
          <p className="text-gray-500 mt-2">
            Nullam egestas tellus at enim ornare tristique. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra.
          </p>
        </div>

        {/* Right Section (Company Logos) */}
        <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {companies.map((company) => (
            <div key={company.id} className="bg-white flex items-center justify-center">
              <img src={company.image} alt={company.alt} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
