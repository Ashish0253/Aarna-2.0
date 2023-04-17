import React, { useState, useRef } from "react";
import {
  conditions,
  lifeStyleDisorders,
} from "@/constants/searchTestAndPackages";

import Slider from "react-slick";
import RenderArrows from "@/utils/RenderArrows";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";

export default function SearchTestAndPackages() {
  const slider = useRef(null);

  const [isConditions, setIsConditions] = useState("true");

  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
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
    <>
      <div className="bg-white border-2 border-transparent rounded-2xl sm:mx-[15%] mx-4 my-10 pb-5 px-10 shadow-xl">
        <div className="text-2xl font-bold text-black pt-8 pb-2">
          Search Test and Packages
        </div>

        {/* filters */}
        {/* <div className="sm:flex justify-start text-xs font-semibold text-primary ">
          <button
            onClick={() => setIsConditions(false)}
            className={` border-2 border-primary rounded-2xl px-4 py-1 mr-2 hover:bg-tertiary hover:text-white ease-out ${
              !isConditions ? "bg-tertiary text-white" : ""
            }`}
          >
            LifeStyle Disorder
          </button>
          <button
            onClick={() => setIsConditions(true)}
            className={` border-2 border-primary rounded-2xl px-4 py-1 mr-2 hover:bg-tertiary hover:text-white ease-out ${
              isConditions ? "bg-tertiary text-white" : ""
            }`}
          >
            {" "}
            Conditions
          </button>
          <button className="border-2 border-primary rounded-2xl px-4 py-1 mr-4  hover:bg-tertiary hover:text-white ease-out">
            {" "}
            Alphabet
          </button>
        </div> */}

        {/* icons  */}
        <div className="relative  mt-5">
          <RenderArrows slider={slider} arrowColor="black" />
          <Slider ref={slider} {...settings} className="px-8 ">
            {isConditions &&
              conditions.map((item) => {
                return (
                  <div
                    key={item.name}
                    className="border-2 border-transparent rounded-md mx-2 grid justify-center"
                  >
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={200}
                      height={100}
                    />
                    <div className="grid justify-center">
                      <p className="text-center">{item.name}</p>
                    </div>
                  </div>
                );
              })}
            {!isConditions &&
              lifeStyleDisorders.map((item) => {
                return (
                  <div
                    key={item.name}
                    className="border-2 border-transparent rounded-md mx-2 grid justify-center"
                  >
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={200}
                      height={100}
                    />
                    <div className="grid justify-center">
                      <p className="text-center">{item.name}</p>
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>

        <div className="text-gray-500 flex justify-end underline text-sm p-1 font-semibold">
          <button>
            <Link href="/search-test-packages">View All</Link>{" "}
          </button>{" "}
        </div>
      </div>
    </>
  );
}
