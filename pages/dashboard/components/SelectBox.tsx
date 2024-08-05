import React, { useEffect, useState } from "react";
import Select, { SingleValue } from "react-select";

interface SelectBoxProps {
  options: { value: string; label: string }[];
  onChange?: (
    selectedOption: SingleValue<{ value: string; label: string }>
  ) => void;
  value?: SingleValue<{ value: string; label: string }>;
  width?: string;
  defaultValue?: SingleValue<{ value: string; label: string }> | undefined;
}

const SelectBox: React.FC<SelectBoxProps> = ({
  options,
  onChange,
  value,
  width,
  defaultValue,
}) => {
  const [selectedValue, setSelectedValue] = useState<
    SingleValue<{ value: string; label: string }>
  >(defaultValue ?? null);

  useEffect(() => {
    if (value) {
      setSelectedValue(value);
    }
  }, [value]);

  const handleChange = (
    option: SingleValue<{ value: string; label: string }>
  ) => {
    setSelectedValue(option);
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <Select
      options={options}
      onChange={handleChange}
      value={selectedValue}
      placeholder=""
      components={{ IndicatorSeparator: () => null }}
      styles={{
        container: (provided) => ({
          ...provided,
          width: width,
        }),
        control: (provided, state) => ({
          ...provided,
          borderRadius: "0px",
          border: state.isFocused ? provided.border : provided.border,
          boxShadow: "none",
          borderColor: state.isFocused ? "#c1c9d3" : provided.borderColor,
          "&:hover": {
            borderColor: state.isFocused ? "#c1c9d3" : provided.borderColor,
          },
        }),
        option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isFocused
            ? "#F2F9FF"
            : state.isSelected
            ? "transparent"
            : "white",
          color: state.isSelected ? "#000" : state.isFocused ? "#000" : "black",
          cursor: "pointer",
          fontSize: "14px",
        }),
        menu: (provided) => ({
          ...provided,
          marginTop: 0,
        }),
        menuList: (provided) => ({
          ...provided,
          padding: 0,
        }),
        singleValue: (provided) => ({
          ...provided,
          fontSize: "14px",
          whiteSpace: "normal",
          color: "#000",
          fontWeight: 450,
        }),
        dropdownIndicator: (provided) => ({
          ...provided,
        }),
      }}
    />
  );
};

export default SelectBox;
