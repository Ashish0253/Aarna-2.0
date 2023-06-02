import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-tertiary text-white font-bold sm:px-[28%] text-xs sm:text-base">
      <div className=" container flex justify-around p-3">
        <Link href="/doctors" className="">
          DOCTORS
        </Link>
        <Link href="/departments">DEPARTMENTS</Link>
        <Link href="/about-us">ABOUT US</Link>
        <Link href="/contact-us">CONTACT US</Link>
      </div>
    </div>
  );
}
