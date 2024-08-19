import React, { useState, useEffect } from "react";
import Select, { components, MultiValue } from "react-select";
import { SelectBoxDiv, CheckBoxInput } from "./Selectbox.styles";
import { Flex, Text } from "@/styles/styles";
import { colors } from "@/styles/colors";
import { useFilter } from "../../context/FilterContext";

interface Option {
  label: string;
  value: string;
}

interface SelectboxProps {
  options: Option[];
  placeholder?: string;
  menuIsOpen?: boolean;
  type?: string;
}

const Selectbox: React.FC<SelectboxProps> = ({
  options,
  placeholder,
  menuIsOpen,
  type,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<MultiValue<Option>>(
    []
  );

  const { handleCurrencyFilter, handleAccountTypeFilter } = useFilter();

  const handleChange = (options: MultiValue<Option>) => {
    setSelectedOptions(options);

    if (type === "currency") {
      handleCurrencyFilter(options.map((option) => option.value));
    } else if (type === "accountType") {
      handleAccountTypeFilter(options.map((option) => option.value));
    }
  };
  const CustomMultiValueLabel = (props: any) => {
    if (props.data.value === selectedOptions[0]?.value) {
      return (
        <components.MultiValueLabel {...props}>
          <Flex position="relative">
            <span>{`${selectedOptions.length} ${placeholder}`}</span>
          </Flex>
        </components.MultiValueLabel>
      );
    }
    return null;
  };

  const CheckboxOption = (props: any) => (
    <components.Option {...props}>
      <CheckBoxInput
        type="checkbox"
        checked={props.isSelected}
        onChange={() => null}
      />
      {props.label}
    </components.Option>
  );

  return (
    <Select
      options={options}
      value={selectedOptions}
      onChange={handleChange}
      placeholder={placeholder}
      components={{
        Option: CheckboxOption,
        IndicatorSeparator: () => null,
        DropdownIndicator: () => null,
        ClearIndicator: () => null,
        MultiValueLabel: CustomMultiValueLabel,
      }}
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      isDisabled={false}
      isSearchable={false}
      menuIsOpen={menuIsOpen}
      isMulti
      styles={{
        container: (provided) => ({
          ...provided,
          maxWidth: "11rem",
          width: "100%",
        }),
        control: (provided, state) => ({
          ...provided,
          borderRadius: "0px",
          boxShadow: "none",
          border: state.isFocused ? provided.border : provided.border,
          borderColor: state.isFocused
            ? `  ${colors.secondaryBorderColor}`
            : `${colors.secondaryBorderColor}`,
          "&:hover": {
            borderColor: state.isFocused
              ? `  ${colors.secondaryBorderColor}`
              : `${colors.secondaryBorderColor}`
              ? `${colors.secondaryBorderColor}`
              : `  ${colors.secondaryBorderColor}`,
          },
        }),
        menu: (provided) => ({
          ...provided,
          borderRadius: "0px",
          marginTop: "0px",
        }),
        menuList: (provided) => ({
          ...provided,
          padding: 0,
        }),
        multiValue: (provided) => ({
          ...provided,
          borderRadius: "0px",
          marginLeft: "35px",
          backgroundColor: "transparent",
          left: "0",
          color: colors.secondaryBlue,
          position: "absolute",
          fontWeight: 500,
        }),
        multiValueLabel: (provided) => ({
          ...provided,
          borderRadius: "0px",
          backgroundColor: "transparent",
          color: colors.secondaryBlue,
        }),
        multiValueRemove: (provided) => ({
          ...provided,
          borderRadius: "0px",
          display: "none",
        }),
        placeholder: (provided) => ({
          ...provided,
          borderRadius: "0px",
          color: colors.secondaryBlue,
          fontWeight: 500,
          fontSize: "14px",
          marginLeft: "35px",
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
          border: "1px solid #e5e5e5",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }),
      }}
    />
  );
};

export default Selectbox;
