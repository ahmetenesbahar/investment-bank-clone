import React, { useEffect, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Select, { SingleValue } from "react-select";
import { FormControl, SelectChangeEvent } from "@mui/material";
import { styled } from "@mui/material/styles";
import Dayjs from "dayjs";
import "dayjs/locale/tr";
import { Flex } from "@/styles/styles";
import { set } from "react-hook-form";

const StyledDateCalendar = styled(DateCalendar)(({ theme }) => ({
  ".MuiPickersDay-root": {
    color: "#6da9e4",
    fontSize: "14px",
    "&.Mui-selected": {
      backgroundColor: "#68BE47 !important",
      color: "white",
    },
    "&.MuiPickersDay-today": {
      backgroundColor: "white",
      border: "1px solid lightblue",
    },
    "&.MuiPickersDay-dayOutsideMonth": {
      color: "#000",
    },
  },
  ".MuiPickersCalendarHeader-root": {},

  ".MuiDayCalendar-header": {},
  ".MuiTypography-root": {
    "&.MuiDayCalendar-weekDayLabel": {
      fontWeight: "600",
      color: "#234970",
      textTransform: "uppercase",
      textDecoration: "underline dotted",
      height: "15px",
    },
  },

  ".MuiButtonBase-root": {
    "&.MuiPickersArrowSwitcher-previousIconButton": {
      position: "absolute",
      left: "0",
      top: "12px",
    },
    "&.MuiPickersArrowSwitcher-nextIconButton": {
      position: "absolute",
      left: "150px",
      top: "12px",
    },
  },

  ".MuiMonthCalendar-root": {
    flexDirection: "column",
    position: "absolute",
    top: "100px",
    width: "50px",
  },

  ".MuiPickersCalendarHeader-labelContainer": {
    display: "none",
  },
}));

const months = [
  { value: 0, label: "Ocak" },
  { value: 1, label: "Şubat" },
  { value: 2, label: "Mart" },
  { value: 3, label: "Nisan" },
  { value: 4, label: "Mayıs" },
  { value: 5, label: "Haziran" },
  { value: 6, label: "Temmuz" },
  { value: 7, label: "Ağustos" },
  { value: 8, label: "Eylül" },
  { value: 9, label: "Ekim" },
  { value: 10, label: "Kasım" },
  { value: 11, label: "Aralık" },
];

const Calendar: React.FC = () => {
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
  >({ value: displayedYear, label: years[displayedYear]?.label });

  const handleMonthChange = (
    option: SingleValue<{ value: number; label: string }>
  ) => {
    if (option) {
      const newMonth = option.value;
      const newDate = Dayjs()
        .year(displayedYear)
        .month(newMonth)
        .startOf("month");
      setSelectedDate(newDate);
    }
  };

  const handleYearChange = (
    option: SingleValue<{ value: number; label: string }>
  ) => {
    if (option) {
      const newMonth = option.value;
      const newDate = Dayjs()
        .year(displayedYear)
        .month(newMonth)
        .startOf("month");
      setSelectedDate(newDate);
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

  useEffect(() => {
    console.log(displayedMonth + 1, displayedYear);
  }, [displayedMonth, displayedYear]);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="tr">
      <Flex position="relative">
        <Flex>
          <Select
            options={months}
            components={{ IndicatorSeparator: () => null }}
            onChange={handleMonthChange}
            value={selectedMonthValue}
            styles={{
              container: (provided) => ({
                ...provided,
                position: "absolute",
                left: "35px",
                top: "10px",
                zIndex: 999,
              }),
              menu: (provided) => ({
                ...provided,
                zIndex: 999,
              }),
            }}
          />
        </Flex>
        <Flex>
          <Select
            options={years}
            components={{ IndicatorSeparator: () => null }}
            onChange={handleYearChange}
            value={selectedYearValue}
            styles={{
              container: (provided) => ({
                ...provided,
                position: "absolute",
                right: "25px",
                top: "10px",
              }),
            }}
          />
        </Flex>
        <StyledDateCalendar
          value={selectedDate}
          onChange={handleMonthChange}
          onMonthChange={handleCalendarViewChange}
          onYearChange={handleCalendarViewChange}
          showDaysOutsideCurrentMonth
          dayOfWeekFormatter={(day) => day.format("ddd")}
          views={["month", "day"]}
        />
      </Flex>
    </LocalizationProvider>
  );
};

export default Calendar;
