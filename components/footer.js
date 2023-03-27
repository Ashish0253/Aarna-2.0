import Image from "next/image";
import Link from "next/link";

import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <div>
      <div className="grid grid-cols-4 text-white bg-primary px-[15%] pt-5 ">
        <div className="">
          <div className="font-bold text-lg p-4 pb-1">Patients</div>
          <ul className="p-4 font-medium text-xs">
            <li className="py-1">
              <Link href="/">Book a Test</Link>
            </li>
            <li className="py-1">
              <Link href="/" className="py-1">
                Nearest Centre
              </Link>
            </li>
            <li className="py-1">
              <Link href="/" className="py-1">
                Download Report
              </Link>
            </li>
            <li className="py-1">
              <Link href="/" className="py-1">
                Health Scans
              </Link>
            </li>
            <li className="py-1">
              <Link href="/" className="py-1">
                Promotions & Discounts
              </Link>
            </li>
            <li className="py-1">
              <Link href="/" className="py-1">
                Our Labs
              </Link>
            </li>
            <li className="py-1">
              <Link href="/" className="py-1">
                Quality
              </Link>
            </li>
            <li className="py-1">
              <Link href="/" className="py-1">
                Our Departments
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <div className="font-bold text-lg p-4 pb-1">About Us</div>
          <ul className="p-4 font-medium text-xs">
            <li className="py-1">
              <Link href="/">Our Journey</Link>
            </li>
            <li className="py-1">
              <Link href="/" className="py-1">
                Vision, Mission & Values
              </Link>
            </li>
            <li className="py-1">
              <Link href="/" className="py-1">
                Our Team
              </Link>
            </li>
            <li className="py-1">
              <Link href="/" className="py-1">
                Our Network
              </Link>
            </li>
            <li className="py-1">
              <Link href="/" className="py-1">
                Logistics Strength
              </Link>
            </li>
            <li className="py-1">
              <Link href="/" className="py-1">
                CSR
              </Link>
            </li>
            <li className="py-1">
              <Link href="/" className="py-1">
                Career
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-2 grid justify-end">
          <div>
            <Image
              src="/AARNA LOGO 1.svg"
              alt=""
              width={220}
              height={70}
              className="m-4"
            />
            <div className="p-4 text-xs">
              86, Adarsh Vihar, Kargi, Patel Nagar <br /> Bypass, Dehradun,
              Uttarakhand 248001
            </div>
          </div>

          <div className="m-4">
            <div className="font-bold text-xl ">Follow Us</div>
            <div className="flex">
              <BsFacebook className="m-2 ml-0" size={23} />
              <BsTwitter className="m-2" size={23} />
              <BsLinkedin className="m-2" size={23} />
              <BsInstagram className="m-2" size={23} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#91C02C] py-2 px-[15%] text-xs font-bold">
        <p>2023 &#169; aarnadiagnosticcentre.com. All rights reserved</p>
        <p>
          CSR | Terms of Use | Privacy Policy | Online Cancellation Policy |
          Cookie Policy
        </p>
        <p>
          Only Pathology reports available online. For X-Ray, Ultrasound, ECG,
          TMT, Echo, PFT, Uroflowmetry reports, please visit the concerned
          center where test has been conducted
        </p>
      </div>
    </div>
  );
}
