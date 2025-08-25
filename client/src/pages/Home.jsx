
import HomeIB from "../assets/office4.jpg"
import {Link} from "react-router-dom"
import Cards from '../components/Cards'
import ServicesCards from '../components/ServicesCards'
import Awards from '../components/Awards'
import Stats from '../components/Stats'
import Footer from '../components/Footer'
import React, { useRef } from 'react';
import { motion } from "framer-motion";
 
const Home = () => {
  const serviceRef = useRef(null);


  return (
   <div className="relative w-full pt-[3rem] h-[500px] " >
      {/* Background Image */}
      <div className="relative h-[85vh] md:h-[90vh] lg:h-[95vh]">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/70 to-red-900/60 z-2"></div>
          <img
            src={HomeIB}
            alt="Investment Banking"
            className="w-full h-full object-cover filter brightness-75"
          />
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 z-3 pt-[8rem] flex items-center">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl lg:max-w-5xl animate-fade-in-up">
             
              {/* Main Heading */}
              <h1 className="text-white text-3xl md:text-5xl lg:text-7xl font-light mb-6 leading-tight animate-fade-in-up animation-delay-200">
                An Independent
                <span className="block text-red-400 font-medium">
                  Full-Service Investment Bank
                </span>
              </h1>

              {/* Description */}
              <p className="text-slate-200 text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed font-light mb-8 animate-fade-in-up animation-delay-400">
                Allegro Capital is a leading healthcare investment bank in India, providing 
                comprehensive financial solutions to meet the diverse needs of our clients.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
                <button
                  onClick={() => serviceRef.current?.scrollIntoView({ behavior: 'smooth' })}
                  className="group bg-red-600 hover:bg-red-700 text-white px-8 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center justify-center gap-2">
                    Our Services
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>

                <Link
                  to="/contact-us"
                  className="group border-2 border-white/30 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/50 px-8 py-2 rounded-lg font-medium transition-all duration-300 text-center"
                >
                  <span className="flex items-center justify-center gap-2">
                    Contact Us
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      <Cards/>
       
      
     <Stats/>
     
 <div ref={serviceRef} className="">
  <ServicesCards />
</div>
  <Awards/>
 <Footer/>
    </div>
  )
}

export default Home
