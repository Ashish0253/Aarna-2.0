import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "../../constants/footer";

import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="flex-row-reverse sm:grid">
      <div className=" grid sm:grid-cols-4 text-white bg-tertiary px-4 sm:px-[15%] pt-5">
        {footerLinks.map((footerLink, index) => (
          <div
            key={footerLink.title}
            className={`${index !== footerLinks.length - 1 ? "" : "pl-4"} pt-8`}
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
            <div className="px-4 text-sm font-semibold">
              <p>
                Helpline(24x7) - <a href="tel:9997579898">+91 9997579898</a>
              </p>
              <p>
                Radiology - <a href="tel:9068208080">+91 9068208080</a>
              </p>
              <p>
                Pathology - <a href="tel:8648808080">+91 8648808080</a>
              </p>
            </div>
          </div>

          <div className="m-4">
            <div className="font-bold text-xl ">Follow Us</div>
            <div className="flex">
              <Link
                href="https://m.facebook.com/aarnadiagnosticcentre"
                target="_blank"
              >
                <Image
                  src="/social/Facebook_svg.svg"
                  alt="facebook"
                  width={25}
                  height={25}
                  className="m-2 ml-0"
                />
              </Link>
              <Link
                href="https://instagram.com/aarnadiagnosticc?igshid=MmJiY2I4NDBkZg=="
                target="_blank"
              >
                <Image
                  src="/social/Group.svg"
                  alt="instagram"
                  width={25}
                  height={25}
                  className="m-2"
                />
              </Link>
              <Link href="https://wa.me/919997579898" target="_blank">
                <Image
                  src="/social/WhatsApp_svg.svg"
                  alt="linkedin"
                  width={25}
                  height={25}
                  className="m-2"
                />
              </Link>
              <Link href="https://g.co/kgs/8ZpfVX" target="_blank">
                <Image
                  src="/social/Google_svg.svg"
                  alt="twitter"
                  width={25}
                  height={25}
                  className="m-2"
                />
              </Link>
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
          Only Pathology reports available online. For X-Ray, Ultrasound, ECG
          reports, please visit the concerned center where test has been
          conducted
        </p>
        <p>
          Site designed and created by{" "}
          <a
            className="hover:text-white"
            href="tel:7503909232"
            target="_blank"
            rel="noopener noreferrer"
          >
            AV WebWorks
          </a>
        </p>
      </div>
    </div>
  );
}
