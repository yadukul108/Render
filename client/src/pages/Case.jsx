import React from 'react'
import HomeIb from "../assets/HomeIB.jpg"
import Footer from '../components/Footer'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import {useRef} from "react"
import { Link } from 'react-router-dom';

const Case = () => {
  const caseStudies = [
    {
      _id: '1',
      image: HomeIb,
      title: 'Acquisition of XYZ Corp',
      sector: 'Technology',
      year: '2023',
      description: 'A strategic acquisition aimed at expanding market reach and technological capabilities.Provided financial restructuring and advisory support leading to 40% YoY growth.',
    },
    {
      _id: '2',
      image: HomeIb,
      title: 'Growth Advisory for ABC Ltd',
      sector: 'Healthcare',
      year: '2024',
      description: 'Provided financial restructuring and advisory support leading to 40% YoY growth.A strategic acquisition aimed at expanding market reach and technological capabilities.',
    },
    {
      _id: '1',
      image: HomeIb,
      title: 'Acquisition of XYZ Corp',
      sector: 'Technology',
      year: '2023',
      description: 'A strategic acquisition aimed at expanding market reach and technological capabilities.Provided financial restructuring and advisory support leading to 40% YoY growth.',
    },
    {
      _id: '2',
      image: HomeIb,
      title: 'Growth Advisory for ABC Ltd',
      sector: 'Healthcare',
      year: '2024',
      description: 'Provided financial restructuring and advisory support leading to 40% YoY growth.A strategic acquisition aimed at expanding market reach and technological capabilities.',
    },
  ];
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className='bg-slate-100'>
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] md:h-screen">
        <img
          src={HomeIb}
          alt="Case Studies Background"
          className="absolute inset-0 w-full h-full object-cover grey-tone"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl md:text-6xl font-medium tracking-wide">Allegro Advisors</h1>
          <p className="text-xl md:text-3xl font-medium mt-2">Case Studies</p>
        </div>
      </div>

      {/* Case Studies Grid */}
        <section className="px-4 md:px-12 py-12 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-medium text-center mb-10 text-slate-800">
        Case Studies
      </h2>

      <div className="relative max-w-5xl mx-auto">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          onInit={(swiper) => {
            // Link custom buttons to swiper instance
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {caseStudies.map((study) => (
            <SwiperSlide key={study._id}>
              <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-xl overflow-hidden">
                {/* Left Text Content */}
               <div className="w-full md:w-1/2 p-6 flex flex-col justify-between ">
  <div>
    <h3 className="text-2xl font-medium text-slate-800 mb-2">{study.title}</h3>
    <p className="text-sm text-gray-600 mb-1">
      <span className="font-medium">Sector:</span> {study.sector}
    </p>
    <p className="text-sm text-gray-600 mb-4">
      <span className="font-medium">Year:</span> {study.year}
    </p>
    <p className="text-gray-700">{study.description}</p>
  </div>
  
  <Link to="/" className="mt-4">
    <button className="bg-red-500 text-white w-[8rem] rounded-xl py-1 cursor-pointer hover:bg-red-600 transition">
      Learn More
    </button>
  </Link>
</div>


                {/* Right Image */}
                <div className="w-full md:w-1/2 h-64 md:h-auto">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover grey-tone"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="flex justify-center mt-6 gap-6">
          <button
            ref={prevRef}
            className="px-6 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-900 transition"
          >
            Prev
          </button>
          <button
            ref={nextRef}
            className="px-6 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-900 transition"
          >
            Next
          </button>
        </div>
      </div>
    </section>
          <Footer />
    </div>
  );
};

export default Case;
