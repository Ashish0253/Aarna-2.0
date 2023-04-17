import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import ScanForm from "@/components/ScanForm";

export default function ultrasound() {
  const BreadCrumbData = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Ultrasound",
      link: "/scans/ultrasound",
    },
  ];

  return (
    <div>
      <Breadcrumb links={BreadCrumbData} />
      <div className="bg-white mt-20 pb-16 sm:mx-20 lg:mx-24 xl:mx-52 rounded-xl p-10 grid md:grid-cols-2 lg:grid-cols-3 gap-12 ">
        <div id="scan-back-page" className="sm:col-span-2">
          <h1 className="text-black text-2xl font-bold pb-4">Ultrasound</h1>
          <p className="text-sm">
            Ultrasound, also known as sonography, is a medical imaging technique
            that uses high-frequency sound waves to create images of the
            {"body's"}
            internal structures. This non-invasive and painless test can help
            diagnose a variety of medical conditions, including pregnancy
            complications, gallbladder disease, and musculoskeletal injuries.
            Ultrasound is widely used in hospitals and medical centers
            worldwide, and has become an essential tool in modern diagnostic
            medicine.
          </p>
          <br />
          <p className="text-sm">
            During an ultrasound test, a technician applies a special gel to the
            area of the body being examined, and then uses a wand-like device
            called a transducer to send sound waves through the body. The sound
            waves bounce back off the internal structures, and are then
            converted into images by a computer. Ultrasound is safe and
            non-invasive, and can be performed quickly and easily in a variety
            of settings.
          </p>
        </div>
        <div className="mt-10 sm:col-span-2 lg:col-span-1">
          <ScanForm scan="Ultrasound"></ScanForm>
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
