import React from 'react';
import HomeIb from "../assets/HomeIB.jpg";
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import {newsItems} from "../NewsData"
const Newsletter = () => {
    

  return (
    <div className='bg-slate-100'>
      <div className="relative w-full h-screen">
        <img
          src={HomeIb} 
          alt="Newsletter Background"
          className="absolute inset-0 w-full h-full object-cover grey-tone"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide">Allegro Advisors</h1>
          <p className="text-3xl md:text-3xl font-medium mt-2">NEWSLETTER</p>
        </div>
      </div>
      <div className="px-6 md:px-12 py-10 text-slate-700">
  <h2 className="text-2xl md:text-3xl font-medium mb-8 text-center text-slate-800">Latest News</h2>

 {newsItems.map((news, idx) => (
  <div key={idx} className="flex flex-col md:flex-row items-start md:items-center justify-between py-4 border-b border-slate-300">
    {/* Left (20%) */}
    <div className="md:w-1/5 mb-2 md:mb-0">
      <h3 className="text-lg font-semibold">{news.title}</h3>
      <p className="text-sm text-slate-500">{news.date}</p>
    </div>

    {/* Right (80%) */}
    <div className="md:w-4/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <Link to={`/news/${news.slug}`} className="text-xl md:text-2xl text-slate-700 hover:underline">
        {news.description}
      </Link>
      <Link to={`/news/${news.slug}`} className="text-blue-600 hover:underline font-medium">
        Learn More
      </Link>
    </div>
  </div>
))}

</div>
<Footer/>
    </div>
  );
};

export default Newsletter;
