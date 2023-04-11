// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import React from "react";
import { healthPackages } from "../constants/healthPackages";
// import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Slider from "react-slick";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ButtonBase } from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HealthPackages() {
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
    <div className=" bg-white border-2 border-transparent rounded-2xl  mx-[15%] my-20 pb-10 shadow-lg">
      <div className="text-2xl font-bold text-black px-10 pt-10 pb">
        Health Packages
      </div>
      <div className="relative h-full">
        <RenderArrows />

        <Slider ref={slider} {...settings} className="px-8 my-4">
          {healthPackages.map((item) => {
            return (
              <div
                key={item.title}
                className=" mx-2 relative  text-white h-[330px] h-"
              >
                <div className="border-2 p-5 rounded-2xl bg-tertiary pb-1 h-[300px]">
                  <div className="text-2xl font-bold p-2 h-20">
                    {item.title}
                  </div>
                  <div className="p-2 font-semibold">
                    <h4 className="border-2 text-sm border-transparent bg-[#FFD500] px-2 rounded-2xl text-black">
                      Includes: {item.parameters} parameters
                    </h4>
                    <ul className="px-3 py-1 text-sm font-normal">
                      {item.list.map((content) => (
                        <li key={content}>{content}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex px-2 py-1 text-lg font-semibold">
                    <div className="line-through">&#8377; {item.price}</div>
                    <div className="ml-6 ">&#8377; {item.offerPrice}</div>
                  </div>
                  <div className="flex justify-between ">
                    <div className="text-xs underline py-1">Know More</div>
                    {/* <div className="border-2 font-bold border-transparent text-black text-xs bg-[#FFD500] py-1 px-4 rounded-2xl">
                      39 parameter(s) covered
                    </div> */}
                  </div>
                </div>

                <div className="bg-primary border-2 border-transparent font-semibold rounded-2xl flex justify-center text-base py-2 w-[90%] absolute left-4 bottom-2">
                  Book Now
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
