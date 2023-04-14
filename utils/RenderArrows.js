import React from "react";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ButtonBase } from "@mui/material";

const RenderArrows = ({ slider, arrowColor }) => {
  //   const slider = React.useRef(null); // This is the line that was causing the error
  return (
    <div className="slider-arrow-packages">
      <ButtonBase
        className="arrow-btn-prev-packages"
        onClick={() => slider?.current?.slickPrev()}
      >
        <ArrowBackIosIcon fontSize="large" sx={{ color: arrowColor }} />
      </ButtonBase>
      <ButtonBase
        className="arrow-btn-next-packages"
        onClick={() => slider?.current?.slickNext()}
      >
        <ArrowForwardIosIcon fontSize="large" sx={{ color: arrowColor }} />
      </ButtonBase>
    </div>
  );
};

export default RenderArrows;
