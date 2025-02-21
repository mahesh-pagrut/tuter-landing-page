import React from "react";

import courseImage1 from "/assets/topCourses/course4.png";
import courseImage2 from "/assets/topCourses/course5.png";
import courseImage3 from "/assets/topCourses/course9.png";
import courseImage4 from "/assets/topCourses/course7.png";

const courses = [
  {
    id: 1,
    image: courseImage1,
    category: "Health & Fitness",
    title: "Investing In Stocks The Complete Course!",
    instructor: "Kevin Gilbert",
    price: "$14.00",
    oldPrice: "$26.00",
    rating: "5.0 (357,914)",
    students: "265.7K students",
    level: "Beginner",
    duration: "6 hours",
  },
  {
    id: 2,
    image: courseImage2,
    category: "Personal Development",
    title: "Google Analytics Certification - Learn How To...",
    instructor: "Kevin Gilbert",
    price: "$14.00",
    oldPrice: "$26.00",
    rating: "5.0 (357,914)",
    students: "265.7K students",
    level: "Beginner",
    duration: "6 hours",
  },
  {
    id: 3,
    image: courseImage3,
    category: "Productivity",
    title: "Adobe XD for Web Design: Essential Principles",
    instructor: "Kevin Gilbert",
    price: "$14.00",
    oldPrice: "$26.00",
    rating: "5.0 (357,914)",
    students: "265.7K students",
    level: "Beginner",
    duration: "6 hours",
  },
  {
    id: 4,
    image: courseImage4,
    category: "Music",
    title: "The Python Mega Course: Build 10 Real World...",
    instructor: "Kevin Gilbert",
    price: "$14.00",
    oldPrice: "$26.00",
    rating: "5.0 (357,914)",
    students: "265.7K students",
    level: "Beginner",
    duration: "6 hours",
  },
];

const FeaturedCourses = () => {
  return (
    <section className="px-10 py-10 bg-white">
      <h2 className="text-2xl font-bold mb-6">Our Feature Courses</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="flex bg-white shadow-lg overflow-hidden">
            <img src={course.image} alt={course.title} className="w-1/3 object-cover" />
            <div className="p-4 flex-1">
              <div className="flex gap-2 ">
              <span className="text-sm bg-green-200 text-green-800 px-2 py-1 rounded">{course.category}</span>
                <span className="text-red-500 font-bold">{course.price}</span>
                <span className="text-gray-400 line-through">{course.oldPrice}</span>
              </div>
              <h3 className="text-lg font-semibold mt-2">{course.title}</h3>
              <p className="text-gray-500 text-sm">{course.instructor}</p>
              <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                <span>⭐ {course.rating}</span>
                <span>{course.students}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600 mt-2">
                <span>{course.level}</span>
                <span>{course.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCourses;
