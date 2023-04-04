import Image from "next/image";

export default function HealthScans() {
  return (
    <div className="bg-white border-2 border-transparent rounded-2xl mx-[15%]  my-14 pb-10 shadow-xl">
      <div className="text-2xl font-bold text-black px-10 py-4 pt-8 ">
        Health Scans
      </div>
      <div className="grid grid-cols-4 justify-items-center text-md font-bold text-primary px-10 mx-5">
        <div className="grid justify-items-center">
          <Image
            src="/CT SCAN 1.svg"
            alt=""
            width={120}
            height={150}
            className="m-2"
          />
          CT Scan
        </div>
        <div className="grid justify-items-center">
          <Image
            src="/ULTRASOUND 1.svg"
            alt=""
            width={120}
            height={150}
            className="m-2"
          />
          Ultra Sound
        </div>
        <div className="grid justify-items-center">
          <Image
            src="/XRAY 1.svg"
            alt=""
            width={120}
            height={150}
            className="m-2"
          />
          X-Ray
        </div>
        <div className="grid justify-items-center">
          <Image
            src="/ECG 1.svg"
            alt=""
            width={120}
            height={150}
            className="m-2"
          />
          ECG
        </div>
      </div>
    </div>
  );
}
