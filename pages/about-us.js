import CoreValues from "@/components/CoreValues";
import Breadcrumb from "../components/Breadcrumb";
import Image from "next/image";
// import { ourVision } from "../public";

export default function AboutUs() {
  const breadcrumbData = [
    { title: "Home", link: "/" },
    {
      title: "About Us",
      link: "/about-us",
    },
  ];
  return (
    <div>
      <Breadcrumb links={breadcrumbData} />
      <section className="p-10 grid grid-cols-2">
        <div className="flex justify-end pr-4">
          <Image
            src="/Rectangle 20.svg"
            alt="rectangle"
            width={300}
            height={20}
          />
        </div>
        <div className="p-4">
          <div className="font-bold text-primary text-xl p-2">Our Mission</div>
          <div className="p-2 text-base">
            Lorem Ipsum is simply dummy text of the <br /> printing and
            typesetting industry. Lorem <br /> Ipsum has been the
            industry&apos;s standard <br /> dummy text ever since the 1500s,
            when an <br /> unknown printer took a galley of type and <br />{" "}
            scrambled it to make a type specimen book.
          </div>
        </div>
      </section>
      <section className="p-10 pt-0 grid grid-cols-2">
        <div className="p-4 grid justify-items-end">
          <div className="font-bold text-primary text-xl p-2">Our Vision</div>
          <div className="p-2 flex text-right text-base">
            Lorem Ipsum is simply dummy text of the <br /> printing and
            typesetting industry. Lorem <br /> Ipsum has been the
            industry&apos;s standard <br /> dummy text ever since the 1500s,
            when an <br /> unknown printer took a galley of type and <br />{" "}
            scrambled it to make a type specimen book.
          </div>
        </div>
        <div className="flex justify-start pl-4">
          <Image
            src="/Rectangle 20.svg"
            alt="our vision"
            width={300}
            height={20}
          />
        </div>
      </section>
      <section>
        <CoreValues />
      </section>
      <section>
        <div className="border-2 border-transparent rounded-2xl  mx-[15%] my-20 pb-10">
          <div className="text-2xl font-bold text-primary pt-8 pb-4 ">
            Ethos
          </div>
          <div className="flex justify-start  text-xs font-semibold text-primary">
            <button className="border-2 border-primary rounded-3xl px-4 py-1 mr-4 hover:bg-tertiary hover:text-white ease-out">
              Board of Directors
            </button>
            <button className="border-2 border-primary rounded-3xl px-4 py-1 mr-4 hover:bg-tertiary hover:text-white ease-out">
              {" "}
              Senior Management
            </button>
            <button className="border-2 border-primary rounded-3xl px-4 py-1 mr-4  hover:bg-tertiary hover:text-white ease-out">
              Administration
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
