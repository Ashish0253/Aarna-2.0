import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-tertiary text-white font-semibold px-[27%] text-sm">
      <div className=" container flex justify-around p-2">
        <Link href="/" className="">
          DOCTORS
        </Link>
        <Link href="/departments">DEPARTMENTS</Link>
        <Link href="/about-us">ABOUT US</Link>
        <Link href="/">CONTACT US</Link>
      </div>
    </div>
  );
}
