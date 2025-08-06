
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
      <img
        src={HomeIB}
        alt="Banner"
        className="w-full h-[38rem] object-cover rounded-md grey-tone"
      />

      {/* Top-Left Text */}
     <div className="absolute top-[5rem] left-6 text-white">
  <h2 className="text-2xl md:text-4xl font-medium drop-shadow-md">
    An Independent Full-Service Investment Bank
  </h2>
  <p className="text-base md:text-lg mt-1 drop-shadow-md w-auto md:w-[50rem]">
    Allegro Capital is a leading healthcare investment bank in India, providing comprehensive financial solutions to meet the diverse needs of our clients.
  </p>
</div>


      {/* Bottom-Center Buttons */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-4 text-center w-max">
      <button
  onClick={() => serviceRef.current?.scrollIntoView({ behavior: 'smooth' })}
  className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-white hover:text-red-700 transition"
>
  Our Services
</button>

        <Link
          to="/contact-us"
          className="bg-white text-red-600 border border-red-600 px-4 py-2 rounded-xl hover:bg-red-600  hover:text-white transition"
        >
          Contact Us
        </Link>
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
