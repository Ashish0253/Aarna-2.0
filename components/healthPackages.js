import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { healthPackages } from "./data";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

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

  const CustomLeftArrow = ({ onClick }) => (
    <i onClick={() => onClick()} className="custom-left-arrow">
      Left
    </i>
  );
  const CustomRightArrow = ({ onClick }) => {
    return (
      <i className="custom-right-arrow" onClick={() => onClick()}>
        Right
      </i>
    );
  };

  const CustomButtonGroup = ({ next, previous, goToSlide, carouselState }) => {
    const { totalItems, currentSlide } = carouselState;
    return (
      <div className="custom-button-group">
        <div>Current slide is {currentSlide}</div>
        <button onClick={() => previous()}>Previous slide</button>
        <button onClick={() => next()}>Next slide</button>
        <button
          onClick={() => goToSlide(Math.floor(Math.random() * totalItems + 1))}
        >
          Go to a random slide
        </button>
      </div>
    );
  };
  const CustomButtonGroupAsArrows = ({ next, previous }) => {
    return (
      <div className="flex justify-between absolute top-32">
        {/* <h4>These buttons can be positioned anywhere you want on the screen</h4> */}
        <button onClick={previous} className="ml-2">
          <AiOutlineLeft size={30} />
        </button>
        <button onClick={next} className="ml-[1000px]">
          <AiOutlineRight size={30} />
        </button>
      </div>
    );
  };

  return (
    <div className=" bg-white border-2 border-transparent rounded-2xl  mx-[15%] my-20 pb-10 shadow-lg">
      <div className="text-2xl font-bold text-primary px-10 pt-10 pb">
        Health Packages
      </div>
      <div className="relative">
        <Carousel
          arrows={false}
          customButtonGroup={<CustomButtonGroupAsArrows />}
          // customRightArrow={<CustomRightArrow />}
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          className="h-[270px] mx-10"
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
    </div>
  );
}
