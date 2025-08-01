import HomeIb from "../assets/AllegroOffice1.jpg";
import { Link } from 'react-router-dom';
import CaseStudies from '../components/CaseStudy';
import Footer from "../components/Footer"
import TransactionCarousal from "../components/TransactionCarousal";
const Investment = () => {
   


  return (
    <div className=''>
      <div className="relative w-full h-screen">
        <img
          src={HomeIb} 
          alt="Newsletter Background"
          className="absolute inset-0 w-full h-full object-cover grey-tone"
        />

        <div className="absolute inset-0 flex items-center justify-center">
    <div className="bg-white/10 backdrop-blur-sm px-8 py-6 rounded-xl border border-white/10 text-white text-center">
      <h1 className="text-4xl md:text-6xl font-medium tracking-wide">Allegro Capital</h1>
      <p className="text-2xl md:text-3xl font-medium mt-2">Investment Advisory</p>
    </div>
  </div>
      </div>
     <div className=" w-full md:w-2/3 max-w-5xl mx-auto px-4  py-15 md:py-12 ">
      <h2 className="text-2xl md:text-3xl font-medium text-slate-800 mb-6 text-center">
        Investment Banking at Allegro Capital
      </h2>
      <div className="text-gray-600 text-base md:text-lg space-y-5">
        <p>
          Investment Banking has been a cornerstone of Allegro Capital since its inception. With deep sector knowledge, a collaborative mindset, global insights, and a results-oriented approach, we offer solutions that deliver value for all stakeholders involved.
        </p>
        <p>
          Our team seamlessly supports clients across a range of industries and geographies, drawing on extensive market experience and strong investor relationships. Whether navigating growth strategies or complex transactions, we ensure precision and efficiency at every stage.
        </p>
        <p>
          From early-stage capital raises to large-scale, strategic deals, Allegro Capital partners with companies across the business lifecycle — from emerging enterprises to multinational corporations. Our entrepreneurial spirit drives us to build meaningful, long-term relationships with our clients.
        </p>
        <p>
          With a strong focus on tailored outcomes, we specialize in crafting bespoke solutions for business owners, investors, and boards. Our proven expertise in cross-border transactions and our in-depth understanding of regulatory frameworks position us to execute optimal strategies across markets.
        </p>
      </div>
    </div>
   <div className="w-full max-w-7xl mx-auto px-4 py-12 text-slate-600">
      <h2 className="text-2xl md:text-3xl font-medium text-center text-slate-800 mb-10">Transactions</h2>

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

export default Investment
