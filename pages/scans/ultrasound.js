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
    </div>
  );
}
