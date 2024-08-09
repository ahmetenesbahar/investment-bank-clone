import React, { useEffect, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Select, { SingleValue } from "react-select";
import { styled } from "@mui/material/styles";
import Dayjs from "dayjs";
import "dayjs/locale/tr";
import { Flex } from "@/styles/styles";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useTranslation } from "next-i18next";
import { getMonths } from "../utils/months";
import { useRouter } from "next/router";
import { breakpoints } from "@/utils/constants";
import { colors } from "@/styles/colors";

const StyledDateCalendar = styled(DateCalendar)(({ theme }) => ({
  ".MuiPickersDay-root": {
    color: `${colors.textBlue}`,
    fontSize: "0.875rem",
    "&.Mui-selected": {
      backgroundColor: `${colors.calendarGreen} !important`,
      color: "white",
    },
    "&.MuiPickersDay-today": {
      backgroundColor: "white",
      border: "0.063rem solid lightblue",
    },
    "&.MuiPickersDay-dayOutsideMonth": {
      color: `${colors.black}`,
      opacity: 0.5,
    },
  },
  ".MuiTypography-root": {
    "&.MuiDayCalendar-weekDayLabel": {
      fontWeight: "600",
      color: `${colors.loginHeaderBlue}`,
      textTransform: "uppercase",
      textDecoration: "underline dotted",
      height: "0.938rem",
    },
  },
  ".MuiButtonBase-root": {
    "&.MuiPickersArrowSwitcher-previousIconButton": {
      position: "absolute",
      left: "0.313rem",
      top: "0.625rem",
      background: `${colors.hoverWhite}`,
      color: `${colors.black}`,
      borderRadius: "0px",
      width: "1.563rem",
      height: "2.375rem",
    },
    "&.MuiPickersArrowSwitcher-nextIconButton": {
      position: "absolute",
      left: "11.25rem",
      top: "0.625rem",
      background: `${colors.hoverWhite}`,
      color: `${colors.black}`,
      borderRadius: "0px",
      width: "1.563rem",
      height: "2.375rem",
    },
  },
  ".MuiPickersCalendarHeader-labelContainer": {
    display: "none",
  },
  ".MuiPickersSlideTransition-root": {
    minHeight: "12.5rem",
  },
  "&.MuiDateCalendar-root": {
    height: "auto !important",
    paddingBottom: "1.25rem",
    paddingTop: "0.625rem",
    width: "90%",
  },
  ".MuiDayCalendar-root": {
    justifyContent: "center",
  },

  ".MuiDayCalendar-header": {
    [theme.breakpoints.down("md")]: {
      justifyContent: "space-between",
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      justifyContent: "center",
    },
  },
  ".MuiDayCalendar-weekContainer": {
    width: "100%",
    justifyContent: "space-between",
  },
}));

