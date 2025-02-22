import React from "react";
import instructor from "/assets/instructore.png";
import devon from "/assets/instructors/devon.png";
import darrell from "/assets/instructors/darrell.png";
import jane from "/assets/instructors/jane.png";
import albert from "/assets/instructors/albert.png";
import kathryn from "/assets/instructors/kathryn.png";
import { Star } from "lucide-react";

const instructors = [
  { id: 1, image: devon, name: "Devon Lane", title: "Senior Developer", rating: 4.6, students: "854 students" },
  { id: 2, image: darrell, name: "Darrell Steward", title: "Digital Product Designer", rating: 4.9, students: "451,444 students" },
  { id: 3, image: jane, name: "Jane Cooper", title: "UI/UX Designer", rating: 4.8, students: "435,671 students" },
  { id: 4, image: albert, name: "Albert Flores", title: "Adobe Instructor", rating: 4.7, students: "511,123 students" },
  { id: 5, image: kathryn, name: "Kathryn Murphy", title: "Lead Developer", rating: 4.2, students: "2,711 students" },
];

const BecomeInstructor = () => {
  return (
    <section className="bg-[#F5F7FA] px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Instructor Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-12">
          <div className="bg-[#FF5A3C] p-6 rounded-lg flex items-center">
            <div className="w-2/3 text-white">
              <h2 className="text-2xl font-bold mb-2">Become an instructor</h2>
              <p className="text-sm">Instructors from around the world teach millions of students online.</p>
              <button className="mt-4 px-4 py-2 bg-white text-[#FF5A3C] font-semibold rounded-md">Start Teaching →</button>
            </div>
            <img src={instructor} alt="Instructor" className="w-1/3 h-32 object-cover rounded-lg" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Your teaching & earning steps</h2>
            <ul className="space-y-2">
              <li className="flex items-center"><span className="w-6 h-6 flex items-center justify-center bg-blue-200 text-blue-600 font-bold rounded-full">1</span><span className="ml-2">Apply to become instructor</span></li>
              <li className="flex items-center"><span className="w-6 h-6 flex items-center justify-center bg-red-200 text-red-600 font-bold rounded-full">2</span><span className="ml-2">Build & edit your profile</span></li>
              <li className="flex items-center"><span className="w-6 h-6 flex items-center justify-center bg-orange-200 text-orange-600 font-bold rounded-full">3</span><span className="ml-2">Create your new course</span></li>
              <li className="flex items-center"><span className="w-6 h-6 flex items-center justify-center bg-green-200 text-green-600 font-bold rounded-full">4</span><span className="ml-2">Start teaching & earning</span></li>
            </ul>
          </div>
        </div>

        {/* Top Instructors */}
        <h2 className="text-2xl font-bold text-center mb-8">Top instructor of the month</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {instructors.map((instructor) => (
            <div key={instructor.id} className="bg-white overflow-hidden text-center p-4 rounded-lg shadow-md">
              <img src={instructor.image} alt={instructor.name} className="w-full h-44 object-cover rounded-md" />
              <h3 className="text-lg font-semibold mt-2">{instructor.name}</h3>
              <p className="text-gray-500 text-xs">{instructor.title}</p>
              <div className="flex justify-center items-center text-gray-600 mt-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="ml-1 font-semibold">{instructor.rating}</span>
                <span className="text-gray-400 text-xs ml-2">{instructor.students}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <p className="text-gray-500 text-sm text-center mt-8">
          Thousands of students waiting for an instructor. Start teaching & earning now!{' '}
          <span className="text-red-500 font-medium cursor-pointer">Become Instructor →</span>
        </p>
      </div>
    </section>
  );
};

export default BecomeInstructor;
