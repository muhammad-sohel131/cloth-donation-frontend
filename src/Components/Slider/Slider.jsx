import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import './Slider.css'

const Slider = () => {
    const [campaigns, setCampaigns] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/data/campaigns.json');
            const data = await res.json();
            setCampaigns(data);
        }
        fetchData();
    }, [])
  return (
    <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={100}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    autoplay
    loop
    className="mx-auto"
  >
    {campaigns.map((campaign) => (
      <SwiperSlide key={campaign.id}>
        <div className="relative overflow-hidden shadow-md">
          <img
            src={campaign.image}
            alt={campaign.title}
            className="w-full h-[550px] object-cover"
          />
          <div className="p-4 absolute z-10 w-full h-full top-0 bg-[rgba(0,0,0,.5)] flex items-center justify-center">
            <div className="text-center px-8">
            <h3 className="md:text-5xl text-2xl font-extrabold my-5 text-white">
              {campaign.title}
            </h3>
            <p className="text-lg text-white mt-2">
              {campaign.description}
            </p>
            <button className="bg-[#f86011] my-10  px-12 py-4 text-xl font-bold rounded-md hover:bg-[#DA5107] text-white transition">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
  );
};

export default Slider;
