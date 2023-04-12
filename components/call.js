import Image from "next/image";
import { FiPhoneCall } from "react-icons/fi";

export default function Call() {
  return (
    <div className="bg-white border-2 border-transparent rounded-2xl flex-col grid sm:grid-cols-5 sm:mx-[15%] mx-4 my-20  shadow-lg">
      <div className="flex-row sm:flex font-bold text-primary text-3xl col-span-2">
        <Image src="/CALL.svg" alt="" width={150} height={10} />
        <div className="py-7 px-4 ">
          Free Home <br /> Visit Facility
        </div>
      </div>
      <div className="grid justify-end pr-10 col-span-3 p-5">
        <div className="font-bold text-base p-2">
          Give us a call to Book your Test/Home Collection Visit
        </div>
        <button className="flex-row flex justify-center border-2 border-transparent bg-primary text-white rounded-lg p-2">
          <FiPhoneCall className="m-1 text-yellow-400" />{" "}
          <div className="px-1 text-lg font-semibold">
            Call Now: +91 1234567890
          </div>
        </button>
      </div>
    </div>
  );
}
