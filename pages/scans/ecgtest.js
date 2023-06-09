import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import ScanForm from "@/components/ScanForm";

export default function ecgtest() {
  const BreadCrumbData = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "ECG-Test",
      link: "/scans/ecgtest",
    },
  ];

  return (
    <div>
      <Breadcrumb links={BreadCrumbData} />
      <div className="bg-white mt-20 pb-16 sm:mx-20 lg:mx-24 xl:mx-52 rounded-xl p-10 grid md:grid-cols-2 lg:grid-cols-3 gap-12 ">
        <div id="scan-back-page" className="sm:col-span-2">
          <h1 className="text-black text-2xl font-bold pb-4">ECG Test</h1>
          <p className="text-sm">
            Electrocardiography, also known as ECG or EKG, is a medical test
            that records the electrical activity of the heart. This non-invasive
            test can help diagnose and monitor a variety of heart conditions,
            including arrhythmias, heart attacks, and heart failure. ECG is
            widely used in hospitals and medical centers worldwide, and has
            become an essential tool in modern cardiology. During an ECG test,
            electrodes are placed on the chest, arms, and legs, which pick up
            the electrical signals produced by the heart. The signals are then
            recorded by a machine, which produces a graph of the {"heart's"}
            electrical activity. ECG is a quick and painless test, and can be
            performed in a variety of settings, including a {"doctor's"} office
            or hospital.
          </p>
          <br />
          <p className="text-sm">
            ECG is particularly useful for detecting abnormalities in the
            {"heart's"} rhythm, which can indicate a variety of medical
            conditions. It can also help determine the extent of damage caused
            by a heart attack, and can be used to monitor the effectiveness of
            medications and other treatments for heart disease. ECG is a safe
            and effective tool for diagnosing and monitoring a wide range of
            heart conditions, and has helped improve patient outcomes and
            quality of care.
          </p>
        </div>
        <div className="mt-10 sm:col-span-2 lg:col-span-1">
          <ScanForm scan="ECG Test"></ScanForm>
        </div>
      </div>
    </div>
  );
}
