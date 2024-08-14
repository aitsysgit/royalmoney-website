"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../src/styles/styles.css";

// import required modules
import { Autoplay,EffectCards} from "swiper/modules";

export default function Screenshots() {
  return (
    <section
      id="sec"
      style={
        {
          // height:"80vh"
        }
      }
    >
      <div className="container px-5 py-24 mx-auto  flex-wrap relative flex ">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-5xl text-2xl font-semibold title-font mb-4 text-gray-900">
            App Screenshots
          </h1>
          <div class="h-1 w-20 bg-primary mx-auto rounded"></div>
        </div>
        <div
          className="phoneCase hidden sm:flex"
          style={{
            position: "absolute",
            zIndex: "5",
            left: "50%",
            top: "60%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <img
            id="phoneCase2"
            className="h-[23.6rem] object-cover object-center rounded-lg md:mt-0 mt-12 "
            src="\images\Royal Money (mobile pics)\Screen-final-2-355x723.png"
            alt="step"
            style={{
              height: "26rem", // Match the SwiperSlide image height
              width: "auto",
            }}
          />
        </div>

        <Swiper
          spaceBetween={90}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="mySwiper relative hidden sm:flex "
          breakpoints={{
            // when window width is >= 1024px (PC and laptop)
            1024: {
              slidesPerView: 5,
            },
            // when window width is >= 768px (tablet)
            768: {
              slidesPerView: 3,
            },
            // when window width is < 768px (mobile)
            0: {
              slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide className="hidden sm:flex ">
            <img
              class="  h-[23.6rem]  object-cover object-center rounded-lg md:mt-0 mt-12"
              src="\images\Royal Money (mobile pics)\Sign Up.png"
              alt="step"
            />
          </SwiperSlide>
          <SwiperSlide className="hidden sm:flex ">
            <img
              class=" h-[23.6rem]  object-cover object-center rounded-lg md:mt-0 mt-12"
              src="\images\Royal Money (mobile pics)\Login.png"
              alt="step"
            />
          </SwiperSlide>
          <SwiperSlide className="hidden sm:flex ">
            <img
              class=" h-[23.6rem]  object-cover object-center rounded-lg md:mt-0 mt-12"
              src="\images\Royal Money (mobile pics)\screen1.png"
              alt="step"
            />
          </SwiperSlide>
          <SwiperSlide className="hidden sm:flex ">
            <img
              class=" h-[23.6rem]  object-cover object-center rounded-lg md:mt-0 mt-12"
              src="\images\Royal Money (mobile pics)\Send Money.png"
              alt="step"
            />
          </SwiperSlide>
          <SwiperSlide className="hidden sm:flex ">
            <img
              class=" h-[23.6rem] w-60 object-cover object-center rounded-lg md:mt-0 mt-12"
              src="\images\Royal Money (mobile pics)\Select Receiver.png"
              alt="step"
            />
          </SwiperSlide>
          <SwiperSlide className="hidden sm:flex ">
            <img
              class=" h-[23.6rem] w-60 object-cover object-center rounded-lg md:mt-0 mt-12"
              src="\images\Royal Money (mobile pics)\Payment Method.png"
              alt="step"
            />
          </SwiperSlide>
          <SwiperSlide className="hidden sm:flex ">
            <img
              class=" h-[23.6rem] w-60 object-cover object-center rounded-lg md:mt-0 mt-12"
              src="\images\Royal Money (mobile pics)\Send Summary.png"
              alt="step"
            />
          </SwiperSlide>
          <SwiperSlide className="hidden sm:flex ">
            <img
              class=" h-[23.6rem] w-60 object-cover object-center rounded-lg md:mt-0 mt-12"
              src="\images\Royal Money (mobile pics)\Tranfer Success.png"
              alt="step"
            />
          </SwiperSlide>
        </Swiper>

        

        {/* <div className="flex justify-center w-[100%]">
          <div className="swiperRight">
            <img
              class=" h-[25rem]  object-cover object-center rounded-lg md:mt-0 mt-12"
              src="\images\Royal Money (mobile pics)\Screen-final-2-355x723.png"
              alt="step"
            />
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              // autoplay={{ delay: 99000, disableOnInteraction: false }}
              //   pagination={{
              //     clickable: true,
              //   }}
              // modules={[Autoplay]}
              className="mySwiper "
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
          </div>

          <div className="content">
            <h1 className="text-cyan-800"> asdasdasda</h1>
            <p className="text-cyan-800">loremloremloremloremloremloremlorem</p>
          </div>
        </div> */}

{/* 
<>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper h-[200px]"
      >
        <SwiperSlide >
            <img
              class=" h-[23.6rem] w-60 object-cover object-center rounded-lg md:mt-0 mt-12"
              src="\images\Royal Money (mobile pics)\Tranfer Success.png"
              alt="step"
            />
          </SwiperSlide>
        <SwiperSlide >
            <img
              class=" h-[23.6rem] w-60 object-cover object-center rounded-lg md:mt-0 mt-12"
              src="\images\Royal Money (mobile pics)\Tranfer Success.png"
              alt="step"
            />
          </SwiperSlide>
        <SwiperSlide >
            <img
              class=" h-[23.6rem] w-60 object-cover object-center rounded-lg md:mt-0 mt-12"
              src="\images\Royal Money (mobile pics)\Tranfer Success.png"
              alt="step"
            />
          </SwiperSlide>
      </Swiper>
    </> */}
      </div>
    </section>
  );
}
