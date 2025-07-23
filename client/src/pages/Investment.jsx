import React from 'react'
import HomeIb from "../assets/HomeIB.jpg";
import BBL from "../assets/Manipal (1).png";
import MAGE from "../assets/Manipal (2).png";
import Mage from "../assets/Manipal (3).png"
import { Link } from 'react-router-dom';
import CaseStudies from '../components/CaseStudy';
import Footer from "../components/Footer"
const Investment = () => {
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
    <div className=''>
      <div className="relative w-full h-[500px] md:h-screen ">
        <img
          src={HomeIb} 
          alt="Newsletter Background"
          className="absolute inset-0 w-full  h-[34rem] md:h-full object-cover grey-tone"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-3xl md:text-6xl font-medium tracking-wide">Allegro Advisors</h1>
          <p className="text-2xl md:text-3xl font-medium mt-2">Investment Banking</p>
        </div>
      </div>
     <div className=" w-full md:w-2/3 max-w-5xl mx-auto px-4  py-15 md:py-12 ">
      <h2 className="text-2xl md:text-3xl font-medium text-slate-800 mb-6 text-center">
        Investment Banking at Allegro Advisors
      </h2>
      <div className="text-gray-600 text-base md:text-lg space-y-5">
        <p>
          Investment Banking has been a cornerstone of Allegro Advisors since its inception. With deep sector knowledge, a collaborative mindset, global insights, and a results-oriented approach, we offer solutions that deliver value for all stakeholders involved.
        </p>
        <p>
          Our team seamlessly supports clients across a range of industries and geographies, drawing on extensive market experience and strong investor relationships. Whether navigating growth strategies or complex transactions, we ensure precision and efficiency at every stage.
        </p>
        <p>
          From early-stage capital raises to large-scale, strategic deals, Allegro Advisors partners with companies across the business lifecycle — from emerging enterprises to multinational corporations. Our entrepreneurial spirit drives us to build meaningful, long-term relationships with our clients.
        </p>
        <p>
          With a strong focus on tailored outcomes, we specialize in crafting bespoke solutions for business owners, investors, and boards. Our proven expertise in cross-border transactions and our in-depth understanding of regulatory frameworks position us to execute optimal strategies across markets.
        </p>
      </div>
    </div>
   <div className="w-full max-w-7xl mx-auto px-4 py-12 text-slate-600">
      <h2 className="text-2xl md:text-3xl font-medium text-center text-slate-800 mb-10">Transactions</h2>

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
    className="text-white font-semibold px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 transition duration-300 shadow-md"
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

export default Investment
