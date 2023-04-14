import Link from "next/link";
import React from "react";

import { IoIosArrowForward } from "react-icons/io";

const Breadcrumb = ({ links }) => {
  const length = links.length;
  // console.log(length);
  return (
    <section>
      <div className="flex sm:mx-[15%] mx-4 my-8 text-sm font-bold">
        {links.map((link, index) => {
          return (
            <div key={link.title} className={`pr-2 flex`}>
              <Link
                href={link.link}
                className={`${
                  index !== length - 1 ? "" : "text-tertiary"
                }  hover:text-tertiary `}
              >
                {link.title}
              </Link>
              {index !== length - 1 ? (
                <IoIosArrowForward size={15} className="mt-[3px] ml-1 -mr-1 " />
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Breadcrumb;
