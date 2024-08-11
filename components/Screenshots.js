"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../src/styles/styles.css";

// import required modules
import { Autoplay } from "swiper/modules";

export default function Screenshots() {
  return (
    <section
      style={
        {
          // height:"80vh"
        }
      }
    >
      <div class="container px-5 py-24 mx-auto flex flex-wrap relative">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-5xl text-2xl font-semibold title-font mb-4 text-gray-900">
            App Screenshots
          </h1>
          <div class="h-1 w-20 bg-primary mx-auto rounded"></div>
        </div>
        <div className="phoneCase" style={{
                position: "absolute",
                zIndex:"5",
                left: "50%",
                top: "61%",
                transform:" translate(-50%, -50%)"
        }}>

        <img
              class=" h-[25rem] object-cover object-center rounded-lg md:mt-0 mt-12"
              src="\images\Royal Money (mobile pics)\Screen-final-2-355x723.png"
              alt="step"
            />
        </div>
        <Swiper
          slidesPerView={5}
          spaceBetween={90}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        //   pagination={{
        //     clickable: true,
        //   }}
          modules={[Autoplay]}
          className="mySwiper relative"
        >

          <SwiperSlide>
            <img
              class=" h-[23.6rem] w-60 object-cover object-center rounded-lg md:mt-0 mt-12"
              src="\images\Royal Money (mobile pics)\Sign Up.png"
              alt="step"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              class=" h-[23.6rem] w-60 object-cover object-center rounded-lg md:mt-0 mt-12"
              src="\images\Royal Money (mobile pics)\Login.png"
              alt="step"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              class=" h-[23.6rem] w-60 object-cover object-center rounded-lg md:mt-0 mt-12"
              src="\images\Royal Money (mobile pics)\screen1.png"
              alt="step"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              class=" h-[23.6rem] w-60 object-cover object-center rounded-lg md:mt-0 mt-12"
              src="\images\Royal Money (mobile pics)\Send Money.png"
              alt="step"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              class=" h-[23.6rem] w-60 object-cover object-center rounded-lg md:mt-0 mt-12"
              src="\images\Royal Money (mobile pics)\Select Receiver.png"
              alt="step"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              class=" h-[23.6rem] w-60 object-cover object-center rounded-lg md:mt-0 mt-12"
              src="\images\Royal Money (mobile pics)\Payment Method.png"
              alt="step"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              class=" h-[23.6rem] w-60 object-cover object-center rounded-lg md:mt-0 mt-12"
              src="\images\Royal Money (mobile pics)\Send Summary.png"
              alt="step"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              class=" h-[23.6rem] w-60 object-cover object-center rounded-lg md:mt-0 mt-12"
              src="\images\Royal Money (mobile pics)\Tranfer Success.png"
              alt="step"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
