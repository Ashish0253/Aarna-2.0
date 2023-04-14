import Image from "next/image";

export default function Carousel() {
  return (
    <div className="bg-[#d9d9d9] sm:h-[320px] sm:w-[1728] ">
      <Image
        src="/banner/TEST BANNER.jpg"
        alt={"test"}
        width={1920}
        height={100}
      />
    </div>
  );
}
