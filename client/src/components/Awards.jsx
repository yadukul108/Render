import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // assuming react-router is used
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Awards = () => {
  const [awards, setAwards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAwards = async () => {
      try {
        const res = await fetch("https://allegro-backend.onrender.com/api/awards");
        if (!res.ok) throw new Error("Failed to fetch awards");
        const data = await res.json();
        setAwards(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAwards();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-700">
        Loading Awards...
      </div>
    );
  }

  return (
    <div className="md:pb-10 pt-8 px-6 max-w-7xl mx-auto">
      <style>
        {`
          .swiper-button-prev,
          .swiper-button-next {
            display: none !important;
          }
          .swiper-pagination-bullet {
            background-color: red !important;
            opacity: 0.6;
          }
          .swiper-pagination-bullet-active {
            background-color: red !important;
            opacity: 1;
          }
        `}
      </style>

      <h2 className="text-3xl md:text-4xl font-medium mb-4 text-gray-700 text-center">
        Awards & Achievements
      </h2>
          <p className="text-slate-600 text-sm md:text-lg max-w-2xl mx-auto  mb-8 md:mb-14 text-center leading-relaxed">Celebrating milestones that reflect our unwavering commitment to excellence and client success</p>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={80}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {awards.map((award, index) => (
          <SwiperSlide key={index}>
            <Link to="/awards">
             <div className="relative h-64 md:h-50 rounded-lg overflow-hidden shadow-lg cursor-pointer group">
  <img
    src={award.awardimageURL}
    alt={`Award ${index + 1}`}
    className="w-auto h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <span className="text-white text-lg font-semibold">Click to know more</span>
  </div>
</div>


            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Awards;
