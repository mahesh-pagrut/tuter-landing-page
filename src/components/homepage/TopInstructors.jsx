import React from "react";


import devon from "/assets/instructors/devon.png";
import darrell from "/assets/instructors/darrell.png";
import jane from "/assets/instructors/jane.png";
import albert from "/assets/instructors/albert.png";
import kathryn from "/assets/instructors/kathryn.png";
import { Star } from "lucide-react"; // Using lucide-react for the star icon

const instructors = [
  {
    id: 1,
    image: devon,
    name: "Devon Lane",
    title: "Senior Developer",
    rating: 4.6,
    students: "854 students",
  },
  {
    id: 2,
    image: darrell,
    name: "Darrell Steward",
    title: "Digital Product Designer",
    rating: 4.9,
    students: "451,444 students",
  },
  {
    id: 3,
    image: jane,
    name: "Jane Cooper",
    title: "UI/UX Designer",
    rating: 4.8,
    students: "435,671 students",
  },
  {
    id: 4,
    image: albert,
    name: "Albert Flores",
    title: "Adobe Instructor",
    rating: 4.7,
    students: "511,123 students",
  },
  {
    id: 5,
    image: kathryn,
    name: "Kathryn Murphy",
    title: "Lead Developer",
    rating: 4.2,
    students: "2,711 students",
  },
];

const TopInstructors = () => {
  return (
    <section className="bg-[#FFFFFF] border border-[#E9EAF0] px-8 py-4">

      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8">Top instructor of the month</h2>

        {/* Instructors List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ">
          {instructors.map((instructor) => (
            <div key={instructor.id} className="bg-white overflow-hidden text-center border border-[#E9EAF0]">
              <img src={instructor.image} alt={instructor.name} className="w-full h-58 object-cover" />
              <div className="p-2">
                <h3 className="text-lg font-semibold">{instructor.name}</h3>
                <p className="text-gray-500 text-xs">{instructor.title}</p>
                <div className="flex justify-center items-center border border-[#E9EAF0] text-gray-600 mt-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="ml-1 font-semibold">{instructor.rating}</span>
                  <span className="text-gray-400 text-xs ml-2">{instructor.students}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <p className="text-gray-500 text-sm mt-8">
          Thousands of students waiting for an instructor. Start teaching & earning now!{" "}
          <span className="text-red-500 font-medium cursor-pointer">Become Instructor →</span>
        </p>
      </div>
    </section>
  );
};

export default TopInstructors;
