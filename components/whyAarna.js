import Image from "next/image";
import { why, quality, offer } from "../constants/whyArna";

export default function WhyAarna() {
  return (
    <div>
      <div className=" border-2 border-transparent rounded-2xl mx-[15%] my-10 pb-3 text-black">
        <div className="font-bold text-2xl py-4 border-b-4 border-black">
          Why Aarna Diagnostic Centre
        </div>

        <div className="grid grid-cols-3">
          {why.map((item) => (
            <div key={item.title} className="p-8 flex">
              <Image src={item.img} width={60} height={20} alt={item.title} />
              <div className="ml-4 mt-1">
                <div className="font-bold text-xl text-tertiary">
                  {item.title}
                </div>
                <div>{item.content}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-tertiary flex justify-end underline text-base p-1 font-semibold m-4">
          <button> Explore &gt;&gt;</button>{" "}
        </div>
      </div>

      <div className="border-2 border-transparent rounded-2xl mx-[15%] my-10 pb-3 text-black">
        <div className="font-bold text-2xl py-4 border-b-4 border-black">
          Offer & Anouncement
        </div>
        <div className="flex justify-center mt-10">
          {offer.map((item) => {
            return (
              <div
                key={item.title}
                className="border-2 border-transparent rounded-md p-10 bg-white m-2 grid justify-items-center"
              >
                <Image
                  src={item.img}
                  alt={item.img}
                  height={30}
                  width={200}
                  className="rounded-lg"
                />
                <p className="pt-4 font-bold">{item.content}</p>
              </div>
            );
          })}
        </div>
        <div className="text-tertiary flex justify-end underline text-base p-1 font-semibold m-4">
          <button> View All</button>{" "}
        </div>
      </div>

      <div className="border-2 border-transparent rounded-2xl mx-[15%] my-10 pb-3 text-black">
        <div className="font-bold text-2xl py-4 border-b-4 border-black">
          Quality
        </div>
        <div className="grid grid-cols-3">
          {quality.map((item) => (
            <div key={item.title} className="p-8 flex">
              <Image src={item.img} width={60} height={20} alt={item.title} />

              <div className="ml-4 mt-1">
                <div className="font-bold text-xl text-tertiary">
                  {item.title}
                </div>
                <div>{item.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
