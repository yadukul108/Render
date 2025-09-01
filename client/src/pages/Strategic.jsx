import React from 'react'
import HomeIb from "../assets/office3.jpg";
import { Link } from 'react-router-dom';
import CaseStudies from '../components/CaseStudy';
import Footer from "../components/Footer"
import TransactionCarousal from "../components/TransactionCarousal"
const Strategic = () => {
   
  return (
    <div className=''>
     <div className="relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/70 to-red-900/60 z-2"></div>
  <img
    src={HomeIb}
    alt="About Us"
    className="object-cover w-full h-[42rem] md:h-[40rem] filter brightness-75"
  />
  <div className="absolute inset-0 z-3 flex items-center">
  <div className="container mx-auto px-3 md:px-8">
    <div className="max-w-4xl">
      {/* Label */}
      <div className="mb-4">
        <div className="inline-block bg-slate-600/20 backdrop-blur-sm border border-red-400/30 rounded-full px-4 py-2 mb-6">
          <span className="text-white text-sm font-medium tracking-wide">WELCOME TO ALLEGRO CAPITAL</span>
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight">
        Trusted In
        <span className="block text-red-400 font-medium">Strategic Advisory</span>
      </h1>

      {/* Subtext */}
      <p className="text-slate-200 text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed font-light">
       Allegro Capital delivers strategic insights and guidance to help businesses navigate growth, transformation, and critical decisions with clarity and impact
      </p>

      <p className="mt-4 text-slate-300 text-sm md:text-base font-light max-w-2xl">
        Guiding clients with integrity and expertise since 2002.
      </p>
    </div>
  </div>
</div>

</div>

    <div className="w-full md:w-2/3 max-w-5xl mx-auto px-4 py-12">
  <h2 className="text-[1.4rem] md:text-3xl font-medium text-slate-700 mb-6 text-center">
    Strategic Advisory at Allegro Capital
  </h2>
  <div className="text-gray-600 text-base md:text-lg space-y-5">
    <p>
      At Allegro Capital, our Strategic Advisory services are designed to empower clients with long-term vision and actionable insights. We work closely with business leaders to address critical challenges, identify growth opportunities, and align strategies with evolving market dynamics.
    </p>
    <p>
      Our approach combines deep industry knowledge, analytical rigor, and an understanding of global trends to guide clients through pivotal decisions — from organizational restructuring and capital allocation to strategic partnerships and market entry.
    </p>
    <p>
      We collaborate with promoters, boards, and CXOs to develop and refine strategies that drive sustainable value creation. Whether navigating periods of transformation or positioning for future growth, our focus remains on delivering clarity, direction, and measurable impact.
    </p>
    <p>
      With a proven track record in advising on complex, high-stakes situations, Allegro Capital acts as a trusted partner, offering unbiased counsel and tailored solutions that align with each client’s unique goals and circumstances.
    </p>
  </div>
</div>

   <div className="w-full max-w-7xl mx-auto text-center px-4 py-12 text-slate-600">
     <h2 className="text-3xl md:text-4xl font-medium text-center text-slate-700 mb-2">Our Transactions</h2>
      <p className="mb-12 md:mb-20 md:w-2/3 md:text-lg mx-auto">Each deal reflects our role as trusted strategic advisors, combining insight, foresight, and flawless execution</p>
      {/* Cards */}
      <TransactionCarousal source="strategy"/>

      {/* View More Button */}
     <div className="mt-10 flex justify-center">
  <Link
    to="/transactions"
          className="bg-red-500 text-white border px-4 py-2 rounded-xl hover:bg-white  hover:text-red-700 transition"
  >
    View All Transaction
  </Link>
</div>
    </div>
    <CaseStudies source="strategy"/>
    <div className=" mb-4 md:mb-12 flex justify-center">
  <Link
    to="/case_study"
          className="bg-red-500 text-white border px-4 py-2 rounded-xl hover:bg-white  hover:text-red-700 transition"
  >
    View All Case Studies
  </Link>
</div>
    <Footer/>
    </div>
  )
}

export default Strategic
