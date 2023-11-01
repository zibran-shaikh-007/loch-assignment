import React from "react";

const Dropdown = ({ options, value, onChange, className = "" }) => {
  return (
   /*  <div className={`dropdown-container ${className}`}> */
      <select className={`dropdown-container ${className}`} value={value} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
   /*  </div> */
  );
};

export default Dropdown;
