import Image from "next/image";

export default function HealthScans() {
  return (
    <div className="border-2 border-transparent rounded-2xl  mx-[13%] my-20 pb-10 shadow-primary">
      <div className="text-2xl font-bold text-primary px-14 py-8 ">
        Health Scans
      </div>
      <div className="grid grid-cols-4 justify-items-center text-lg font-bold text-primary px-10">
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
