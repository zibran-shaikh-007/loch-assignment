import React from "react";

const Dropdown = ({ options, value, onChange, className = "" }) => {
  return (
    <select className={`dropdown-container ${className}`} value={value} onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
