import React from 'react';
import HomeIb from "../assets/AllegroOffice1.jpg";
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import {newsItems} from "../NewsData"
const Newsletter = () => {
    

  return (
    <div className=''>
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
        Have a Glance at
        <span className="block text-red-400 font-medium">Newsletter</span>
      </h1>

      {/* Subtext */}
      <p className="text-slate-200 text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed font-light">
       Stay informed with our newsletter, featuring the latest insights, updates, and success stories from Allegro Capital. A quick glance into our journey and impact
      </p>

      <p className="mt-4 text-slate-300 text-sm md:text-base font-light max-w-2xl">
        Guiding clients with integrity and expertise since 2002.
      </p>
    </div>
  </div>
</div>
      <div className="px-6 md:px-12 py-10 text-slate-700">
  <h2 className="text-3xl font-medium mb-8 text-center text-slate-800">Latest News</h2>

 {newsItems.map((news, idx) => (
  <div key={idx} className="flex flex-col md:flex-row items-start md:items-center justify-between py-4 border-b border-slate-300">
    {/* Left (20%) */}
    <div className="md:w-1/5 mb-2 md:mb-0">
      <h3 className="text-xl  text-slate-700 font-medium">{news.title}</h3>
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
