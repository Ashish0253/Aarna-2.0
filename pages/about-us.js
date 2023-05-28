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
      <section className="p-10 sm:grid grid-cols-2">
        <div className="sm:flex justify-end pr-4">
          <Image
            src="/aboutUs/Our Mission.svg"
            alt="rectangle"
            width={300}
            height={20}
          />
        </div>
        <div className="p-4">
          <div className="font-bold text-primary text-xl p-2">Our Mission</div>
          <p className="p-2 text-base sm:max-w-[60%]">
            At Aarna Diagnostic Centre, our mission is to provide accurate,
            timely diagnostics and exceptional patient care, utilizing
            cutting-edge technology and a highly trained team. We strive to
            promote preventive healthcare through community outreach,
            collaborate with healthcare providers, and maintain ethical
            practices, fostering a healthier society and sustainable approach to
            healthcare.
          </p>
        </div>
      </section>
      <section className="p-10 pt-0 sm:grid grid-cols-2">
        <div className="p-4 grid sm:justify-items-end">
          <div className="font-bold text-primary text-xl p-2">Our Vision</div>
          <div className="p-2 flex sm:text-right text-base sm:max-w-[60%]">
            To become the most trusted and accessible diagnostic service
            provider, promoting health and well-being through exceptional
            patient care, cutting-edge technology, and continuous innovation in
            the field of diagnostics.
          </div>
        </div>
        <div className="sm:flex justify-start pl-4">
          <Image
            src="/aboutUs/Our Vision.svg"
            alt="our vision"
            width={300}
            height={20}
          />
        </div>
      </section>
      <section className="mb-[200px]">
        <CoreValues />
      </section>

      {/* managemnet ki photos */}
      {/* <section>
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
      </section> */}
    </div>
  );
}
