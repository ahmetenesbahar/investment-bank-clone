import React, { useState } from "react";
import { FilterContainer, FilterText } from "./Filter.stlyes";
import Select, { SingleValue } from "react-select";
import { colors } from "@/styles/colors";

const options = [
  { value: "all", label: "Tümü" },
  { value: "internet_branch", label: "İnternet Şubesi" },
  { value: "isCep", label: "İşCep" },
  { value: "isIpad", label: "İşPad" },
  { value: "maximumMobile", label: "Maximum Mobil" },
  { value: "telefon", label: "Telefon Şubesi" },
  { value: "isWap", label: "İşWap" },
  { value: "customer_service", label: "Müşteri Hizmetleri" },
];

const Filter: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<
    SingleValue<(typeof options)[0]>
  >(options[0]);
  return (
    <FilterContainer>
      <FilterText>Anında Bankacılık Kanalı:</FilterText>
      <Select
        value={selectedOption}
        options={options}
        onChange={(selectedOption) => setSelectedOption(selectedOption)}
        components={{ IndicatorSeparator: () => null }}
        styles={{
          container: (provided) => ({
            ...provided,

            fontSize: "14px",
            color: `${colors.black}`,
            width: "45%",
            marginTop: "0.5rem",
          }),
          control: (provided, state) => ({
            ...provided,
            borderRadius: "0px",
            border: state.isFocused ? provided.border : provided.border,
            boxShadow: "none",
            borderColor: state.isFocused
              ? `  ${colors.secondaryBorderColor}`
              : `  ${colors.secondaryBorderColor}`,
            "&:hover": {
              borderColor: state.isFocused
                ? `  ${colors.secondaryBorderColor}`
                : `  ${colors.secondaryBorderColor}`,
            },
          }),
          singleValue: (provided) => ({
            ...provided,
            fontSize: "13px",
            whiteSpace: "normal",
            color: `${colors.black}`,
            fontWeight: 450,
          }),
          menu: (provided) => ({
            ...provided,
            zIndex: 999,
            marginTop: "0px",
          }),
          menuList: (provided) => ({
            ...provided,
            padding: 0,
            height: "10.5rem",
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused
              ? `${colors.hoverWhite}`
              : state.isSelected
              ? "transparent"
              : "white",
            color: state.isSelected
              ? `${colors.black}`
              : state.isFocused
              ? `${colors.black}`
              : "black",
            cursor: "pointer",
            fontSize: "0.875rem",
            padding: "0.7rem",
            border: "1px solid #e5e5e5",
          }),
          dropdownIndicator: (provided) => ({
            ...provided,
            color: `${colors.black}`,
            width: "2.063rem",
          }),
        }}
      />
    </FilterContainer>
  );
};

export default Filter;
