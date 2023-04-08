import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdDownloadForOffline } from "react-icons/md";
import { BsCurrencyRupee } from "react-icons/bs";

const TestsAndPackages = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const totalPages = Math.ceil(data.length / productsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderTestAndPackages = () => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

    return currentProducts.map((item) => (
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
          Specimen: <div className="font-semibold"> {item.specimen} </div>
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
      <div className="grid grid-cols-2 gap-8 my-0 bg-[#f2f2f2]">
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
