import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const CaseStudies = ({ source }) => {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const res = await fetch("https://allegro-backend.onrender.com/api/cases/getAllCase");
        const data = await res.json();

        let filtered = data;
        if (source === "Investment") {
          filtered = data.filter((c) => c.isInvestment === true);
        }

        setCases(filtered);
      } catch (err) {
        console.error("Error fetching cases:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCases();
  }, [source]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-4 text-slate-700">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-medium mb-4">Case Studies</h2>
        <p className="text-base md:w-2/3 md:text-lg mx-auto text-slate-600">
          Explore how Allegro Capital has partnered with clients to deliver
          strategic outcomes through deep financial insight and tailored
          solutions.
        </p>
      </div>

      {/* Carousel */}
      {loading ? (
        <p className="text-center text-slate-500">Loading case studies...</p>
      ) : cases.length > 0 ? (
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          loop={true}
          grabCursor={true}
          spaceBetween={24}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper pb-10"
        >
          {cases.map((study, index) => (
            <SwiperSlide key={study._id}>
              <div
                className="group block bg-white rounded-2xl overflow-hidden  w-[18rem] mx-auto border border-white/20 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={study.caseImage}
                    alt={study.heading}
                    className="w-auto mx-auto object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-4 bg-slate-50 relative">
                  {/* Heading */}
                  <h3 className="text-lg font-semibold text-slate-700 mb-2">
                    {study.heading}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 ">
                    {study.description}
                  </p>

                  {/* Learn More */}
                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <Link
                      to="/case_study"
                      className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold text-sm group/link transition-all duration-300"
                    >
                      <span className="relative">
                        View Details
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover/link:w-full transition-all duration-300"></span>
                      </span>
                      <svg
                        className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-center text-slate-500">No case studies found.</p>
      )}

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CaseStudies;
