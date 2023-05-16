/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";

import content from "../constants/healthScans";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./HealthScans.css";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ButtonBase } from "@mui/material";
// import { Link } from "react-router-dom";
import Image from "next/image";
import Link from "next/link";

function HealthScans() {
  const slider = React.useRef(null);

  function RenderArrows() {
    return (
      <div className="slider-arrow-packages">
        <ButtonBase
          className="arrow-btn-prev-packages"
          onClick={() => slider?.current?.slickPrev()}
        >
          <ArrowBackIosIcon fontSize="large" sx={{ color: "black" }} />
        </ButtonBase>
        <ButtonBase
          className="arrow-btn-next-packages"
          onClick={() => slider?.current?.slickNext()}
        >
          <ArrowForwardIosIcon fontSize="large" sx={{ color: "black" }} />
        </ButtonBase>
      </div>
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    initialSlide: 0,
    // nextArrow: <SampleArrow />,
    // prevArrow: <SampleArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" sm:px-20 px-4 pt-10">
      <div className="relative py-8 sm:mx-[11%] bg-white rounded-xl shadow-md">
        <h1 className=" text-start pl-12 pb-2 text-2xl font-bold text-black">
          Health Scans
        </h1>
        <RenderArrows />
        <Slider ref={slider} {...settings} className="px-8 my-4">
          {content.map((item) => {
            return (
              <div
                key={item.id}
                className="rounded-xl overflow-hidden text-center drop-shadow-md text-black bg-[#f8f8f8] pb-5"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="border-b-4 border-[#0aa1af]"
                />
                <h3 className="py-3 text-2xl text-black font-bold">
                  {item.title}
                </h3>
                <h3 className="font-bold text-lg text-[#0aa1af] py-1">
                  {item.price}
                  {/* <span className="line-through	font-light">
                    {item.price2}
                  </span>{" "} */}
                  {item.price3}
                </h3>
                {/* <div className= " hidden sm:block">
                <p className="text-sm px-4">{item.description}</p>
                </div> */}
                {/* <p className="p-5 scan-desc">{item.description}</p> */}
                {/* </Link> */}
                <Link href={item.page}>
                  <button
                    to={item.page}
                    className=" mt-6 border-transparent rounded-xl px-10 py-2 border-2 bg-[#f27d27] text-white font-bold "
                  >
                    Book Now
                  </button>
                </Link>
                {/* <div className="border-transparent rounded-lg px-4 py-1 mt-4 border-2 bg-[#1ebaba] text-white hover:scale-105">
                  
                </div> */}
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
export default HealthScans;
