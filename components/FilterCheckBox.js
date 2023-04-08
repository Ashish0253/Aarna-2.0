import React from "react";

const FilterCheckBox = ({ children, isClicked, handleChange, parent }) => {
  console.log(children.toLowerCase());

  return (
    <div className="p-1">
      <input
        id="my-checkbox"
        type="checkbox"
        // checked={x === "test"}
        alt={parent}
        name={children}
        onClick={isClicked}
        onChange={handleChange}
        className="h-3 appearance-none w-3 border-2 rounded-sm border-yellow-400 accent-yellow-400"
      />
      <div className="inline px-1">{children}</div>
    </div>
  );
};

export default FilterCheckBox;
