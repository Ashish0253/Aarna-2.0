import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex font-semibold px-[8%] py-4 text-md">
      <Image
        src="/AARNA 1.svg"
        alt="logo"
        width={203}
        height={40}
        className="mx-12 my-1"
      />
      <div className="flex mx-14">
        <Link href="/" className="py-4 px-4">
          Book a Test
        </Link>
        <Link href="/" className="py-4 px-4">
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
