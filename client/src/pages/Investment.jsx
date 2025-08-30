import HomeIb from "../assets/office4.jpg";
import { Link } from 'react-router-dom';
import CaseStudies from '../components/CaseStudy';
import Footer from "../components/Footer"
import TransactionCarousal from "../components/TransactionCarousal";
const Investment = () => {
   


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
        Trusted Advisors In
        <span className="block text-red-400 font-medium">Investment Banking</span>
      </h1>

      {/* Subtext */}
      <p className="text-slate-200 text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed font-light">
       Allegro Capital provides tailored investment banking solutions with deep expertise and strong networks, partnering with businesses from startups to global corporations
      </p>

      <p className="mt-4 text-slate-300 text-sm md:text-base font-light max-w-2xl">
        Guiding clients with integrity and expertise since 2002.
      </p>
    </div>
  </div>
</div>

</div>
     <div className=" w-full md:w-2/3 max-w-5xl mx-auto px-4  py-15 md:py-12 ">
      <h2 className="text-[1.35rem] md:text-4xl font-medium text-slate-700 mb-6 text-center">
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
   <div className="w-full max-w-7xl mx-auto text-center px-4  py-12 text-slate-600">
      <h2 className="text-3xl md:text-4xl font-medium text-center text-slate-700 mb-4">Our Transactions</h2>
      <p className=" mb-12 md:mb-20 md:w-2/3 md:text-lg mx-auto">Each deal reflects strategic foresight, meticulous precision, and trust. Together, they showcase our consistent performance, resilience, credibility, and enduring strength in investment banking.</p>
      {/* Cards */}
     <TransactionCarousal source="investment" />

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
    <CaseStudies source="investment"/>
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

export default Investment
