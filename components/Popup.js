import React from "react";
import ReactDOM from "react-dom";
import BookTestForm from "./form";

const Modal = ({ selectedTest, setIsOpen }) => {
  return ReactDOM.createPortal(
    <div>
      <div
        className="fixed border-b-2 border-transparent top-0 left-0 right-0 bottom-0 bg-black/70 z-[1000] "
        onClick={() => setIsOpen(false)}
      />
      <div className="fixed border-b-2 border-transparent rounded-lg sm:w-[40%] w-[90%] top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] bg-white p-[50px] z-[1000]">
        <button
          onClick={() => setIsOpen(false)}
          className="border-gray-300 bg-secondary text-white font-bold border-2 w-[40px] h-[40px] rounded-full fixed sm:right-[calc(10%_-_75px)] right-[calc(18%_-_75px)] top-[calc(7%_-_50px)] hover:bg-primary transition ease-out duration-500"
        >
          X
        </button>

        <BookTestForm selectedTest={selectedTest} />
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
