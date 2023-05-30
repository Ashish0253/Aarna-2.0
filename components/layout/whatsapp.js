import Image from "next/image";
import Link from "next/link";
import React from "react";

const Whatsapp = () => {
  return (
    <div className="fixed w-full justify  sm:left-[90%] left-[85%] sm:bottom-[6%] bottom-24 h-5 text-[3rem] z-[1] cursor-pointer text-tertiary">
      <Link href="https://wa.me/917838723092" target="_blank">
        <Image
          alt="whatsapp"
          src="/social/WhatsApp_svg.svg"
          width={50}
          height={25}
        />
      </Link>
    </div>
  );
};

export default Whatsapp;
