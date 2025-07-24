import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; // ✅ Import Pagination module
import "swiper/css";
import "swiper/css/pagination"; // ✅ Import Pagination styles

import { Link } from "react-router-dom";

const TransactionCarousal = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await fetch('/api/transactions/getAllTransactions');
        if (!res.ok) throw new Error('Failed to fetch transactions');
        const data = await res.json();
        setTransactions(data);
      } catch (err) {
        console.error(err);
        setTransactions([]);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="w-4/5 md:w-11/12 mx-auto px-4">
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

        {transactions.map((txn) => (
          <SwiperSlide key={txn._id}>
            <Link
              to={`/transaction/${txn._id}`}
              className="bg-white rounded-lg shadow transition-transform duration-300 hover:scale-[1.02] hover:border-b-4 hover:border-red-600 overflow-hidden max-w-sm mx-auto"
            >
              <img
                src={txn.dealPic}
                alt="Transaction"
                className="w-full h-[15rem] object-cover"
              />
              <div className="p-4 pl-[2rem] bg-slate-100 text-left text-slate-700">
                <div className="text-slate-500 text-sm font-medium leading-[130%] mb-1">
                  <span>{txn.sector || "—"}</span> | <span>{txn.year || "—"}</span>
                </div>
                <p className="text-sm font-medium leading-[130%] mb-1">
                  Type of Deal: {txn.type_of_deal || "—"}
                </p>
                <p className="text-sm font-medium leading-[130%]">
                  Amount: {txn.amount || "—"} Cr INR
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TransactionCarousal;
