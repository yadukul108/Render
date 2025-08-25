import React from 'react';
import HomeIB from "../assets/office4.jpg"
import User from "../assets/User.jpg"
import Footer from '../components/Footer';
import Timeline from '../components/Timeline';


const About = () => {
  return (
    <div className="font-sans pt-[3rem] ">
      {/* Header Section */}
     <div className="relative overflow-hidden">
       <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/70 to-red-900/60 z-2"></div>
        <img
          src={HomeIB}
          alt="About Us"
          className="object-cover w-full h-[40rem] md:h-[40rem] filter brightness-75"
        />
        
        {/* Hero Content */}
        <div className="absolute inset-0 z-3 flex pt-20">
          <div className="container mx-auto px-3 md:px-8">
            <div className="max-w-4xl">
              <div className="mb-4">
                <div className="inline-block bg-slate-600/20 backdrop-blur-sm border border-red-400/30 rounded-full px-4 py-2 mb-6">
                  <span className="text-white text-sm font-medium tracking-wide">ABOUT ALLEGRO CAPITAL</span>
                </div>
              </div>
              
              <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight">
                Empowering Your
                <span className="block text-red-400 font-medium">Financial Future</span>
              </h1>
              
              <p className="text-slate-200 text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed font-light">
                At Allegro Capital, we are dedicated to providing comprehensive financial planning 
                and investment management services tailored to meet the unique needs of our clients.
              </p>
              
              
            </div>
          </div>
        </div>
      </div>

      

      {/* Our Story */}
      <div className=" py-12 px-4">
        <h2 className="text-3xl text-center font-md text-slate-700 mb-6">Our Story</h2>
        <h1 className="max-w-3xl mx-auto md:text-xl text-center text-gray-700 mb-10">
          Allegro Capital began with a vision to empower individuals and businesses through expert financial guidance. Over the years, we have grown into a trusted partner for clients across sectors, building lasting relationships based on integrity, transparency, and results.
        </h1>

        {/* Timeline */}
       <Timeline/>

      </div>
      <Footer/>
    </div>
  );
};

export default About;
