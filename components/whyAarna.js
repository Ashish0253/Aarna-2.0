import React from "react";
import Image from "next/image";
import { why, quality, offer } from "../constants/whyArna";

import Slider from "react-slick";
import RenderArrows from "../utils/RenderArrows";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ButtonBase } from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function WhyAarna() {
  const slider = React.useRef(null);

  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
    <div className="sm:mx-[15%] mx-4">
      <div className=" border-2 border-transparent rounded-2xl my-10 pb-3 text-black">
        <div className="font-bold text-2xl py-4 border-b-2 text-tertiary border-tertiary">
          Why Aarna Diagnostic Centre
        </div>

        <div className="flex-col grid  sm:grid-cols-3">
          {why.map((item) => (
            <div key={item.title} className="p-8 flex">
              <Image src={item.img} width={70} height={20} alt={item.title} />
              <div className="ml-4 mt-1">
                <div className="font-bold text-2xl text-quaternary">
                  {item.title}
                </div>
                <div>{item.content}</div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-tertiary flex justify-end underline text-base p-1 font-semibold m-4">
          <button> Explore &gt;&gt;</button>{" "}
        </div> */}
      </div>

      {/* Offer And Anouncement      */}
      {/* <div className="border-2 border-transparent rounded-2xl  my-10 pb-3 text-black">
        <div className="font-bold text-2xl py-4 border-b-4 border-black">
          Offer & Anouncement
        </div>
        <div className="relative  mt-10">
          <RenderArrows slider={slider} />
          <Slider ref={slider} {...settings} className="px-8 my-4">
            {offer.map((item) => {
              return (
                <div
                  key={item.title}
                  className="border-2 border-transparent rounded-md p-8 bg-white mx-2 grid justify-items-center"
                >
                  <div className="grid justify-items-center">
                    <Image
                      src={item.img}
                      alt={item.img}
                      height={30}
                      width={200}
                      className="rounded-lg"
                    />
                    <p className="pt-4 font-bold">{item.content}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

        <div className="text-tertiary flex justify-end underline text-base p-1 font-semibold m-4">
          <button> View All</button>{" "}
        </div>
      </div> */}

      <div className="border-2 border-transparent rounded-2xl my-10 pb-3 text-black">
        <div className="font-bold text-2xl text-tertiary py-4 border-b-2 border-tertiary">
          Quality
        </div>
        <div className="flex-col grid sm:grid-cols-3">
          {quality.map((item) => (
            <div key={item.title} className="p-8 flex">
              <Image src={item.img} width={70} height={20} alt={item.title} />

              <div className="ml-4 mt-1">
                <div className="font-bold text-2xl text-quaternary">
                  {item.title}
                </div>
                <div>{item.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
