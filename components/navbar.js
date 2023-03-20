import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex font-semibold mx-[12%] py-4 text-md">
      <Link href="/">
        <Image
          src="/AARNA 1.svg"
          alt="logo"
          width={203}
          height={40}
          className=" my-1"
        />
      </Link>
      <div className="flex mx-[8%]">
        <Link href="/book-a-test" className="py-4 px-4">
          Book a Test
        </Link>
        <Link href="/centres" className="py-4 px-4">
          Nearest Centre
        </Link>
        <Link href="/" className="py-4 px-4">
          Download Report
        </Link>
        <div className="py-4 px-4">Dehradun</div>
        <div className="py-4 px-4">Search Bar</div>
      </div>
    </div>
  );
}
