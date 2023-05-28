import Link from "next/link";
import Image from "next/image";
import { SlLocationPin } from "react-icons/sl";
import { GiHamburgerMenu } from "react-icons/gi";
import { Tb360View } from "react-icons/tb";

export default function Navbar() {
  return (
    <div className="bg-white flex justify-between sm:justify-start font-bold sm:px-[15%] px-4 py-4 text-base sm:none ">
      <div>
        <Link href="/" className="">
          <Image
            src="/AARNA 1.svg"
            alt="logo"
            width={200}
            height={30}
            className="w-[180px] h-[60px]"
          />
        </Link>
      </div>
      <div className="hidden sm:flex ml-7 pt-2 font-bold justify-between">
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
      </div>
      <div className="pt-4 sm:mx-8 hover:scale-110 ease-in duration-300">
        <Link
          href={"https://www.360virtualrealitytours.in/AARNADIAGNOSTICCENTRE/"}
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-black px-2 py-1 sm:px-3 sm:py-2 text-sm rounded-lg border-transparent bg-quaternary text-white
          "
        >
          360&deg; Virtual Tour
        </Link>
      </div>
      {/* <div className="sm:hidden flex justify-items-end">
        <GiHamburgerMenu size={30} className="mt-2 text-primary" />
      </div> */}
    </div>
  );
}
