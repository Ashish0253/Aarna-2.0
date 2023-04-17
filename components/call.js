import Image from "next/image";
import { FiPhoneCall } from "react-icons/fi";

export default function Call() {
  return (
    <div className="bg-white border-2 border-transparent rounded-2xl flex-col grid sm:grid-cols-5 sm:mx-[15%] mx-4 my-10  shadow-lg">
      <div className="flex font-bold text-primary text-3xl sm:col-span-2 col-span-3 justify-between ">
        <Image src="/CALL.svg" alt="" width={150} height={10} />
        <div className="py-7 px-4 text-tertiary sm:text-3xl text-xl">
          Free Home <br className="sm:block hidden" /> Visit Facility
        </div>
      </div>
      <div className="grid sm:justify-end justify-center pr-10 col-span-3 p-5">
        <div className="font-bold text-base text-black p-2 flex justify-items-center">
          <p>Give us a call to Book your Test/Home Collection Visit</p>
        </div>
        <button className=" flex justify-center border-2 border-transparent bg-[#f27d27] text-white rounded-lg p-2">
          <FiPhoneCall className="m-1 text-black" />{" "}
          <div className="px-1 text-sm text-black  font-bold sm:text-base">
            Call Now to Book Your Test
          </div>
        </button>
      </div>
    </div>
  );
}
