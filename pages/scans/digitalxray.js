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
      <div className="bg-white mt-20 pb-16 sm:mx-20 lg:mx-24 xl:mx-52 rounded-xl p-10 grid md:grid-cols-2 lg:grid-cols-3 gap-12 ">
        <div id="scan-back-page" className="sm:col-span-2">
          <h1 className="text-black text-2xl font-bold pb-4">Digital X-Ray</h1>
          <p className="text-sm">
            Digital X-ray, also known as computed radiography, is a medical
            imaging technique that uses X-rays to produce detailed images of the
            {"body's"} internal structures. This non-invasive and painless test
            can help diagnose and monitor a variety of medical conditions,
            including bone fractures, lung disease, and dental problems. Digital
            X-ray is widely used in hospitals and medical centers worldwide, and
            has become an essential tool in modern diagnostic medicine. During a
            digital X-ray test, the patient is positioned in front of a special
            plate that captures the X-ray images. The images are then processed
            by a computer, which produces detailed, high-quality images of the
            internal structures. Digital X-ray is a quick and painless test, and
            can be performed in a variety of settings, including a {"doctor's"}
            office or hospital.
          </p>
          <br />
          <p className="text-sm">
            Digital X-ray is particularly useful for detecting and diagnosing
            bone fractures, as well as identifying abnormalities in the lungs,
            such as pneumonia or lung cancer. It can also be used to identify
            dental problems, such as cavities or impacted teeth. Digital X-ray
            is a safe and effective tool for diagnosing and monitoring a wide
            range of medical conditions, and has helped improve patient outcomes
            and quality of care.
          </p>
        </div>
        <div className="mt-10 sm:col-span-2 lg:col-span-1">
          <ScanForm scan="X-Ray"></ScanForm>
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
