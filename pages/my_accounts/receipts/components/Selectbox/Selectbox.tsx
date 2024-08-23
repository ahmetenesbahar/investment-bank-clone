import React, { useState, useEffect } from "react";
import Select, { components, MultiValue } from "react-select";
import {
  SelectBoxDiv,
  CheckBoxInput,
  HeaderText,
  FlexColumnDiv,
  FlexDiv,
  FilterIcon,
  ArrowIcon,
} from "./Selectbox.styles";
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

  const {
    handleCurrencyFilter,
    handleChannelFilter,
    handleTransactionFilter,
    channelFilter,
  } = useFilter();

  const handleChange = (selectedOptions: MultiValue<Option>) => {
    const isSelectAllSelected = selectedOptions.some(
      (option) => option.value === options[0].value
    );

    if (isSelectAllSelected) {
      if (selectedOptions.length === options.length) {
        setSelectedOptions([]);
      } else {
        setSelectedOptions(options);
      }
    } else {
      if (selectedOptions.length === options.length - 1) {
        setSelectedOptions([]);
      } else {
        setSelectedOptions(selectedOptions);
      }
    }

    const selectedValues = selectedOptions.map((option) => option.value);

    if (type === "currency") {
      handleCurrencyFilter(selectedValues);
    } else if (type === "channelFilter") {
      handleChannelFilter(selectedValues);
    } else if (type === "transactionTypeFilter") {
      handleTransactionFilter(selectedValues);
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
    <FlexColumnDiv>
      <HeaderText>{placeholder}</HeaderText>
      <FlexDiv>
        <FilterIcon src="/assets/filter_icon.png" alt="filterIcon" />
        <ArrowIcon src="/assets/lower_arrow_dark_blue.png" alt="ArrowIcon" />
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
              minHeight: "none",
              height: "2.1rem",
            }),
            menu: (provided) => ({
              ...provided,
              borderRadius: "0px",
              marginTop: "0px",
              zIndex: 2,
            }),
            menuList: (provided) => ({
              ...provided,
              padding: 0,
              zIndex: 2,
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
              zIndex: 2,
            }),
          }}
        />
      </FlexDiv>
    </FlexColumnDiv>
  );
};

export default Selectbox;
