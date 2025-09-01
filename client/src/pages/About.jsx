import React from 'react';
import HomeIB from "../assets/office4.jpg"
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
        <h2 className="text-3xl md:text-4xl text-center font-medium text-slate-700 mb-6">Our Story</h2>
        <p className=" md:text-2xl text-center font-light text-slate-700 leading-relaxed max-w-3xl mx-auto">
            Allegro Capital began with a <span className="font-semibold text-red-600">bold vision</span> to revolutionize financial advisory services through innovation, expertise, and unwavering commitment to client success.
          </p>

<div className="mb-8">
         
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="group text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-red-500 to-red-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Integrity</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Building trust through transparent practices and ethical financial guidance</p>
            </div>
            
            <div className="group text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-red-500 to-red-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Pioneering cutting-edge solutions for complex financial challenges</p>
            </div>
            
            <div className="group text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-red-500 to-red-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Partnership</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Creating lasting relationships built on mutual success and shared growth</p>
            </div>
          </div>
          <div className="mt-16 p-8 bg-white rounded-3xl shadow-xl border border-gray-100 max-w-4xl text-center mx-auto">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
              "Over the years, we have evolved from a startup with ambitious dreams into a 
              <span className="font-semibold text-slate-800"> trusted financial partner</span> for clients across diverse sectors. 
              Our journey is defined by strategic growth, innovative solutions, and an unwavering commitment to delivering 
              <span className="font-semibold text-slate-800">measurable results</span> that exceed expectations."
            </p>
            
            <div className="flex items-center justify-center mt-6 ">
              <div className="text-center">
                <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-red-700 mx-auto mb-2"></div>
                <p className="text-sm font-medium text-slate-600">Leadership Team</p>
                <p className="text-xs text-gray-500">Allegro Capital</p>
              </div>
            </div>
          </div>
</div>
        {/* Timeline */}
       <Timeline/>

      </div>
      <Footer/>
    </div>
  );
};

export default About;
