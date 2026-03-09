import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom'; // assuming react-router is used
import { useGetAwardsQuery } from '../redux/apiSlice';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Awards = () => {
  // defer loading until component is near viewport
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef(null);

  // Helper: if the image is served from Cloudinary, request an optimized thumbnail
  const getOptimizedImage = (url, width = 800) => {
    try {
      if (!url) return url;
      // only transform Cloudinary-hosted URLs
      if (url.includes('res.cloudinary.com')) {
        // insert transformation after `/upload/`
        return url.replace('/upload/', `/upload/w_${width},c_fill,f_auto,q_auto/`);
      }
    } catch (e) {
      // fallback to original url on any error
      return url;
    }
    return url;
  };

  // IntersectionObserver to avoid fetching below-the-fold content immediately
  useEffect(() => {
    if (shouldLoad) return;
    const node = containerRef.current;
    if (!node) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true);
          obs.disconnect();
        }
      },
      { rootMargin: '300px' }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, [shouldLoad]);

  const { data: awards = [], isLoading: loading } = useGetAwardsQuery(undefined, {
    skip: !shouldLoad,
  });

  return (
    <div ref={containerRef} className="md:pb-10 pt-8 px-6 max-w-7xl mx-auto">
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
        preloadImages={false}
        spaceBetween={80}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={awards.length >= 3}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {awards.length === 0 ? (
          // lightweight skeleton placeholders while content or images load
          Array.from({ length: 3 }).map((_, i) => (
            <SwiperSlide key={`skeleton-${i}`}>
              <div className="h-64 md:h-50 rounded-lg bg-gray-200/80 animate-pulse" />
            </SwiperSlide>
          ))
        ) : (
          awards.map((award, index) => (
            <SwiperSlide key={index}>
              <Link to="/awards">
                <div className="relative h-64 md:h-50 rounded-lg overflow-hidden shadow-lg cursor-pointer group">
                  <img
                    src={getOptimizedImage(award.awardimageURL, 700)}
                    loading="lazy"
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
          ))
        )}
      </Swiper>
    </div>
  );
};

export default Awards;
