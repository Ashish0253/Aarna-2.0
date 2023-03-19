import { FiPhoneCall } from "react-icons/fi";

export default function Call() {
  return (
    <div className="border-2 border-transparent rounded-2xl grid grid-cols-5 mx-[16%] my-20 p-5 shadow-lg">
      <div className="font-bold text-primary text-2xl col-span-2">
        Free Home Visit Facility
      </div>
      <div className="grid justify-end pr-10 col-span-3">
        <div className="font-bold text-base p-2">
          Give us a call to Book your Test/Home Collection Visit
        </div>
        <div className="flex justify-center border-2 border-transparent bg-primary text-white rounded-lg p-2">
          <FiPhoneCall className="m-1" />{" "}
          <div className="px-1 text-lg font-semibold">
            Call Now: +91 1234567890
          </div>
        </div>
      </div>
    </div>
  );
}
