import Image from "next/image";

import Slider from "react-slick";
import RenderArrows from "../utils/RenderArrows";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

export default function Carousel2({ data }) {
  const slider = useRef(null);

  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
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
    <div className="bg-[#f2f2f2] sm:h-[700px] sm:w-[1728] pt-0 ">
      <div className="relative h-full">
        {/* {data.length > 1 && <RenderArrows slider={slider} />} */}

        <Slider ref={slider} {...settings} className="sm:px-0 -mx-2 m">
          {data.map((item) => {
            return (
              <div key={data.title} className="">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={1920}
                  height={400}
                  className="w-full h-auto  sm:w-[1800px] sm:h-[700px]"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

// naam theek kr diye images ke
