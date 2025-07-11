import React from 'react'
import HomeIb from "../assets/HomeIB.jpg";
import BBL from "../assets/Manipal (1).png";
import MAGE from "../assets/Manipal (2).png";
import Mage from "../assets/Manipal (3).png"
import { Link } from 'react-router-dom';
import CaseStudies from '../components/CaseStudy';
import Footer from "../components/Footer"
const Strategic = () => {
    const transactions = [
  {
    title: "Acquisition of Medix Ltd.",
    amount: "$120M",
    year: "2024",
    type: "M&A",
    image: BBL, // Replace with actual image
  },
  {
    title: "Series B Funding – Healtech",
    amount: "$45M",
    year: "2023",
    type: "Equity",
     image: Mage,
  },
  {
    title: "Debt Advisory for PharmaCorp",
    amount: "$80M",
    year: "2022",
    type: "Debt",
     image: MAGE,
  },
];
  return (
    <div className='bg-slate-100'>
      <div className="relative w-full h-screen ">
        <img
          src={HomeIb} 
          alt="Newsletter Background"
          className="absolute inset-0 w-full h-full object-cover grey-tone"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl md:text-6xl font-medium tracking-wide">Allegro Advisors</h1>
          <p className="text-3xl md:text-3xl font-medium mt-2">Strategic Advisory</p>
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
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
        {transactions.map((txn) => (
          <Link
            to={`/transaction/${txn.id}`}
            key={txn.id}
            className="bg-white rounded-lg shadow p-4 w-80 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={txn.image}
              alt="Transaction"
              className="w-[14rem] h-[19rem] object-cover rounded mx-auto"
            />
            <h3 className="text-lg font-semibold text-slate-700 mt-3">Amount: {txn.amount}</h3>
            <hr className="my-2 border-slate-700 w-3/4 mx-auto" />
            <p className="text-sm text-slate-700">Type: {txn.type}</p>
            <p className="text-sm text-slate-700">Year: {txn.year}</p>
          </Link>
        ))}
      </div>

      {/* View More Button */}
     <div className="mt-10 flex justify-center">
  <Link
    to="/transactions"
    className="text-white  font-semibold px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 transition duration-300 shadow-md"
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
