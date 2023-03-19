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
    <div className="border-2 border-transparent rounded-2xl  mx-[16%] my-20 pb-20 shadow-lg">
      <div className="text-2xl font-bold text-primary px-10 pt-10 pb-10">
        Health Packages
      </div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
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
        className="mx-28"
        renderButtonGroupOutside={true}
      >
        {healthPackages.map((item) => {
          return (
            <div key={item.title} className="border-2 m-4 p-5">
              <div className="text-3xl">{item.title}</div>
              <div>{item.price}</div>
              <div>{item.offerPrice}</div>
              <div>Know More</div>
              <div>39 parameter(s) covered</div>
              <div>Book Now</div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
