import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import AwardIB from "../assets/Awards.jpg";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  AwardIB, AwardIB, AwardIB, AwardIB, AwardIB,
  AwardIB, AwardIB, AwardIB, AwardIB, AwardIB
];

const Awards = () => {
  return (
    <div className=''>
    <div className="py-10 px-6 max-w-7xl mx-auto ">
      {/* Inline custom Swiper CSS */}
      <style>
        {`
          .swiper-button-prev,
          .swiper-button-next {
            display: none !important;;
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

      <h2 className="text-2xl md:text-3xl font-md mb-6 w-11/12 text-gray-800">Awards & Achievements</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-64 rounded overflow-hidden shadow-lg">
              <img
                src={src}
                alt={`Award ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <p className="text-white text-xl font-medium">Award & Achievement</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div></div>
  );
};

export default Awards;
