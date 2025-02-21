import React from "react";

// Import images from the assets folder
import Course1 from "/assets/topCourses/course1.png";
import Course2 from "/assets/topCourses/course2.png";
import Course3 from "/assets/topCourses/course3.png";
import Course4 from "/assets/topCourses/course4.png";
import Course5 from "/assets/topCourses/course5.png";
import Course6 from "/assets/topCourses/course6.png";
import Course7 from "/assets/topCourses/course7.png";
import Course8 from "/assets/topCourses/course8.png";
import Course9 from "/assets/topCourses/course9.png";
import Course10 from "/assets/topCourses/course10.png";

const courses = [
  { id: 1, category: "Music", title: "Musician: Learn the Basics & Portfolio in 2 Weeks", price: "$97", rating: "4.8", students: "250K", image: Course1, bg: "bg-purple-100" },
  { id: 2, category: "Business", title: "The Complete 2023 Web Developer Bootcamp", price: "$97", rating: "4.7", students: "280K", image: Course2, bg: "bg-violet-100" },
  { id: 3, category: "Design", title: "Learn Python Programming Masterclass", price: "$97", rating: "4.9", students: "200K", image: Course3, bg: "bg-purple-100" },
  { id: 4, category: "Marketing", title: "The Digital Marketing Course - 12 Courses in 1", price: "$97", rating: "4.6", students: "240K", image: Course4, bg: "bg-red-100" },
  { id: 5, category: "Freelancing", title: "Build, Launch, and Maintain Teacher Program", price: "$97", rating: "4.7", students: "260K", image: Course5, bg: "bg-blue-100" },
  { id: 6, category: "Web Development", title: "The Complete Frontend Web Development Course", price: "$97", rating: "4.8", students: "265K", image: Course6, bg: "bg-yellow-100" },
  { id: 7, category: "Programming", title: "The Python Mega Course: Build 10 Apps", price: "$97", rating: "4.9", students: "255K", image: Course7, bg: "bg-purple-100" },
  { id: 8, category: "Copywriting", title: "Copywriting - Become a Copywriting Expert", price: "$97", rating: "4.6", students: "250K", image: Course8, bg: "bg-orange-100" },
  { id: 9, category: "Data Science", title: "Google Analytics Certification - Get Certified!", price: "$97", rating: "4.7", students: "265K", image: Course9, bg: "bg-green-100" },
  { id: 10, category: "Photography", title: "The Ultimate Photography Masterclass", price: "$97", rating: "4.8", students: "245K", image: Course10, bg: "bg-purple-100" },
];

const TopCourses = () => {
  return (
    <div className="container mx-auto px-4 py-10 bg-[#F5F7FA]">
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-[#1D2026]">
        Best Selling Courses
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-lg overflow-hidden transition-transform duration-300 hover:scale-102"
          >
            <img src={course.image} alt={course.title} className="w-full h-32 object-cover" />
            <div className="p-2">
              {/* Course Category on Left, Price on Right */}
              <div className="flex justify-between items-center">
                <span className={`text-xs font-semibold px-3 py-1 ${course.bg}`}>{course.category}</span>
                <span className="text-red-500 font-bold text-sm">{course.price}</span>
              </div>
              
              <h3 className="text-xs md:text-xs font-semibold text-[#1D2026] mt-2 leading-tight">{course.title}</h3>
              
            </div>
              {/* Course Rating on Left, Students on Right */}
              <div className="flex justify-between items-center p-2 text-xs text-gray-500 border-t border-gray-200 pt-2">
                <span className="text-gray-600">⭐ {course.rating}</span>
                <span>{course.students} students</span>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCourses;
