import Breadcrumb from "@/components/Breadcrumb";
import Phone from "../public/phone.svg";
import Clock from "../public/clock.svg";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import popup from "../public/popUpimg.jpg";

export default function ContactUs() {
  const BreadData = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Contact Us",
      link: "/contact-us",
    },
  ];

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Form_Type: "Contact Us Form",
      Patient_Name: fname + " " + lname,
      Mobile: phone,
      Address: address,
    };

    axios
      .post(
        "https://sheet.best/api/sheets/f935b9d9-4400-489a-8b5f-5eed992f2e2c",
        data
      )
      .then((response) => {
        var element2 = document.getElementById("back-page");
        element2.classList.add("blur-sm");
        var element = document.getElementById("popup");
        element.classList.add("block");
        element.classList.remove("hidden");
        setTimeout(() => {
          var element2 = document.getElementById("back-page");
          element2.classList.remove("blur-sm");
          element.classList.remove("block");
          element.classList.add("hidden");
        }, 3000);
        setFname("");
        setLname("");
        setAddress("");
        setNumber("");
        setFname("");
        setLname("");
        setAddress("");
        setNumber("");
      });
  };

  return (
    <div className="">
      <Breadcrumb links={BreadData} />
      <div
        id="back-page"
        className=" xl:mx-56 md:mx-44 sm:mx-32 mx-4  bg-white rounded-xl mb-20 shadow-xl"
      >
        <div className="px-12 pt-8 pb-8">
          <h1 className="text-teal-500 text-xl font-bold">Contact Us</h1>
          <hr class="w-full h-[2px] my-4 mx-auto bg-gray-100 border-0 dark:bg-gray-500" />

          <div className="grid sm:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-500">
                If you have any medical, or lab process related query, reach out
                to us and {"don'"}t hesitate to ask. We are here to provide you
                transparent, seamless, and informative care.
              </p>
            </div>
            <div></div>
            {/* main in left */}
            <div className="pt-8">
              <h1 className="text-teal-500 font-bold text-lg">Call Centre:</h1>
              <h1 className="text-teal-500 font-bold text-md">
                For Queries, Appointments & Home Visits
              </h1>
              <div className="grid sm:grid-cols-2 pt-2">
                <div className="flex justify-start items-start">
                  <Image
                    alt=""
                    width={20}
                    height={20}
                    src={Clock}
                    className="mr-2"
                  ></Image>
                  <p className="text-md text-gray-500 font-bold">
                    8:00 AM to 8:00 PM
                  </p>
                </div>
                <div className="flex justify-start items-start">
                  <Image
                    alt=""
                    width={15}
                    height={15}
                    src={Phone}
                    className="pt-1 mr-2"
                  ></Image>
                  <p className="text-md text-gray-500 font-bold">
                    +91 9997579898
                  </p>
                </div>
              </div>
              <hr className="w-full h-[1px] my-4 mx-auto bg-gray-100 border-0 dark:bg-gray-400" />

              <h1 className="text-teal-500 font-bold text-lg pt-4">
                Helpline {"No's"}
              </h1>
              <div className="flex justify-start items-start pt-2">
                <Image
                  alt=""
                  width={20}
                  height={20}
                  src={Clock}
                  className="mr-2"
                ></Image>
                <p className="text-md text-gray-500 font-bold">
                  8:00 AM to 8:00 PM
                </p>
              </div>
              <div className="flex justify-start items-start pt-2">
                <Image
                  alt=""
                  width={15}
                  height={15}
                  src={Phone}
                  className="pt-1 mr-2"
                ></Image>
                <p className="text-md text-gray-500 font-bold">
                  +91 9997579898
                </p>
              </div>
              <hr className="w-full h-[1px] my-4 mx-auto bg-gray-100 border-0 dark:bg-gray-400" />

              {/* form */}
              <section>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <p className="text-md text-gray-500 font-bold">
                      Give us a call to book your{" "}
                    </p>
                    <p className="text-md text-gray-500 font-bold">
                      Home Collection Visit
                    </p>
                  </div>
                  <div className="">
                    <a href="tel:7503909232">
                      <button className=" bg-orange-500 text-black text-xsm sm:text-sm font-semibold w-full p-2 rounded-xl flex justify-center items-center gap-2">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="m-1 text-black"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        Book Test Now
                      </button>
                    </a>
                  </div>
                </div>

                <form
                  className=" bg-whtie py-4 sm:grid sm:grid-cols-2 gap-8 gap-y-4"
                  autoComplete="off"
                  onSubmit={handleSubmit}
                >
                  <div className="">
                    <input
                      type="text"
                      placeholder="First Name"
                      required
                      onChange={(e) => setFname(e.target.value)}
                      value={fname}
                      className="mt-6 placeholder:text-gray-500 rounded-lg p-2 border-[1px] border-gray-300 bg-gray-200 w-full"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      placeholder="Last Name"
                      required
                      onChange={(e) => setLname(e.target.value)}
                      value={lname}
                      className="mt-6 placeholder:text-gray-500 rounded-lg p-2 border-[1px] border-gray-300 bg-gray-200 w-full"
                    />
                  </div>
                  <div className="col-span-2">
                    <input
                      type="text"
                      placeholder="Phone No."
                      required
                      onChange={(e) => setNumber(e.target.value)}
                      value={phone}
                      className="placeholder:text-gray-500 rounded-lg p-2 border-[1px] border-gray-300 bg-gray-200 w-full"
                    />
                  </div>
                  <div className="col-span-2">
                    <input
                      type="text"
                      placeholder="Address"
                      required
                      onChange={(e) => setAddress(e.target.value)}
                      value={address}
                      className="placeholder:text-gray-500 rounded-lg p-2 border-[1px] border-gray-300 bg-gray-200 w-full"
                    />
                  </div>
                  <div></div>
                  <div className="flex justify-center items-center">
                    <button
                      type="submit"
                      className="bg-orange-500 hover:bg-[#ee8264] text-black font-semibold text-center text-md my-3 py-1 w-full rounded-lg"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </section>
            </div>
            {/* main right div */}
            <div className="pt-8">
              <h1 className="text-teal-500 font-bold text-lg">Main Centre:</h1>
              <p className="text-md text-gray-500">
                86, Adarsh Vihar, Kargi Road
              </p>
              <p className="text-md text-gray-500">Dehradun, Uttrakhand</p>

              <h1 className="text-teal-500 font-bold text-md pt-8">
                Home Visit:{" "}
                <span className="text-md text-gray-500 font-semibold">
                  9997579898
                </span>
              </h1>
              <h1 className="text-teal-500 font-bold text-md ">
                Reception:{" "}
                <span className="text-md text-gray-500 font-semibold">
                  +91 9997579898
                </span>
              </h1>
              <h1 className="text-teal-500 font-bold text-md ">
                Time:{" "}
                <span className="text-md text-gray-500 font-semibold">
                  Open 24 hours
                </span>
              </h1>
              <h1 className="text-teal-500 font-bold text-md ">
                Sunday:{" "}
                <span className="text-md text-gray-500 font-semibold">
                  Open 24 hours
                </span>
              </h1>
              <hr className="w-full h-[1px] my-4 mx-auto bg-gray-100 border-0 dark:bg-gray-400" />

              <h1 className="text-teal-500 font-bold text-lg pt-8">
                North Centre:
              </h1>
              <p className="text-md text-gray-500">
                195/172, Chakrata Road, Ballupur
              </p>
              <p className="text-md text-gray-500">Dehradun, Uttrakhand</p>

              <h1 className="text-teal-500 font-bold text-md pt-8">
                Home Visit:{" "}
                <span className="text-md text-gray-500 font-semibold">
                  9068508080
                </span>
              </h1>
              <h1 className="text-teal-500 font-bold text-md ">
                Reception:{" "}
                <span className="text-md text-gray-500 font-semibold">
                  +91 9068508080
                </span>
              </h1>
              <h1 className="text-teal-500 font-bold text-md ">
                Time:{" "}
                <span className="text-md text-gray-500 font-semibold">
                  8:00 AM to 8:00 PM
                </span>
              </h1>
              <h1 className="text-teal-500 font-bold text-md ">
                Sunday:{" "}
                <span className="text-md text-gray-500 font-semibold">
                  Closed
                </span>
              </h1>
              <hr className="w-full h-[1px] my-4 mx-auto bg-gray-100 border-0 dark:bg-gray-400" />
            </div>
          </div>
        </div>
      </div>
      <div id="popup" className="z-9 fixed bottom-1/3 right-1/3 hidden">
        <Image src={popup} height={400} width={400} alt=""></Image>
      </div>
    </div>
  );
}
