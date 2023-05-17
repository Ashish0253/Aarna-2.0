import { useRouter } from "next/router";
import { healthPackages } from "@/constants/healthPackages";
import Breadcrumb from "@/components/Breadcrumb";
import React, { useState } from "react";
import PackagesForm from "@/components/PackagesForm";
// import ScanForm from "@/components/ScanForm";

const Packages = () => {
  const router = useRouter();
  const packageTitle = router.query.packages;

  // Find the index of the health package with a matching title
  const index = healthPackages.findIndex((pkg) => pkg.title === packageTitle);

  const BreadCrumbData = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: packageTitle,
      link: "/" + packageTitle,
    },
  ];

  const tests = index >= 0 ? healthPackages[index].tests : [];

  return (
    <div>
      <Breadcrumb links={BreadCrumbData} />
      {/* {index >= 0 && <h1>{healthPackages[index].tests}</h1>} */}
      <div className="bg-white my-20 pb-16 sm:mx-20 lg:mx-24 xl:mx-52 rounded-xl p-10 grid md:grid-cols-2 lg:grid-cols-2 gap-12 ">
        <div
          id="scan-back-page"
          className="text-center sm:col-span-2 lg:col-span-1"
        >
          {index >= 0 && (
            <h1 className="text-black text-4xl font-bold py-4">
              {healthPackages[index].title}
            </h1>
          )}
          {index >= 0 && (
            <p className="text-lg font-medium">
              Number of Total Tests Included:{" "}
              {healthPackages[index].numberOfTests}
            </p>
          )}
          <ol className="text-md pt-3 text-teal-600" type="1">
            {tests.map((test, i) => (
              <li key={i}>{test}</li>
            ))}
          </ol>
          {index >= 0 && (
            <p className="text-lg py-3 font-medium">
              Parameters : {healthPackages[index].parameters}
            </p>
          )}
          {index >= 0 && (
            <p className="text-lg font-semibold line-through text-teal-700 ">
              Price: {healthPackages[index].price}
            </p>
          )}
          {index >= 0 && (
            <p className="py-5 text-2xl font-bold text-teal-700 ">
              Offer Price: {healthPackages[index].offerPrice}
            </p>
          )}
        </div>
        <div className="mt-2 sm:col-span-2 lg:col-span-1">
          <PackagesForm package={packageTitle}></PackagesForm>
        </div>
      </div>
    </div>
  );
};

export default Packages;
