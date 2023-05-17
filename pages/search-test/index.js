import Breadcrumb from "@/components/Breadcrumb";

import Image from "next/image";
import Link from "next/link";

import {
  conditions,
  lifeStyleDisorders,
} from "@/constants/searchTestAndPackages";
import { useEffect, useState } from "react";
import { ImSearch } from "react-icons/im";

export default function Condition() {
  const breadcrumbData = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Search Test and Packages",
      link: "/seach-test-packages",
    },
  ];

  const [data, setData] = useState(conditions);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const totalPages = Math.ceil(data.length / productsPerPage);

  // const handleClick = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const renderConditions = () => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentConditions = data.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );

    return currentConditions.map((item) => (
      <div key={item.name}>
        <Link href={item.link} className="grid justify-items-center">
          <Image src={item.icon} alt={item.name} width={150} height={100} />
          <div className="text-base font-bold max-w-[140px] flex justify-items-center text-black">
            <p className="text-center">{item.name}</p>
          </div>
        </Link>
      </div>
    ));
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          className={`list-none ${
            i === currentPage ? "text-yellow-400" : "null"
          }`}
          key={i}
          onClick={() => handleClick(i)}
        >
          {i}
        </li>
      );
    }

    return pageNumbers;
  };
  return (
    <>
      <Breadcrumb links={breadcrumbData} />
      <div className="bg-white border-2 border-transparent rounded-2xl sm:mx-[15%] mx-4 my-10 pb-5 px-10 shadow-xl">
        <div className="sm:flex justify-between">
          <div className="text-xl font-bold text-black pt-8 pb-2">
            Search Test and Packages
          </div>
          <div className="pt-8">
            <SearchBar data={conditions} setData={setData} />
          </div>
        </div>
        <div className="flex flex-wrap justify-center pt-5 gap-4">
          {renderConditions()}
        </div>
        <div className="flex justify-center pt-10 gap-4">
          <button onClick={() => handlePrev()} className="">
            Prev
          </button>
          {/* <div className="flex">
          <button>{renderPageNumbers()}</button>
        </div> */}
          <button onClick={() => handleNext()}>Next</button>
        </div>
      </div>
    </>
  );
}

const SearchBar = ({ data, setData }) => {
  const [query, setQuery] = useState("");

  const [filteredData, setFilteredData] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      const filteredData = data.filter((entry) => {
        return entry.name.toLowerCase().includes(query.toLowerCase());
      });
      setData(filteredData);

      query === "" ? setData(data) : setData(filteredData);
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [query, data, setData, filteredData]);

  // const handleSearch = () => {};

  return (
    <div className="flex justify-center mx-3">
      <div className="border-2 border-transparent rounded-md p-2 bg-white flex justify-between w-full  sm:w-[500px]">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          className="outline-none w-[450px]"
          onChange={handleInputChange}
        />
        <ImSearch className="m-1" />
      </div>
      {/* <button onClick={() => handleSearch()}>Search</button> */}
    </div>
  );
};