const Calendar: React.FC = () => {
  const { t } = useTranslation();
  const months = getMonths(t);
  const width = useMediaQuery();
  const router = useRouter();
  const currentLang = router.locale;

  const currentYear = Dayjs().year();
  const [selectedDate, setSelectedDate] = useState(Dayjs());
  const [displayedMonth, setDisplayedMonth] = useState<number>(Dayjs().month());
  const [displayedYear, setDisplayedYear] = useState<number>(Dayjs().year());

  const years = Array.from({ length: 11 }, (_, i) => ({
    value: currentYear + i,
    label: (currentYear + i).toString(),
  }));

  const [selectedMonthValue, setSelectedMonthValue] = useState<
    SingleValue<{ value: number; label: string }>
  >({ value: displayedMonth, label: months[displayedMonth].label });

  const [selectedYearValue, setSelectedYearValue] = useState<
    SingleValue<{ value: number; label: string }>
  >({
    value: displayedYear,
    label: displayedYear.toString(),
  });

  const handleMonthChange = (
    option: SingleValue<{ value: number; label: string }>
  ) => {
    if (option) {
      const newMonth = option.value;
      setSelectedMonthValue(option);
      setDisplayedMonth(newMonth);
      setSelectedDate((prevDate) => prevDate.month(newMonth));
    }
  };

  const handleYearChange = (
    option: SingleValue<{ value: number; label: string }>
  ) => {
    if (option) {
      const newYear = option.value;
      setSelectedYearValue(option);
      setDisplayedYear(newYear);
      setSelectedDate((prevDate) => prevDate.year(newYear));
    }
  };

  const handleCalendarViewChange = (newValue: any | null) => {
    if (newValue) {
      setDisplayedMonth(newValue.month());
      setDisplayedYear(newValue.year());
      setSelectedMonthValue({
        value: newValue.month(),
        label: months[newValue.month()].label,
      });
      setSelectedYearValue({
        value: newValue.year(),
        label: newValue.year().toString(),
      });
    }
  };

  return (
    <Flex
      position="relative"
      width={width < breakpoints.md ? "100%" : "20rem"}
      justifyContent={width < breakpoints.md ? "center" : "start"}
    >
      <Flex zIndex="2">
        <Select
          options={months}
          components={{ IndicatorSeparator: () => null }}
          onChange={handleMonthChange}
          value={selectedMonthValue}
          styles={{
            container: (provided) => ({
              ...provided,
              position: "absolute",
              left: "2.5rem",
              top: "0.625rem",
              zIndex: 999,
              fontSize: "0.625rem",
              color: `${colors.black}`,
              width: "7.375rem",
            }),
            control: (provided, state) => ({
              ...provided,
              borderRadius: "0px",
              border: state.isFocused ? provided.border : provided.border,
              boxShadow: "none",
              borderColor: state.isFocused
                ? ` ${colors.borderColor}`
                : provided.borderColor,
              "&:hover": {
                borderColor: state.isFocused
                  ? `  ${colors.borderColor}`
                  : provided.borderColor,
              },
            }),
            singleValue: (provided) => ({
              ...provided,
              fontSize: "0.875rem",
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
              height: "9.375rem",
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
            }),
            dropdownIndicator: (provided) => ({
              ...provided,
              color: `${colors.black}`,
              width: "2.063rem",
            }),
          }}
        />
      </Flex>
      <Flex zIndex="2">
        <Select
          options={years}
          components={{ IndicatorSeparator: () => null }}
          onChange={handleYearChange}
          value={selectedYearValue}
          styles={{
            container: (provided) => ({
              ...provided,
              position: "absolute",
              left: width < breakpoints.md ? "12.813rem" : undefined,
              right: width >= breakpoints.md ? "1.563rem" : undefined,
              top: "0.625rem",
            }),
            control: (provided, state) => ({
              ...provided,
              borderRadius: "0px",
              border: state.isFocused ? provided.border : provided.border,
              boxShadow: "none",
              borderColor: state.isFocused
                ? ` ${colors.borderColor}`
                : provided.borderColor,
              "&:hover": {
                borderColor: state.isFocused
                  ? ` ${colors.borderColor}`
                  : provided.borderColor,
              },
            }),
            singleValue: (provided) => ({
              ...provided,
              fontSize: "0.875rem",
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
              zIndex: 999,
              height: "9.375rem",
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
            }),
            dropdownIndicator: (provided) => ({
              ...provided,
              color: `${colors.black}`,
            }),
          }}
        />
      </Flex>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        adapterLocale={currentLang}
      >
        <StyledDateCalendar
          value={selectedDate}
          onChange={(newDate) => setSelectedDate(newDate || Dayjs())}
          onMonthChange={handleCalendarViewChange}
          onYearChange={handleCalendarViewChange}
          showDaysOutsideCurrentMonth
          dayOfWeekFormatter={(day) => day.format("ddd")}
          views={["month", "day"]}
        />
      </LocalizationProvider>
    </Flex>
  );
};

export default Calendar;
