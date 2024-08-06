import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Dayjs from "dayjs";
import "dayjs/locale/tr";
import { Flex } from "@/styles/styles";

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
  ".MuiPickersCalendarHeader-root": {
    display: "none",
  },

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
}));

const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(Dayjs());
  const [month, setMonth] = useState<number>(Dayjs().month());
  const [year, setYear] = useState<number>(Dayjs().year());

  const handleMonthChange = (event: SelectChangeEvent<number>) => {
    setMonth(event.target.value as number);
  };

  const handleYearChange = (event: SelectChangeEvent<number>) => {
    setYear(event.target.value as number);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="tr">
      <StyledDateCalendar
        value={selectedDate}
        onChange={(newValue) => {
          setSelectedDate(newValue);
        }}
        showDaysOutsideCurrentMonth
        dayOfWeekFormatter={(day) => day.format("ddd")}
      />
    </LocalizationProvider>
  );
};

export default Calendar;
