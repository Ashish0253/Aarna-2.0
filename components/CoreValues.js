import React from "react";
import { coreValues } from "@/constants/coreValues";

import Slider from "react-slick";
import RenderArrows from "@/utils/RenderArrows";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const CoreValues = () => {
  const slider = React.useRef(null);

  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
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
    <React.Fragment>
      <div className="px-[15%] bg-tertiary py-2">
        <div className="text-xl font-bold text-white pt-8 pb-4 border-b-2 border-white">
          Our Values
        </div>
        <div className="relative  mt-10">
          <RenderArrows slider={slider} arrowColor="white" />
          <Slider ref={slider} {...settings} className="px-8 my-4">
            {coreValues.map((item) => {
              return (
                <div
                  key={item.title}
                  className="border-2 border-transparent rounded-md mx-2 grid justify-items-center"
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={500}
                    height={200}
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CoreValues;
