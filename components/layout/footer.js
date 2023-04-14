import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "../../constants/footer";

import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="flex-row-reverse sm:grid">
      <div className=" grid sm:grid-cols-4 text-white bg-tertiary px-4 sm:px-[15%]  pt-5 ">
        {footerLinks.map((footerLink, index) => (
          <div
            key={footerLink.title}
            className={`${index !== footerLinks.length - 1 ? "" : "pl-4"}`}
          >
            <div className="font-bold text-xl p-4 pl-0 pb-1">
              {footerLink.title}
            </div>
            <ul className="p-4 pl-0 font-semibold text-sm">
              {footerLink.links.map((item) => (
                <li key={item.name} className="py-1">
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-2 grid justify-start sm:justify-end">
          <div>
            <Image
              src="/AARNA LOGO 1.svg"
              alt=""
              width={220}
              height={70}
              className="m-4"
            />
            <div className="p-4 text-sm">
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

      <div className="bg-[#FFD500] py-2 px-2 sm:px-[15%] text-black text-xs font-base">
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
