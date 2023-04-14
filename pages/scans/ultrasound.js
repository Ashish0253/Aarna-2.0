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
      <div className="bg-white my-20 sm:mx-20 lg:mx-24 xl:mx-44 rounded-xl p-10 grid md:grid-cols-2 lg:grid-cols-3 gap-12 ">
        <div className="sm:col-span-2">
          <h1 className="text-black text-2xl font-bold pb-4">Ultrasound</h1>
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
          <ScanForm scan="Ultrasound"></ScanForm>
        </div>
      </div>
    </div>
  );
}
