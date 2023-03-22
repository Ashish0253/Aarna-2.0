import Carousel from "@/components/carousel";
import { Test } from "@/components/data";
import Image from "next/image";
import Link from "next/link";
import { BsCurrencyRupee } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdDownloadForOffline } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function BookATest() {
  return (
    <div>
      <Carousel />
      <div className="grid grid-cols-4 mx-[15%] my-4 gap-8">
        {/* Filters Section  */}
        <div className="border-2 border-transparent shadow-lg rounded-lg h-[870px]">
          <div className="p-8 border-b-2 border-gray-300 text-lg font-semibold">
            Filters
          </div>
          <div className="p-8 border-b-2 border-gray-300 ">
            <div className="flex text-lg font-semibold">
              Sort list by
              {/* <RiArrowDropDownLine className="mx-20" size={30} /> */}
            </div>
            <div className="p-2 text-sm font-medium">
              <div className="p-1">
                <input type="checkbox" name="Test" className="" />
                <div className="inline px-1">Test</div>
              </div>
              <div className="p-1">
                <input type="checkbox" name="Packages" />
                <div className="inline px-1">Packages</div>
              </div>
            </div>
          </div>
          <div className="p-8 border-b-2 border-gray-300 ">
            {" "}
            <div className="text-lg font-semibold">Organ</div>
            <div className="p-2 text-sm font-medium">
              <div className="p-1">
                <input type="checkbox" name="Adrenal Gland" />
                <div className="inline px-1">Adrenal Gland</div>
              </div>
              <div className="p-1">
                <input type="checkbox" name="Bone" />
                <div className="inline px-1">Bone</div>
              </div>
              <div className="p-1">
                <input type="checkbox" name="Heart" />
                <div className="inline px-1">Heart</div>
              </div>
              <div className="p-1">
                <input type="checkbox" name="Kidney" />
                <div className="inline px-1">Kidney</div>
              </div>
              <div className="p-1">
                <input type="checkbox" name="Liver" />
                <div className="inline px-1">Liver</div>
              </div>
              <div className="p-1">
                <input type="checkbox" name="Pancreas" />
                <div className="inline px-1">Pancreas</div>
              </div>
              <div className="p-1">
                <input type="checkbox" name="Thyroid" />
                <div className="inline px-1">Thyroid</div>
              </div>
            </div>
          </div>
          <div className="p-8 border-gray-300 ">
            <div className="text-lg font-semibold">Condition</div>
            <div className="p-2 text-sm font-medium">
              <div className="p-1">
                <input type="checkbox" name="Allergy" />
                <div className="inline px-1">Allergy</div>
              </div>
              <div className="p-1">
                <input type="checkbox" name="Diabetes" />
                <div className="inline px-1">Diabetes</div>
              </div>
              <div className="p-1">
                <input type="checkbox" name="HIV" />
                <div className="inline px-1">HIV</div>
              </div>
              <div className="p-1">
                <input type="checkbox" name="Viral Infections" />
                <div className="inline px-1">Viral Infections</div>
              </div>
              <div className="p-1">
                <input type="checkbox" name="Fever" />
                <div className="inline px-1">Fever</div>
              </div>
              <div className="p-1">
                <input type="checkbox" name="Heart Diseases" />
                <div className="inline px-1">Heart Diseases</div>
              </div>
              <div className="p-1">
                <input type="checkbox" name="Hypertension" />
                <div className="inline px-1">Hypertension</div>
              </div>
              <div className="p-1">
                <input type="checkbox" name="Infertility" />
                <div className="inline px-1">Infertility</div>
              </div>
            </div>
          </div>
        </div>
        {/* Tests Section  */}
        <div className="col-span-3 grid grid-cols-2 gap-8 my-4">
          {Test.map((item) => {
            return (
              <div
                key={item.title}
                className="border-2 border-transparent rounded-lg p-4 text-sm shadow-lg"
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
                <div className="flex justify-end font-semibold">
                  <BsCurrencyRupee className="my-1" /> {item.price}
                </div>

                <div className="text-xs flex">
                  <button className=" text-white border-2 border-transparent shadow-lg rounded-xl px-2 py-1 m-1 bg-primary">
                    Buy Now
                  </button>{" "}
                  <button className="flex border-2 border-transparent shadow-lg rounded-xl px-2 py-1 m-1">
                    {/* <HiOutlineShoppingBag /> */}
                    Add to Cart
                  </button>
                  <Link
                    href="/"
                    className=" flex text-xs px-2 text-[#12A7A7] font-medium py-2 m-1"
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
