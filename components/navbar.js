import Link from "next/link";
import Image from "next/image";
import { SlLocationPin } from "react-icons/sl";

export default function Navbar() {
  return (
    <div className="bg-white flex font-semibold px-[15%] py-2 text-[13px]">
      <Link href="/">
        <Image
          src="/AARNA 1.svg"
          alt="logo"
          width={200}
          height={30}
          className=""
        />
      </Link>
      <div className="flex ml-[5%] pt-2">
        <Link href="/book-a-test" className="pt-2 px-4">
          Book a Test
        </Link>
        <Link href="/centres" className="pt-2 px-4">
          Nearest Centre
        </Link>
        <Link href="/" className="pt-2 px-4">
          Download Report
        </Link>
        <div className="pt-1 px-4 text-xs">
          {" "}
          <div className="flex">
            <SlLocationPin size={20} className="m-2 ml-0 text-primary inline" />
            <input
              className="border-b-2 border-primary rounded-md px-2 text-xs focus:border-primary inline w-[100px]"
              placeholder="Search Location..."
            />
          </div>
        </div>
        <div className="py-1 px-2">
          <input
            className="border-2 border-gray-100 rounded-md px-2 text-xs py-2 focus:border-primary"
            placeholder="Search Test & Packages"
          />
        </div>
      </div>
    </div>
  );
}
