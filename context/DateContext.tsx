import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Children,
} from "react";
import Dayjs from "dayjs";

interface dateInterface {
  formattedDate: {
    day: number;
    month: number;
    year: number;
    dayOfWeek: string;
  };
}

const defaultDate: dateInterface = {
  formattedDate: {
    day: Dayjs().date(),
    month: Dayjs().month() + 1,
    year: Dayjs().year(),
    dayOfWeek: Dayjs().format("dddd"),
  },
};

const DateContext = createContext<{
  selectedDate: dateInterface;
  formatSelectedDate: (date: Dayjs.Dayjs) => void;
  handleSelectInputDate: (date: Dayjs.Dayjs) => void;
  inputSelectedDate: Dayjs.Dayjs;
  handleSelectDateOthers: (date: Dayjs.Dayjs) => void;
  selectDateOthers: Dayjs.Dayjs;
}>({
  selectedDate: defaultDate,
  formatSelectedDate: () => {},
  handleSelectInputDate: () => {},
  inputSelectedDate: Dayjs(),
  handleSelectDateOthers: () => {},
  selectDateOthers: Dayjs(),
});

interface DateProviderProps {
  children: ReactNode;
}

export const useDate = () => useContext(DateContext);

export const DateProvider: React.FC<DateProviderProps> = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState<dateInterface>(defaultDate);
  const [inputSelectedDate, setInputSelectedDate] = useState<Dayjs.Dayjs>(
    Dayjs()
  );
  const [selectDateOthers, setSelectDateOthers] = useState<Dayjs.Dayjs>(
    Dayjs()
  );

  const formatSelectedDate = (date: Dayjs.Dayjs) => {
    const formattedDate = {
      day: date.date(),
      month: date.month() + 1,
      year: date.year(),
      dayOfWeek: date.format("dddd"),
    };
    setSelectedDate({ formattedDate });
  };

  const handleSelectInputDate = (date: Dayjs.Dayjs) => {
    setInputSelectedDate(date);
  };

  const handleSelectDateOthers = (date: Dayjs.Dayjs) => {
    setSelectDateOthers(date);
  };

  return (
    <DateContext.Provider
      value={{
        selectedDate,
        selectDateOthers,
        inputSelectedDate,
        formatSelectedDate,
        handleSelectInputDate,
        handleSelectDateOthers,
      }}
    >
      {children}
    </DateContext.Provider>
  );
};
