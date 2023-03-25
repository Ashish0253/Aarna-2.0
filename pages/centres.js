import { BiMapAlt } from "react-icons/bi";
import { centreLocations } from "@/components/data";
import { SlLocationPin } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";

export default function Centres() {
  return (
    <div>
      <div className="flex justify-start  text-sm font-semibold text-primary mx-[12%] my-[2%]">
        <button className="border-2 border-primary rounded-xl px-4 py-1 mr-4 hover:bg-secondary hover:text-white ease-out">
          Doiwala
        </button>
        <button className="border-2 border-primary rounded-xl px-4 py-1 mr-4 hover:bg-secondary hover:text-white ease-out">
          Mussorie
        </button>
        <button className="border-2 border-primary rounded-xl px-4 py-1 mr-4  hover:bg-secondary hover:text-white ease-out">
          Vikas Nagar
        </button>
        <button className="border-2 border-primary rounded-xl px-4 py-1 mr-4  hover:bg-secondary hover:text-white ease-out">
          Rishikesh
        </button>
        <button className="border-2 border-primary rounded-xl px-4 py-1 mr-4  hover:bg-secondary hover:text-white ease-out">
          Dehradun
        </button>
      </div>
      <div>Search Bar</div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.868799207304!2d78.02524661493497!3d30.297796481790943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092978849052d9%3A0xe74fb09a1c56420e!2sAarna%20Diagnostic%20Centre!5e0!3m2!1sen!2sin!4v1679285323694!5m2!1sen!2sin"
          width="65%"
          height="350"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="mx-[18%] my-2 rounded-xl shadow-lg"
        ></iframe>
      </div>

      <div className="grid grid-cols-2 mx-[18%] gap-10 my-[5%]">
        {centreLocations.map((item) => {
          return (
            <div
              key={item.title}
              className="border-2 border-transparent shadow-xl rounded-xl px-8 py-8"
            >
              <div className="font-bold text-xl p-2  text-primary">
                {item.title}
              </div>
              <div className="flex p-2 text-sm">
                <SlLocationPin size={35} className="mr-2 text-primary " />{" "}
                {item.address}
              </div>
              <div className="flex p-2 text-sm">
                <BsTelephone size={22} className="mr-2 text-primary" />{" "}
                {item.mob}
              </div>

              <div className="flex justify-end">
                <button className="border-2 border-primary text-primary font-semibold rounded-xl px-8 py-1 flex">
                  <BiMapAlt className="m-1" /> View on Map
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
