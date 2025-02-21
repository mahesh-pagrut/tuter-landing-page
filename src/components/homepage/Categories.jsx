import React from "react";
import LabelIcon from "/assets/categories/label.png";
import BusinessIcon from "/assets/categories/business.png";
import FinanceIcon from "/assets/categories/finance.png";
import ITIcon from "/assets/categories/it.png";
import PersonalDevIcon from "/assets/categories/personal-development.png";
import OfficeProdIcon from "/assets/categories/office-productivity.png";
import MarketingIcon from "/assets/categories/marketing.png";
import PhotographyIcon from "/assets/categories/photography.png";
import LifestyleIcon from "/assets/categories/lifestyle.png";
import DesignIcon from "/assets/categories/design.png";
import HealthIcon from "/assets/categories/health.png";
import MusicIcon from "/assets/categories/music.png";

const categories = [
  { name: "Label", courses: "63,476 Courses", icon: LabelIcon, bg: "bg-purple-100" },
  { name: "Business", courses: "52,822 Courses", icon: BusinessIcon, bg: "bg-green-100" },
  { name: "Finance & Accounting", courses: "33,841 Courses", icon: FinanceIcon, bg: "bg-orange-100" },
  { name: "IT & Software", courses: "22,649 Courses", icon: ITIcon, bg: "bg-red-100" },
  { name: "Personal Development", courses: "20,126 Courses", icon: PersonalDevIcon, bg: "bg-orange-200" },
  { name: "Office Productivity", courses: "13,932 Courses", icon: OfficeProdIcon, bg: "bg-gray-100" },
  { name: "Marketing", courses: "12,068 Courses", icon: MarketingIcon, bg: "bg-purple-200" },
  { name: "Photography & Video", courses: "6,196 Courses", icon: PhotographyIcon, bg: "bg-gray-200" },
  { name: "Lifestyle", courses: "2,736 Courses", icon: LifestyleIcon, bg: "bg-orange-100" },
  { name: "Design", courses: "2,600 Courses", icon: DesignIcon, bg: "bg-pink-100" },
  { name: "Health & Fitness", courses: "1,678 Courses", icon: HealthIcon, bg: "bg-green-200" },
  { name: "Music", courses: "959 Courses", icon: MusicIcon, bg: "bg-yellow-100" },
];

const BrowseCategories = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Heading */}
      <div className="flex justify-center items-center">
        <h1 className="text-xl mt-10 sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1D2026] leading-tight">
          Browse top category
        </h1>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {categories.map((category, index) => (
          <div key={index} className={`flex items-center p-2 hover:shadow-lg ${category.bg}`}>
            <img src={category.icon} alt={category.name} className="w-10 h-10 m-2" />
            <div>
              <h2 className="text-sm font-semibold text-[#1D2026]">{category.name}</h2>
              <p className="text-gray-500 text-sm">{category.courses}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Browse All Link */}
      <div className="text-center m-10">
        <p className="text-gray-500">
          We have more categories & subcategories.{" "}
          <span className="text-red-500 font-semibold cursor-pointer">Browse All →</span>
        </p>
      </div>
    </div>
  );
};

export default BrowseCategories;
