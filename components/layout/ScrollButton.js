import React, { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
// import { Button } from "./Styles";

function ScrollButton() {
  const [visible, setVisible] = useState(false);

  function toggleVisible() {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  return (
    <div className="fixed w-full  justify sm:left-[95%] left-[85%] sm:bottom-[8%] bottom-14 h-5 text-[3rem] z-[1] cursor-pointer text-secondary">
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </div>
  );
}

export default ScrollButton;
