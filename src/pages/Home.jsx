import React from 'react'
import HeaderImage from '../assets/coach-by-whiteboard.png'
import BrowseCategories from '../components/homepage/Categories'
import TopCourses from '../components/homepage/TopCourse'


export default function Home() {
  return (
    <div>
        <header className='flex flex-row items-center justify-between gap-4 w-full pl-40'>
            {/* left side */}
            <div className='max-w-md text-left'>
                <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1D2026] leading-tight'>
                    Learn with expert <br/>anytime anywhere
                </h1>
                <p className='text-[#4E5566] mt-3 text-sm sm:text-base md:text-lg leading-relaxed'>
                    Our mission is to help people to find the best course <br/> online and learn with experts anytime, anywhere.
                </p>
                <button className="bg-[#FF6636] text-white px-3 py-2 mt-4 text-sm sm:text-base md:text-lg ">
                    Create Account
                </button>
            </div>
            {/* right side */}
            <div>
                <img
                    src={HeaderImage} 
                    alt="Coach by Whiteboard" 
                    className="w-[180px] sm:w-[280px] md:w-[480px] lg:w-[580px] h-auto object-cover transition-all duration-300"
                />
            </div>
        </header>


        {/* brows top category */}

        {/* <div className='px-36'>
        <BrowseCategories/>
        </div>

        <div className='px-36'>
        <TopCourses/>
        </div> */}
    </div>
  )
}
