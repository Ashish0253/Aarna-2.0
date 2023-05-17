import { useRouter } from "next/router";
import { testsInConditions } from "@/constants/searchTestAndPackages";
import Breadcrumb from "@/components/Breadcrumb";

import React from "react";
import Image from "next/image";

const Temp = () => {
  const router = useRouter();
  const sectionTitle = router.query.temp;

  const index = testsInConditions.findIndex(
    (pkg) => pkg.title === sectionTitle
  );

  const BreadCrumbData = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Search Tests",
      link: "/search-test",
    },
    {
      title: sectionTitle,
      link: "/search-test/" + sectionTitle,
    },
  ];

  return (
    <div>
      <Breadcrumb links={BreadCrumbData} />
      <div className="bg-white my-20 pb-16 sm:mx-20 lg:mx-24 xl:mx-52 rounded-xl p-10 grid grid-cols-2 lg:grid-cols-2 gap-12 ">
        <div className="text-center sm:col-span-2 flex justify-around">
          <div className="grid justify-items-center">
            <Image
              src={testsInConditions[index].icon}
              alt={testsInConditions[index].title}
              width={200}
              height={100}
            />
            <h1 className="text-black text-4xl font-bold py-4">
              {testsInConditions[index].title}
            </h1>
          </div>

          <div>
            <h3 className="font-bold">
              Tests Related to - {testsInConditions[index].title}
            </h3>
            <ol className="text-md font-semibold pt-3 text-teal-600" type="1">
              {testsInConditions[index].tests.map((test, i) => (
                <li key={i}>{test}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temp;
