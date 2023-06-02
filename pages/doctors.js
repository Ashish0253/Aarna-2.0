import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import { useState } from "react";

export default function Doctors() {
  const [selectedOption, setSelectedOption] = useState("pathologists");
  const breadcrumbData = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Doctors",
      link: "/doctors",
    },
  ];

  const pathologists = [
    {
      name: "Dr Anil Rajput",
      img: "/doctors/anilRajput.jpeg",
    },
    {
      name: "Dr Pranay Paul",
      img: "/doctors/pranayPaul.jpeg",
    },
  ];

  const radiologists = [
    {
      name: "Dr Sachin K",
      img: "/doctors/sachinK.jpeg",
    },
    {
      name: "Dr Shiva Rastogi",
      img: "/doctors/shivaRastogi.jpeg",
    },
  ];
  return (
    <div>
      <Breadcrumb links={breadcrumbData} />
      <div className="border-2 border-transparent rounded-2xl mx-2 sm:mx-[15%] my-5 pb-10">
        <div className="flex justify-start  text-xs font-semibold text-primary">
          <button
            onClick={() => setSelectedOption("pathologists")}
            className={`border-2 border-primary rounded-xl px-8 py-1 mr-4 hover:bg-secondary hover:text-white ease-out ${
              selectedOption === "pathologists" ? "bg-secondary text-white" : ""
            }`}
          >
            Pathologists
          </button>
          <button
            onClick={() => setSelectedOption("radiologists")}
            className={`border-2 border-primary rounded-xl px-8 py-1 mr-4 hover:bg-secondary hover:text-white ease-out ${
              selectedOption === "radiologists" ? "bg-secondary text-white" : ""
            }`}
          >
            {" "}
            Radiologists
          </button>
        </div>
        <div className="">
          {selectedOption === "pathologists" ? (
            <div className="sm:flex gap-8 px- py-4">
              {pathologists.map((pathologist) => (
                <div
                  key={pathologist.name}
                  className="bg-white mx-10 sm:mx-0 my-4 grid justify-center rounded-xl"
                >
                  <div className="sm:m-10 sm:mb-2 m-5">
                    <Image
                      alt={pathologist.name}
                      src={pathologist.img}
                      width={200}
                      height={200}
                      className="rounded-xl"
                    />
                  </div>
                  <p className="text-center p-2 font-bold">
                    {pathologist.name}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="sm:flex gap-8 py-4">
              {radiologists.map((radiologist) => (
                <div
                  key={radiologist.name}
                  className="bg-white mx-10 sm:mx-0 my-4 grid justify-center rounded-xl"
                >
                  <div className="sm:m-10 sm:mb-2 m-5 ">
                    <Image
                      alt={radiologist.name}
                      src={radiologist.img}
                      width={200}
                      height={200}
                      className="rounded-xl"
                    />
                  </div>

                  <p className="text-center p-2 font-bold">
                    {radiologist.name}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
