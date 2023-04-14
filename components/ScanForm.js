import React, { useState } from "react";
import axios from "axios";

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
        alert("Form Submitted Successfully!!");
        setName("");
        setNumber("");
      });
  };

  return (
    <div className="rounded-xl overflow-hidden">
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
            className="mt-6 placeholder:text-gray-500 border-[1px] border-gray-300 bg-gray-100 px-4"
          />
        </div>
        <div className="flex justify-center items-center">
          <input
            type="text"
            placeholder="Mobile"
            required
            onChange={(e) => setNumber(e.target.value)}
            value={phone}
            className="mt-6 placeholder:text-gray-500 border-[1px] border-gray-300 bg-gray-100 px-4"
          />
        </div>
        <div className="flex justify-center items-center">
          <input
            type="text"
            placeholder="Scan Type"
            required
            // onChange={(e) => setName(e.target.value)}
            value={props.scan}
            className="mt-6 placeholder:text-black border-[1px] border-gray-300 bg-gray-100 px-4"
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
    </div>
  );
}
