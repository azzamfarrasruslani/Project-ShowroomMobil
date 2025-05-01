import React from "react";
import Select from "react-select";

const CustomSelect = ({ options, onChange, className }) => {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#E5E7EB", // Warna abu-abu seperti Tailwind bg-gray-200
      borderRadius: "8px",
      padding: "2px",
      border: "none",
      boxShadow: "none",
      "&:hover": {
        backgroundColor: "#D1D5DB", // bg-gray-300 saat hover
      },
    }),
    option: (provided, state) => ({
      ...provided,
      //   backgroundColor: state.isSelected ? '#1E40AF' : 'white', // Tailwind blue-900 saat dipilih
      color: state.isSelected ? "white" : "black",
      "&:hover": {
        backgroundColor: "#A2A0A1", // Hover warna biru terang
      },
    }),
  };

  return (
    <Select
      options={options}
      onChange={onChange}
      className={className}
      styles={customStyles}
    />
  );
};

export default CustomSelect;
