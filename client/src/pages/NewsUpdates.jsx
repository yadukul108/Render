import React, { useEffect, useState } from 'react';
import HomeIb from "../assets/office3.jpg";
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const NewsUpdates = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        //
        const res = await fetch("https://allegro-backend.onrender.com/api/news/getAllNews");
        if (!res.ok) throw new Error("Failed to fetch news");
        const data = await res.json();
        setNewsItems(data);
      } catch (err) {
        console.error("Error fetching news:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/70 to-red-900/60 z-2"></div>
      <img
        src={HomeIb}
        alt="About Us"
        className="object-cover w-full h-[42rem] md:h-[40rem] filter brightness-75"
      />

      {/* Hero */}
      <div className="absolute inset-0 z-3 flex items-center">
        <div className="container mx-auto px-3 md:px-8">
          <div className="max-w-4xl">
            <div className="mb-4">
              <div className="inline-block bg-slate-600/20 backdrop-blur-sm border border-red-400/30 rounded-full px-4 py-2 mb-6">
                <span className="text-white text-sm font-medium tracking-wide">
                  WELCOME TO ALLEGRO CAPITAL
                </span>
              </div>
            </div>

            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight">
              Have a Glance at
              <span className="block text-red-400 font-medium">News & Updates</span>
            </h1>

            <p className="text-slate-200 text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed font-light">
              Recognized across major publications for our expertise and impact,
              Allegro Capital continues to be a trusted voice in investment banking,
              wealth management, and strategic advisory
            </p>

            <p className="mt-4 text-slate-300 text-sm md:text-base font-light max-w-2xl">
              Guiding clients with integrity and expertise since 2002.
            </p>
          </div>
        </div>
      </div>

      {/* News Section */}
      <div className="px-6 md:px-12 py-10 text-slate-700 relative ">
        <h2 className="text-3xl font-medium mb-8 text-center text-slate-800">
          Latest News
        </h2>

        {loading ? (
          <p className="text-center text-slate-500">Loading news...</p>
        ) : newsItems.length === 0 ? (
          <p className="text-center text-slate-500">No news available</p>
        ) : (
          newsItems.map((news) => (
            <div
              key={news._id}
              className="flex flex-col md:flex-row items-start md:items-center justify-between py-4 border-b border-slate-300"
            >
              {/* Left (20%) */}
              <div className="md:w-1/5 mb-2 md:mb-0">
                <h3 className="text-xl text-slate-700 font-medium">
                  {news.heading}
                </h3>
                <p className="text-sm text-slate-500">{news.year}</p>
              </div>

              {/* Right (80%) */}
              <div className="md:w-4/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <p className="text-[1rem] md:text-xl text-slate-700">
                  {news.description} 
                </p>
               
                <a
                  href={news.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline font-medium"
                >
                {news.mediaName}
                </a>
              </div>
            </div>
          ))
        )}
      </div>

      <Footer />
    </div>
  );
};

export default NewsUpdates;
