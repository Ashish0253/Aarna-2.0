import React, { useState } from "react";
import Image from "next/image";
// import Link from "next/link";
// import { HiOutlineShoppingBag } from "react-icons/hi";
// import { MdDownloadForOffline } from "react-icons/md";
import { BsCurrencyRupee } from "react-icons/bs";

const TestsAndPackages = ({ data, setIsOpen, setSelectedTest }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const totalPages = Math.ceil(data.length / productsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleBook = (event) => {
    setIsOpen(true);
    console.log(event.target.value);
    setSelectedTest(event.target.value);
  };

  const renderTestAndPackages = () => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

    return currentProducts.map((item) => (
      <div
        key={item.title}
        className="border-2 border-transparent rounded-xl p-4 sm:m-0 m-4  text-sm shadow-lg bg-white"
      >
        <div className="text-lg font-semibold text-primary flex">
          <Image
            src="/microscope 1.svg"
            alt="microscope"
            width={30}
            height={30}
            className="mx-2"
          />
          {item.title}
        </div>
        <div className="p-3">{item.time}</div>
        <div className="flex text-sm px-3">
          Specimen:{" "}
          <span className="font-semibold px-1"> {item.specimen} </span>
        </div>
        <div className="flex text-base justify-end font-semibold px-3">
          <BsCurrencyRupee className="my-1" /> {item.price}
        </div>

        <div className="text-sm flex justify-end border-t-2 pt-4 mt-4 border-dashed border-gray-200">
          <button
            onClick={(event) => handleBook(event)}
            value={item.title}
            className=" text-white border-2 border-transparent shadow-lg rounded-xl px-3 py-2 m-1 bg-primary"
          >
            Book Now
          </button>{" "}
        </div>
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
    <div>
      <div className="sm:grid grid-cols-2 gap-8 my-0 bg-[#f2f2f2]">
        {renderTestAndPackages()}
      </div>
      <div>
        <button>Prev</button>
        <div className="flex">
          <button>{renderPageNumbers()}</button>
        </div>
        <button>Next</button>
      </div>
    </div>
  );
};

export default TestsAndPackages;
