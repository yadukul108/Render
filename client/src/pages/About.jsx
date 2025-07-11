import React from 'react';
import HomeIB from "../assets/HomeIB.jpg"
import User from "../assets/User.jpg"
import Footer from '../components/Footer';
import Timeline from '../components/Timeline';


const About = () => {
  return (
    <div className="font-sans pt-[3rem]">
      {/* Header Section */}
      <div className="">
        <img
          src={HomeIB}
          alt="About Us"
          className=" object-cover grey-tone w-full h-[34rem]"
        />
        <div className="absolute inset-0 pt-[5rem] w-auto md:w-[42rem] ml-8 items-center justify-center">
          <h1 className="text-white text-2xl md:text-4xl font-medium"> About Us</h1>
          <p className="text-white text-base md:text-lg">
          At Allegro Advisors, we are dedicated to providing comprehensive financial planning and investment management services tailored to meet the unique needs of our clients. Our team of experienced professionals is committed to helping you achieve your financial goals through personalized strategies and a client-centric approach.
        </p>
        </div>
        {/* Intro Paragraph */}
      
      </div>

      

      {/* Our Story */}
      <div className="bg-gray-100 py-12 px-4">
        <h2 className="text-2xl md:text-3xl text-center font-md text-slate-700 mb-6">Our Story</h2>
        <p className="max-w-3xl mx-auto text-base text-center text-gray-700 mb-10">
          Allegro Advisors began with a vision to empower individuals and businesses through expert financial guidance. Over the years, we have grown into a trusted partner for clients across sectors, building lasting relationships based on integrity, transparency, and results.
        </p>

        {/* Timeline */}
       <Timeline/>

      </div>
      <Footer/>
    </div>
  );
};

export default About;
