import Link from "next/link";
import Image from "next/image";
import { SlLocationPin } from "react-icons/sl";

export default function Navbar() {
  return (
    <div className="bg-white flex font-bold px-[15%] py-4 text-base sm:none ">
      <Link href="/" className="">
        <Image
          src="/AARNA 1.svg"
          alt="logo"
          width={200}
          height={30}
          className=""
        />
      </Link>
      <div className="  hidden sm:flex ml-7 pt-2 font-bold justify-between">
        <Link href="/book-a-test" className="pt-2 px-4">
          Book a Test
        </Link>
        <Link href="/nearest-centre" className="pt-2 px-4">
          Nearest Centre
        </Link>
        <Link href="/" className="pt-2 px-4">
          Download Report
        </Link>
        <div className="pt-1 px-2 text-xs flex">
          {" "}
          <SlLocationPin size={15} className="my-2  text-primary inline" />
          <input
            className="border-b-2 outline-none border-primary rounded-lg px-2 s text-xs focus:border-primary w-[120px]"
            placeholder="Search Location..."
          />
        </div>
        {/* <div className="py-1 px-4">
          <input
            className="border-2 border-gray-100 rounded-lg px-2 text-xs py-1 focus:border-primary bg-[url('/Search.svg')] bg-no-repeat bg-[13rem]"
            placeholder="Search Test & Packages"
            size={28}
          />
        </div> */}
      </div>
    </div>
  );
}
