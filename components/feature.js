import Image from "next/image";

export default function Feature() {
  return (
    <div className="bg-[#423185] text-white font-semibold text-lg px-[8rem] py-10 ">
      <div className=" grid grid-cols-4 mx-[10%]">
        <div className="grid justify-items-center border-r-2 ">
          <Image
            src="/NEAREST CENTRE 1.svg"
            alt=""
            width={100}
            height={100}
            className="p-2"
          />
          Nearest Centre
        </div>
        <div className="grid justify-items-center border-r-2 ">
          <Image
            src="/BOOK A TEST 1.svg"
            alt=""
            width={100}
            height={100}
            className="p-2"
          />
          Book a Test
        </div>
        <div className="grid justify-items-center border-r-2 ">
          <Image
            src="/UPLOAD PRESCRIPTION 1.svg"
            alt=""
            width={100}
            height={100}
            className="p-2"
          />
          Upload Description
        </div>
        <div className="grid justify-items-center ">
          <Image
            src="/DOWNLOAD REPORT 1.svg"
            alt=""
            width={100}
            height={100}
            className="p-2"
          />
          Download Report
        </div>
      </div>
    </div>
  );
}
