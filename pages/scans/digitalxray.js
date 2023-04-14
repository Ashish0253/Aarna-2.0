import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import ScanForm from "@/components/ScanForm";

export default function digitalxray() {
  const BreadCrumbData = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Digital-X-Ray",
      link: "/scans/digitalxray",
    },
  ];

  return (
    <div>
      <Breadcrumb links={BreadCrumbData} />
      <div className="bg-white my-20 sm:mx-20 lg:mx-24 xl:mx-44 rounded-xl p-10 grid md:grid-cols-2 lg:grid-cols-3 gap-12 ">
        <div className="sm:col-span-2">
          <h1 className="text-black text-2xl font-bold pb-4">Digital X-Ray</h1>
          <p className="text-sm">
            Computed tomography or CT/CAT scan is a commonly ordered image
            diagnostic test that combines X-ray images from several angles and
            compiles them into a single image using 2D and 3D image
            reconstruction. The cross-sectional images or ‘slices’ can be taken
            for any part or structure of the body, including the bones, soft
            tissues, and blood vessels. Unlike an X-ray that provides only one
            image, a CT scan provides multiple images for enhanced diagnostic
            accuracy and clarity. CT scan can be performed for a variety of
            conditions, including internal injuries, trauma, tumours, fractures,
            etc. This imaging test is also conducted as a guide for surgeries,
            radiation therapy, and biopsy, as well as to monitor the
            effectiveness of ongoing treatments. CT scan is a non-invasive and
            painless procedure that is generally conducted without the need for
            a contrast dye. However, for certain medical conditions, a
            Contrast-CT scan is conducted, wherein the contrast material is
            administered either orally or intravenously (IV). The contrast
            material is especially useful when testing soft tissue, as it blocks
            the X-rays, which makes the target area appear white on the scan. It
            has little to no side effects and gets flushed out via urine in 24
            hours.
          </p>
        </div>
        <div className="mt-10 sm:col-span-2 lg:col-span-1">
          <ScanForm scan="X-Ray"></ScanForm>
        </div>
      </div>

      <div className="sm:mx-20 lg:mx-24 xl:mx-44 bg-white rounded-xl overflow-hidden mb-20 shadow-lg">
        <div class="relative overflow-x-auto sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase dark:text-black">
              <tr>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-[#fcbe57]">
                  Scan Name
                </th>
                <th scope="col" class="px-6 py-3 dark:bg-[#fcbe57]">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-gray-600 dark:bg-white"
                >
                  Heart CT Scan
                </th>
                <td class="px-6 py-4 dark:text-gray-600">₹500</td>
              </tr>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-gray-600 dark:bg-white"
                >
                  Brain CT Scan
                </th>
                <td class="px-6 py-4 dark:text-gray-600">₹800</td>
              </tr>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-gray-600 dark:bg-white"
                >
                  Back CT Scan
                </th>
                <td class="px-6 py-4 dark:text-gray-600">₹1200</td>
              </tr>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-gray-600 dark:bg-white"
                >
                  Complete Body CT Scan
                </th>
                <td class="px-6 py-4 dark:text-gray-600">₹1600</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
