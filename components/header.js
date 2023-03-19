import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-[#423185] text-white font-semibold px-[30%] text-md">
      <div className=" container flex justify-around p-3">
        <Link href="/" className="">
          DOCTORS
        </Link>
        <Link href="/">DEPARTMENTS</Link>
        <Link href="/">ABOUT US</Link>
        <Link href="/">CONTACT US</Link>
      </div>
    </div>
  );
}
