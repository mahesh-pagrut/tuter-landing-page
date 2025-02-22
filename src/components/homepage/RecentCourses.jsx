import React from "react";
import { Star, User, Clock } from "lucide-react";
import course3 from "/assets/topCourses/course3.png";
import course4 from "/assets/topCourses/course4.png";
import course7 from "/assets/topCourses/course7.png";

const courses = [
  {
    id: 1,
    image: course3,
    category: "DESIGN",
    title: "The Python Mega Course: Build 10 Real World Applications",
    price: "$57",
    rating: "5.0",
    students: "265.7K students",
  },
  {
    id: 2,
    image: course4,
    category: "IT & SOFTWARE",
    title: "Facebook Ads & Facebook Marketing MASTERY 2021 Course",
    price: "$57",
    rating: "5.0",
    students: "265.7K students",
  },
  {
    id: 3,
    image: course7,
    category: "DEVELOPMENTS",
    title: "2021 Complete Python Bootcamp From Zero to Hero in Python",
    price: "$57",
    rating: "5.0",
    students: "265.7K students",
  },
];

const RecentCourses = () => {
  return (
    <div className="container mx-auto px-6 my-12 ">
      <h2 className="text-3xl font-bold text-center mb-8">Recently Added Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
        {/* Left Section - Three Courses */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6 my-auto">
          {courses.map((course) => (
            <div key={course.id} className="bg-white shadow-lg overflow-hidden">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <span className="text-xs font-semibold bg-gray-200 px-2 py-1 rounded">{course.category}</span>
                <h3 className="text-xs font-semibold mt-2">{course.title}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-orange-500 font-bold">{course.price}</span>
                  <div className="flex items-center gap-1 text-gray-600 text-xs">
                    <Star className="text-yellow-500" size={14} /> {course.rating}
                    <User size={14} /> {course.students}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section - Bigger Course Details Card */}
        <div className="md:col-span-2 bg-white shadow-lg rounded-lg p-6">
          <span className="text-xs font-semibold bg-blue-200 px-2 py-1 rounded">DEVELOPMENTS</span>
          <h3 className="text-xl font-semibold mt-2">2021 Complete Python Bootcamp From Zero to Hero in Python</h3>
          <p className="text-sm text-gray-500 mt-2">Course by Kevin Gilbert</p>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-1 text-gray-600 text-sm">
              <Star className="text-yellow-500" size={14} /> 5.0 (357,914)
            </div>
            <div className="flex items-center gap-1 text-gray-600 text-sm">
              <User size={14} /> 265.7K students
            </div>
            <div className="flex items-center gap-1 text-gray-600 text-sm">
              <Clock size={14} /> 6 hours
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-xl font-bold">$14.00</span>
            <span className="text-gray-400 line-through">$26.00</span>
            <span className="text-red-500 bg-red-100 px-2 py-1 text-xs rounded">56% OFF</span>
          </div>
          <h4 className="text-lg font-semibold mt-4">What You’ll Learn</h4>
          <ul className="list-disc pl-4 text-sm text-gray-600 mt-2">
            <li>Learn Python professionally, including Python 2 & 3</li>
            <li>Create games with Python, like Tic Tac Toe & Blackjack</li>
          </ul>
          <button className="w-full mt-6 bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600">
            Add to Cart
          </button>
          <button className="w-full mt-2 bg-gray-200 py-2 rounded-lg font-semibold text-gray-800 hover:bg-gray-300">
            Course Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentCourses;
