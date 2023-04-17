import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import ScanForm from "@/components/ScanForm";

export default function ctscan() {
  const BreadCrumbData = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "CT-Scan",
      link: "/scans/ctscan",
    },
  ];

  return (
    <div>
      <Breadcrumb links={BreadCrumbData} />
      <div className="bg-white mt-20 pb-16 sm:mx-20 lg:mx-24 xl:mx-52 rounded-xl p-10 grid md:grid-cols-2 lg:grid-cols-3 gap-12 ">
        <div id="scan-back-page" className="sm:col-span-2">
          <h1 className="text-black text-2xl font-bold pb-4">CT Scan</h1>
          <p className="text-sm">
            A CT scan, also known as a computed tomography scan, is a medical
            imaging procedure that uses X-rays and computer processing to create
            detailed images of the {"body'"}s internal structures. This
            non-invasive and painless test can help diagnose and monitor a
            variety of conditions, including cancer, heart disease, and
            neurological disorders. CT scans are widely used in hospitals and
            medical centers worldwide, and have revolutionized the field of
            diagnostic imaging. Learn more about CT scans and their uses by
            consulting with a healthcare provider.
          </p>
          <br />
          <p className="text-sm">
            CT scans are particularly useful for detecting changes in the{" "}
            {"body's"}
            tissues and organs that may not be visible with traditional X-ray
            imaging. They can also provide more detailed information about the
            size, shape, and location of tumors and other abnormalities, making
            them an important tool in cancer diagnosis and treatment planning.
            In addition, CT scans can be used to identify blood clots, monitor
            the progression of heart disease, and evaluate injuries to the brain
            and spinal cord.
          </p>
        </div>
        <div className="mt-10 sm:col-span-2 lg:col-span-1">
          <ScanForm scan="CT-Scan"></ScanForm>
        </div>
      </div>

      <div className="sm:mx-20 lg:mx-24 xl:mx-52 pb-16 bg-white rounded-xl overflow-hidden mb-20 shadow-lg">
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
