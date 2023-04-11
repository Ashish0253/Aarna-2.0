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
import FilterCheckBox from "@/components/FilterCheckBox";
import TestsAndPackages from "@/components/TestsAndPackages";

export default function BookATest() {
  const [tests, setTests] = useState(Tests);

  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(true);
  const [third, setThird] = useState(true);

  function isClicked() {
    var elms = document.querySelectorAll("input");
    // console.log(elms);
    // console.log(elms.checked);
    for (var i = 0; i < elms.length; i++) {
      if (elms[i].checked) {
        elms[i].classList.remove("appearance-none");
      } else {
        elms[i].classList.add("appearance-none");
      }
    }
  }

  const [sortListBy, setSortListBy] = useState("test");
  const [organ, setOrgan] = useState("");
  const [condition, setConsition] = useState("");
  console.log(sortListBy);

  function handleChangeInSortBy(event) {
    // setSortListBy(event.target.checked);
    console.log(event.target.parent);
    console.log(event.target.alt);

    const name = event.target.name.toLowerCase();

    if (event.target.checked) {
      const newItem = tests.filter((test) => {
        return test.type === name;
      });

      console.log(newItem);

      setTests(newItem);
    } else {
      setTests(Tests);
    }
  }

  function handleChangeOrgan(event) {
    // setSortListBy(event.target.checked);
    console.log(event.target.name);
    console.log(sortListBy);

    const name = event.target.name.toLowerCase();

    if (event.target.checked) {
      const newItem = tests.filter((test) => {
        return test.organ === name;
      });

      console.log(newItem);

      setTests(newItem);
    } else {
      setTests(Tests);
    }
  }

  function handleChangeInCondition(event) {
    // setSortListBy(event.target.checked);
    console.log(event.target.name);
    console.log(sortListBy);

    const name = event.target.name.toLowerCase();

    if (event.target.checked) {
      setSortListBy(name);
      const newItem = tests.filter((test) => {
        return test.organ === name;
      });

      console.log(newItem);

      setTests(newItem);
    } else {
      setSortListBy("");
      setTests(Tests);
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
      <div className="sm:grid grid-cols-4 sm:mx-[15%] my-8 gap-8 bg-[#f2f2f2]">
        {/* Filters Section  */}
        <div className="sm:block hidden border border-transparent rounded-xl h-full">
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
                <FilterCheckBox
                  // x={sortListBy}
                  parent="sort"
                  isClicked={isClicked}
                  handleChange={handleChangeInSortBy}
                >
                  Test
                </FilterCheckBox>

                <FilterCheckBox
                  // x={sortListBy}
                  parent="sort"
                  isClicked={isClicked}
                  handleChange={handleChangeInSortBy}
                >
                  Packages
                </FilterCheckBox>
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
                <FilterCheckBox
                  parent="organ"
                  isClicked={isClicked}
                  handleChange={handleChangeOrgan}
                >
                  Adrenal Gland
                </FilterCheckBox>
                <FilterCheckBox
                  parent="organ"
                  isClicked={isClicked}
                  handleChange={handleChangeOrgan}
                >
                  Bone
                </FilterCheckBox>
                <FilterCheckBox
                  parent="organ"
                  isClicked={isClicked}
                  handleChange={handleChangeOrgan}
                >
                  Heart
                </FilterCheckBox>
                <FilterCheckBox
                  parent="organ"
                  isClicked={isClicked}
                  handleChange={handleChangeOrgan}
                >
                  Kidney
                </FilterCheckBox>
                <FilterCheckBox
                  parent="organ"
                  isClicked={isClicked}
                  handleChange={handleChangeOrgan}
                >
                  Liver
                </FilterCheckBox>
                <FilterCheckBox
                  parent="organ"
                  isClicked={isClicked}
                  handleChange={handleChangeOrgan}
                >
                  Pancreas
                </FilterCheckBox>
                <FilterCheckBox
                  parent="organ"
                  isClicked={isClicked}
                  handleChange={handleChangeOrgan}
                >
                  Thyroid
                </FilterCheckBox>
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
                <FilterCheckBox
                  isClicked={isClicked}
                  handleChange={handleChangeInCondition}
                >
                  Allergy
                </FilterCheckBox>
                <FilterCheckBox
                  isClicked={isClicked}
                  handleChange={handleChangeInCondition}
                >
                  Diabetes
                </FilterCheckBox>
                <FilterCheckBox
                  isClicked={isClicked}
                  handleChange={handleChangeInCondition}
                >
                  HIV
                </FilterCheckBox>
                <FilterCheckBox
                  isClicked={isClicked}
                  handleChange={handleChangeInCondition}
                >
                  Viral Infections
                </FilterCheckBox>
                <FilterCheckBox
                  isClicked={isClicked}
                  handleChange={handleChangeInCondition}
                >
                  Fever
                </FilterCheckBox>
                <FilterCheckBox
                  isClicked={isClicked}
                  handleChange={handleChangeInCondition}
                >
                  Heart Diseases
                </FilterCheckBox>
                <FilterCheckBox
                  isClicked={isClicked}
                  handleChange={handleChangeInCondition}
                >
                  Hypertension
                </FilterCheckBox>
                <FilterCheckBox
                  isClicked={isClicked}
                  handleChange={handleChangeInCondition}
                >
                  Infertility
                </FilterCheckBox>
              </div>
            )}
          </div>
        </div>

        {/* Tests Section  */}
        <div className=" col-span-3">
          <TestsAndPackages data={tests} />
        </div>
      </div>
    </div>
  );
}
