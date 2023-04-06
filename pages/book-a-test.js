import Carousel from "@/components/carousel";
import { Tests } from "@/constants/tests";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsCurrencyRupee } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdDownloadForOffline } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

import { filters } from "../constants/filters";
import Breadcrumb from "../components/Breadcrumb";

export default function BookATest() {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(true);
  const [third, setThird] = useState(true);

  function isClicked() {
    var elms = document.querySelectorAll("input");
    console.log(elms);
    console.log(elms.checked);
    for (var i = 0; i < elms.length; i++) {
      if (elms[i].checked) {
        elms[i].classList.remove("appearance-none");
      } else {
        elms[i].classList.add("appearance-none");
      }
    }
  }

  const breadcrumbData = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Test & Packages",
      link: "/book-a-test",
    },
  ];

  return (
    <div>
      <Carousel />
      <Breadcrumb links={breadcrumbData} />
      <div className="grid grid-cols-4 mx-[15%] my-8 gap-8 bg-[#f2f2f2]">
        {/* Filters Section  */}
        <div className="border border-transparent rounded-xl h-full">
          <div className="p-8 border-b-2 rounded-t-xl border-gray-300 bg-white text-lg font-semibold">
            Filters
          </div>
          {/* {filters.map((filter) => {
            return (
              <div key={filter.title}>
                <div>{filter.title}</div>
              </div>
            );
          })} */}

          <div className="p-8 border-b-2 border-gray-300  bg-white ">
            <div className="flex text-lg font-semibold justify-between">
              Sort list by{" "}
              <button onClick={() => setFirst(!first)}>
                <RiArrowDropDownLine className="w-7 h-7" />
              </button>
              {/* <RiArrowDropDownLine className="mx-20" size={30} /> */}
            </div>
            {first && (
              <div className="p-2 text-sm font-medium">
                <div className="p-1">
                  <input
                    id="my-checkbox"
                    type="checkbox"
                    name="Test"
                    onClick={isClicked}
                    className="h-3 appearance-none w-3 border-2 rounded-sm border-yellow-400 accent-yellow-400"
                  />
                  <div className="inline px-1">Test</div>
                </div>
                <div className="p-1">
                  <input
                    type="checkbox"
                    name="Packages"
                    id="my-checkbox"
                    onClick={isClicked}
                    className="h-3 appearance-none w-3 border-2 rounded-sm border-yellow-400 accent-yellow-400"
                  />
                  <div className="inline px-1">Packages</div>
                </div>
              </div>
            )}
          </div>
          <div className="p-8 border-b-2 border-gray-300  bg-white ">
            {" "}
            <div className="text-lg font-semibold flex justify-between">
              Organ{" "}
              <button onClick={() => setSecond(!second)}>
                <RiArrowDropDownLine className="w-7 h-7" />
              </button>
            </div>
            {second && (
              <div className="p-2 text-sm font-medium">
                <div className="p-1">
                  <input
                    type="checkbox"
                    name="Adrenal Gland"
                    id="my-checkbox"
                    onClick={isClicked}
                    className="h-3 appearance-none w-3 border-2 rounded-sm border-yellow-400 accent-yellow-400"
                  />
                  <div className="inline px-1">Adrenal Gland</div>
                </div>
                <div className="p-1">
                  <input
                    type="checkbox"
                    name="Bone"
                    id="my-checkbox"
                    onClick={isClicked}
                    className="h-3 appearance-none w-3 border-2 rounded-sm border-yellow-400 accent-yellow-400"
                  />
                  <div className="inline px-1">Bone</div>
                </div>
                <div className="p-1">
                  <input
                    type="checkbox"
                    name="Heart"
                    id="my-checkbox"
                    onClick={isClicked}
                    className="h-3 appearance-none w-3 border-2 rounded-sm border-yellow-400 accent-yellow-400"
                  />
                  <div className="inline px-1">Heart</div>
                </div>
                <div className="p-1">
                  <input
                    type="checkbox"
                    name="Kidney"
                    id="my-checkbox"
                    onClick={isClicked}
                    className="h-3 appearance-none w-3 border-2 rounded-sm border-yellow-400 accent-yellow-400"
                  />
                  <div className="inline px-1">Kidney</div>
                </div>
                <div className="p-1">
                  <input
                    type="checkbox"
                    name="Liver"
                    id="my-checkbox"
                    onClick={isClicked}
                    className="h-3 appearance-none w-3 border-2 rounded-sm border-yellow-400 accent-yellow-400"
                  />
                  <div className="inline px-1">Liver</div>
                </div>
                <div className="p-1">
                  <input
                    type="checkbox"
                    name="Pancreas"
                    id="my-checkbox"
                    onClick={isClicked}
                    className="h-3 appearance-none w-3 border-2 rounded-sm border-yellow-400 accent-yellow-400"
                  />
                  <div className="inline px-1">Pancreas</div>
                </div>
                <div className="p-1">
                  <input
                    type="checkbox"
                    name="Thyroid"
                    id="my-checkbox"
                    onClick={isClicked}
                    className="h-3 appearance-none w-3 border-2 rounded-sm border-yellow-400 accent-yellow-400"
                  />
                  <div className="inline px-1">Thyroid</div>
                </div>
              </div>
            )}
          </div>
          <div className="p-8 border-gray-300  bg-white rounded-b-xl">
            <div className="text-lg font-semibold flex justify-between">
              Condition{" "}
              <button onClick={() => setThird(!third)}>
                <RiArrowDropDownLine className="w-7 h-7" />
              </button>
            </div>
            {third && (
              <div className="p-2 text-sm font-medium">
                <div className="p-1">
                  <input
                    type="checkbox"
                    name="Allergy"
                    id="my-checkbox"
                    onClick={isClicked}
                    className="h-3 appearance-none w-3 border-2 rounded-sm border-yellow-400 accent-yellow-400"
                  />
                  <div className="inline px-1">Allergy</div>
                </div>
                <div className="p-1">
                  <input
                    type="checkbox"
                    name="Diabetes"
                    id="my-checkbox"
                    onClick={isClicked}
                    className="h-3 appearance-none w-3 border-2 rounded-sm border-yellow-400 accent-yellow-400"
                  />
                  <div className="inline px-1">Diabetes</div>
                </div>
                <div className="p-1">
                  <input
                    type="checkbox"
                    name="HIV"
                    id="my-checkbox"
                    onClick={isClicked}
                    className="h-3 appearance-none w-3 border-2 rounded-sm border-yellow-400 accent-yellow-400"
                  />
                  <div className="inline px-1">HIV</div>
                </div>
                <div className="p-1">
                  <input
                    type="checkbox"
                    name="Viral Infections"
                    id="my-checkbox"
                    onClick={isClicked}
                    className="h-3 appearance-none w-3 border-2 rounded-sm border-yellow-400 accent-yellow-400"
                  />
                  <div className="inline px-1">Viral Infections</div>
                </div>
                <div className="p-1">
                  <input
                    type="checkbox"
                    name="Fever"
                    id="my-checkbox"
                    onClick={isClicked}
                    className="h-3 appearance-none w-3 border-2 rounded-sm border-yellow-400 accent-yellow-400"
                  />
                  <div className="inline px-1">Fever</div>
                </div>
                <div className="p-1">
                  <input
                    type="checkbox"
                    name="Heart Diseases"
                    id="my-checkbox"
                    onClick={isClicked}
                    className="h-3 appearance-none w-3 border-2 rounded-sm border-yellow-400 accent-yellow-400"
                  />
                  <div className="inline px-1">Heart Diseases</div>
                </div>
                <div className="p-1">
                  <input
                    type="checkbox"
                    name="Hypertension"
                    id="my-checkbox"
                    onClick={isClicked}
                    className="h-3 appearance-none w-3 border-2 rounded-sm border-yellow-400 accent-yellow-400"
                  />
                  <div className="inline px-1">Hypertension</div>
                </div>
                <div className="p-1">
                  <input
                    type="checkbox"
                    name="Infertility"
                    id="my-checkbox"
                    onClick={isClicked}
                    className="h-3 appearance-none w-3 border-2 rounded-sm border-yellow-400 accent-yellow-400"
                  />
                  <div className="inline px-1">Infertility</div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Tests Section  */}
        <div className="col-span-3 grid grid-cols-2 gap-8 my-0 bg-[#f2f2f2]">
          {Tests.map((item) => {
            return (
              <div
                key={item.title}
                className="border-2 border-transparent rounded-xl p-4 text-sm shadow-lg bg-white"
              >
                <div className="text-base font-semibold text-primary flex">
                  <Image
                    src="/microscope 1.svg"
                    alt="microscope"
                    width={30}
                    height={30}
                    className="mx-1"
                  />
                  {item.title}
                </div>
                <div className="p-3">{item.time}</div>
                <div className="flex text-xs px-3">
                  Specimen:{" "}
                  <div className="font-semibold"> {item.specimen} </div>
                </div>
                <div className="flex justify-end font-semibold px-3">
                  <BsCurrencyRupee className="my-1" /> {item.price}
                </div>

                <div className="text-xs flex justify-between border-t-2 pt-4 mt-4 border-dashed border-gray-200">
                  <div className="flex">
                    <button className=" text-white border-2 border-transparent shadow-lg rounded-xl px-2 py-1 m-1 bg-primary">
                      Buy Now
                    </button>{" "}
                    <button className="flex border-2 border-transparent shadow-lg rounded-xl px-2 py-1 m-1">
                      <div className="mx-[2px]">
                        <HiOutlineShoppingBag size={13} />
                      </div>
                      Add to Cart
                    </button>
                  </div>
                  <Link
                    href="/"
                    className=" flex text-xs px-2 text-[#12A7A7] font-medium py-2 m-1 "
                  >
                    <MdDownloadForOffline className="m-[1px]" />
                    Download Report
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
