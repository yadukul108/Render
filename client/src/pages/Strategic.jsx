import React from 'react'
import HomeIb from "../assets/office3.jpg";
import BBL from "../assets/Manipal (1).png";
import MAGE from "../assets/Manipal (2).png";
import Mage from "../assets/Manipal (3).png"
import { Link } from 'react-router-dom';
import CaseStudies from '../components/CaseStudy';
import Footer from "../components/Footer"
import TransactionCarousal from "../components/TransactionCarousal"
const Strategic = () => {
   
  return (
    <div className=''>
      <div className="relative w-full h-screen">
  <img
    src={HomeIb}
    alt="Newsletter Background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Glassmorphism Text Container */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="bg-white/10 backdrop-blur-sm px-8 py-6 rounded-xl border border-white/10 text-white text-center">
      <h1 className="text-4xl md:text-6xl font-medium tracking-wide">Allegro Capital</h1>
      <p className="text-2xl md:text-3xl font-medium mt-2">Strategic Advisory</p>
    </div>
  </div>
</div>

    <div className="w-full md:w-2/3 max-w-5xl mx-auto px-4 py-12">
  <h2 className="text-3xl font-medium text-slate-800 mb-6 text-center">
    Strategic Advisory at Allegro Advisors
  </h2>
  <div className="text-gray-600 text-base md:text-lg space-y-5">
    <p>
      At Allegro Advisors, our Strategic Advisory services are designed to empower clients with long-term vision and actionable insights. We work closely with business leaders to address critical challenges, identify growth opportunities, and align strategies with evolving market dynamics.
    </p>
    <p>
      Our approach combines deep industry knowledge, analytical rigor, and an understanding of global trends to guide clients through pivotal decisions — from organizational restructuring and capital allocation to strategic partnerships and market entry.
    </p>
    <p>
      We collaborate with promoters, boards, and CXOs to develop and refine strategies that drive sustainable value creation. Whether navigating periods of transformation or positioning for future growth, our focus remains on delivering clarity, direction, and measurable impact.
    </p>
    <p>
      With a proven track record in advising on complex, high-stakes situations, Allegro Advisors acts as a trusted partner, offering unbiased counsel and tailored solutions that align with each client’s unique goals and circumstances.
    </p>
  </div>
</div>

   <div className="w-full max-w-7xl mx-auto px-4 py-12 text-slate-600">
      <h2 className="text-3xl font-medium text-center text-slate-800 mb-10">Transactions</h2>

      {/* Cards */}
      <TransactionCarousal/>

      {/* View More Button */}
     <div className="mt-10 flex justify-center">
  <Link
    to="/transactions"
          className="bg-white text-red-600 border border-red-600 px-4 py-2 rounded-xl hover:bg-red-600  hover:text-white transition"
  >
    View More
  </Link>
</div>
    </div>
    <CaseStudies/>
    <Footer/>
    </div>
  )
}

export default Strategic
