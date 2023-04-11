import { BiMapAlt } from "react-icons/bi";
import { centres } from "@/constants/centres";
import { SlLocationPin } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import Breadcrumb from "@/components/Breadcrumb";
// import { MdLocationOn } from "react-icons/md";

export default function Centres() {
  const breadcrumbData = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Centres",
      link: "/nearest-centre",
    },
  ];

  return (
    <div className="bg-[#f2f2f2]">
      <Breadcrumb links={breadcrumbData} />
      <div className="flex justify-start text-xs font-semibold text-primary mx-[15%] my-[2%]">
        <button className="border-2 border-primary rounded-3xl px-4 py-1 mr-2 bg-white hover:bg-tertiary hover:text-white ease-out">
          Doiwala
        </button>
        <button className="border-2 border-primary rounded-3xl px-4 py-1 mr-2 bg-white hover:bg-tertiary hover:text-white ease-out">
          Mussorie
        </button>
        <button className="border-2 border-primary rounded-3xl px-4 py-1 mr-2 bg-white  hover:bg-tertiary hover:text-white ease-out">
          Vikas Nagar
        </button>
        <button className="border-2 border-primary rounded-3xl px-4 py-1 mr-2 bg-white  hover:bg-tertiary hover:text-white ease-out">
          Rishikesh
        </button>
        <button className="border-2 border-primary rounded-3xl px-4 py-1 mr-2 bg-white hover:bg-tertiary hover:text-white ease-out">
          Dehradun
        </button>
      </div>
      <div className="flex justify-center">
        <input
          placeholder="Search Location"
          className="py-4 px-20 rounded-3xl bg-[url('/Vector.svg')] bg-no-repeat bg-[2rem] text-sm"
          size={120}
        />{" "}
        {/* <button className="border-2 border-blac rounded-3xl">Search</button> */}
      </div>
      <div className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.868799207304!2d78.02524661493497!3d30.297796481790943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092978849052d9%3A0xe74fb09a1c56420e!2sAarna%20Diagnostic%20Centre!5e0!3m2!1sen!2sin!4v1679285323694!5m2!1sen!2sin"
          width="70%"
          height="350"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="mx-[15%] my-6 rounded-xl shadow-lg"
        ></iframe>
      </div>

      <div className="grid grid-cols-2 mx-[15%] gap-x-10 gap-y-5 my-6">
        {centres.map((item) => {
          return (
            <div
              key={item.title}
              className="border-2 border-transparent shadow-xl rounded-xl px-8 py-8 bg-white"
            >
              <div className="font-bold text-xl p-2  text-primary">
                {item.title}
              </div>
              <div className="flex p-2 text-sm">
                <SlLocationPin size={24} className="mr-2 text-primary " />{" "}
                {item.address}
              </div>
              <div className="flex p-2 text-sm">
                <BsTelephone size={20} className="mr-2 ml-1 text-primary" />{" "}
                {item.mob}
              </div>

              <div className="flex justify-end">
                <a href={item.link} target="_blank">
                  <button className="border-2 border-primary text-primary font-semibold rounded-xl px-8 py-1 flex">
                    <BiMapAlt className="m-1" /> View on Map
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
