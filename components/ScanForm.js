import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import popup from "../public/popUpimg.jpg";
import Person from "../public/healthyPerson.png";

export default function ScanForm(props) {
  const [name, setName] = useState("");
  const [phone, setNumber] = useState("");
  // const [scan, setScan] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Form_Type: "Scans Form",
      Patient_Name: name,
      Mobile: phone,
      scan: props.scan,
    };

    axios
      .post(
        "https://sheet.best/api/sheets/f935b9d9-4400-489a-8b5f-5eed992f2e2c",
        data
      )
      .then((response) => {
        var element = document.getElementById("popup");
        element.classList.add("block");
        element.classList.remove("hidden");
        setTimeout(() => {
          element.classList.remove("block");
          element.classList.add("hidden");
        }, 3000);
        setName("");
        setNumber("");
      });
  };

  return (
    <div className="rounded-xl overflow-hidden">
      <div className=" bg-[#fcf6e4] text-sm pt-6 font-medium text-black flex justify-start items-start px-3">
        <Image src={Person} height={80} width={80} className="" alt=""></Image>
        <p className="py-3">{"'"}I only trust Aarna for all my scans.{"'"}</p>
      </div>
      <h1 className="text-center px-10 bg-[#fcbe57] font-semibold text-lg">
        Get a call back
      </h1>
      <form
        className=" bg-gray-100 px-10 pb-4"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-center items-center">
          <input
            type="text"
            placeholder="Name"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="placeholder:text-sm mt-6 placeholder:text-gray-500 border-[1px] border-gray-300 bg-gray-100 px-4"
          />
        </div>
        <div className="flex justify-center items-center">
          <input
            type="text"
            placeholder="Mobile"
            required
            onChange={(e) => setNumber(e.target.value)}
            value={phone}
            className="placeholder:text-sm mt-6 placeholder:text-gray-500 border-[1px] border-gray-300 bg-gray-100 px-4"
          />
        </div>
        <div className="flex justify-center items-center">
          <input
            type="text"
            placeholder="Scan Type"
            required
            // onChange={(e) => setName(e.target.value)}
            value={props.scan}
            className="placeholder:text-sm mt-6 placeholder:text-black border-[1px] border-gray-300 bg-gray-100 px-4"
          />
        </div>
        <div className="py-8 flex justify-center items-center">
          <button
            type="submit"
            className="bg-[#e65632] hover:bg-[#ee8264] text-white text-center text-md py-1 px-4 rounded-2xl"
          >
            Submit
          </button>
        </div>
      </form>
      <div id="popup" className="z-9 fixed bottom-1/3 right-1/3 hidden">
        <Image src={popup} height={400} width={400} alt=""></Image>
      </div>
    </div>
  );
}
