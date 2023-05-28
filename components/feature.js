import Image from "next/image";
import useIntersection from "@/hooks/useIntersection";
import { useRef } from "react";
import Link from "next/link";

export default function Feature({ setSidebar, ref3 }) {
  // const ref2 = useRef(null);

  // const isInViewport2 = useIntersection(ref2, "0px");
  // console.log("isInViewport2: ", isInViewport2);
  // setSidebar(!isInViewport2);

  return (
    <div
      ref={ref3}
      className="bg-tertiary text-white font-semibold text-xs sm:text-base sm:px-[18%] sm:py-4 py-1 "
    >
      <div className=" grid grid-cols-4 sm:mx-[10%]">
        <Link href="/" className="grid justify-items-center border-r-2 ">
          <Image
            src="/UPLOAD PRESCRIPTION 1.svg"
            alt=""
            width={100}
            height={100}
            className="sm:p-2 p-3 h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] "
          />
          <div className="sm:flex justify-items-center grid">
            <p className="">Upload</p>
            <p className="sm:pl-1">Prescription</p>
          </div>
        </Link>
        <Link
          href="/book-a-test"
          className="grid justify-items-center border-r-2 "
        >
          <Image
            src="/BOOK A TEST 1.svg"
            alt=""
            width={100}
            height={100}
            className="sm:p-2 p-3 h-[80px] w-[80px] sm:h-[100px] sm:w-[100px]"
          />
          <p>Book a Test</p>
        </Link>
        <Link
          href="/nearest-centre"
          className="grid justify-items-center border-r-2 "
        >
          <Image
            src="/NEAREST CENTRE 1.svg"
            alt=""
            width={100}
            height={100}
            className="sm:p-2 p-3 h-[80px] w-[80px] sm:h-[100px] sm:w-[100px]"
          />
          <div className="sm:flex justify-items-center grid">
            <p className="sm:pr-1">Nearest</p>
            <p className="">Centre</p>
          </div>
        </Link>
        <Link href="/" className="grid justify-items-center ">
          <Image
            src="/DOWNLOAD REPORT 1.svg"
            alt=""
            width={100}
            height={100}
            className="sm:p-2 p-3 h-[80px] w-[80px] sm:h-[100px] sm:w-[100px]"
          />
          <div className="sm:flex justify-items-center grid">
            <p className="sm:pr-1">Download</p>
            <p className="">Report</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
