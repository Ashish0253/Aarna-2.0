import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { healthPackages } from "./data";

export default function HealthPackages() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="border-2 border-transparent rounded-2xl  mx-[16%] my-20 pb-10 shadow-lg">
      <div className="text-2xl font-bold text-primary px-10 pt-10 pb">
        Health Packages
      </div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className="h-[270px] mx-5"
        renderButtonGroupOutside={true}
      >
        {healthPackages.map((item) => {
          return (
            <div
              key={item.title}
              className="border-2 mx-2 p-5 rounded-xl bg-primary text-white h-[210px] "
            >
              <div className="text-2xl font-bold p-2">{item.title}</div>
              <div className="flex p-2">
                <div className="line-through">{item.price}</div>
                <div className="ml-6 ">{item.offerPrice}</div>
              </div>
              <div className="flex justify-between ">
                <div className="text-xs underline py-1">Know More</div>
                <div className="border-2 font-bold border-transparent text-black text-xs bg-[#FFD500] py-1 px-4 rounded-2xl">
                  39 parameter(s) covered
                </div>
              </div>

              <div className="bg-secondary border-2 border-transparent font-semibold rounded-2xl flex justify-center text-sm py-2 w-[82%] my-3 absolute">
                Book Now
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
