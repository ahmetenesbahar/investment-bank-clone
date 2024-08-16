import React from "react";
import { Flex, Text, Icon } from "@/styles/styles";
import { colors } from "@/styles/colors";
import useNotes from "../hooks/useNotes";
import { useTranslation } from "next-i18next";

interface FormattedDate {
  day: number;
  month: number;
  year: number;
  dayOfWeek: string;
}

interface DateInterface {
  formattedDate: FormattedDate;
}

interface Note {
  description: string;
  displayDate: string;
  lastViewedDate: string;
  recurrence: string;
  title: string;
}

interface Props {
  selectedDate: DateInterface;
}

const Notes: React.FC<Props> = ({ selectedDate }) => {
  const { t } = useTranslation();
  const { getNotes } = useNotes();
  const notes = getNotes();

  const parseDate = (dateString: string) => {
    const [day, month, year] = dateString.split("/");
    return new Date(`${year}-${month}-${day}`);
  };

  const formatDate = (formattedDate: FormattedDate): string => {
    const { day, month, year } = formattedDate;
    return `${day.toString().padStart(2, "0")}/${month
      .toString()
      .padStart(2, "0")}/${year}`;
  };

  const formattedSelectedDate = formatDate(selectedDate.formattedDate);
  const isValid = (
    displayDate: string,
    lastViewedDate: string,
    recurrence: string
  ): boolean => {
    const parsedDisplayDate = parseDate(displayDate);
    const parsedLastViewedDate = parseDate(lastViewedDate);
    const parsedSelectedDate = parseDate(formattedSelectedDate);

    if (recurrence === "0") {
      // Eğer recurrence 0 ise, sadece displayDate ile selectedDate eşleşmelidir
      return parsedDisplayDate.getTime() === parsedSelectedDate.getTime();
    } else if (recurrence === "1") {
      // Eğer recurrence 1 ise, selectedDate ile displayDate arasındaki günleri kontrol et
      const oneDay = 24 * 60 * 60 * 1000; // Bir günün milisaniye cinsinden değeri
      const daysBetween = Math.round(
        (parsedSelectedDate.getTime() - parsedDisplayDate.getTime()) / oneDay
      );

      return (
        parsedSelectedDate.getTime() >= parsedDisplayDate.getTime() &&
        parsedSelectedDate.getTime() <= parsedLastViewedDate.getTime() &&
        daysBetween >= 0
      );
    } else if (recurrence === "2") {
      // Eğer recurrence 2 ise, displayDate ve lastViewedDate arasındaki her ayın aynı günü kontrol et
      const monthsBetween =
        (parsedSelectedDate.getFullYear() - parsedDisplayDate.getFullYear()) *
          12 +
        parsedSelectedDate.getMonth() -
        parsedDisplayDate.getMonth();

      const isMonthlyMatch =
        parsedSelectedDate.getDate() === parsedDisplayDate.getDate() &&
        parsedSelectedDate.getTime() <= parsedLastViewedDate.getTime() &&
        monthsBetween >= 0 &&
        (parsedSelectedDate.getMonth() - parsedDisplayDate.getMonth()) % 1 ===
          0;

      return isMonthlyMatch;
    } else if (recurrence === "3") {
      // Eğer recurrence 3 ise, displayDate ve lastViewedDate arasındaki her yılın aynı günü kontrol et
      const yearsBetween =
        parsedSelectedDate.getFullYear() - parsedDisplayDate.getFullYear();

      const isYearlyMatch =
        parsedSelectedDate.getDate() === parsedDisplayDate.getDate() &&
        parsedSelectedDate.getMonth() === parsedDisplayDate.getMonth() &&
        parsedSelectedDate.getTime() <= parsedLastViewedDate.getTime() &&
        yearsBetween >= 0 &&
        (parsedSelectedDate.getFullYear() - parsedDisplayDate.getFullYear()) %
          1 ===
          0;

      return isYearlyMatch;
    }

    return false; // `recurrence` değeri 0, 1, 2 veya 3 dışında bir değer içeriyorsa false döner
  };
  return (
    <Flex
      width="100%"
      flexDirection="column"
      maxHeight="17.5rem"
      overflow="auto"
    >
      {notes.map(
        (note: Note, index: number) =>
          isValid(note.displayDate, note.lastViewedDate, note.recurrence) && (
            <React.Fragment key={index}>
              <Flex
                justifyContent="space-between"
                alignItems="center"
                backgroundColor={colors.secondaryHoverBlue}
                width="100%"
                padding="0 0.5rem"
                borderBottom={`0.063rem solid ${colors.borderColor}`}
              >
                <Text color={colors.tableHeaderColor}>
                  {t(`${selectedDate.formattedDate.dayOfWeek}`)}
                </Text>
                <Text color={colors.tableHeaderColor}>{note.displayDate}</Text>
              </Flex>
              <Flex
                flexDirection="column"
                width="100%"
                padding="1rem 0.75rem"
                backgroundColor={colors.yellow}
              >
                <Text
                  className="noteTitle"
                  fontWeight="700"
                  color={colors.secondaryDarkBlue}
                >
                  {note.title}
                </Text>
                <Flex
                  justifyContent="space-between"
                  width="100%"
                  padding="0.2rem 0"
                  className="editButton"
                >
                  <Text className="noteDescription" color={colors.black}>
                    {note.description}
                  </Text>
                  <Icon src="/assets/edit_pencil_icon.png" />
                </Flex>
              </Flex>
            </React.Fragment>
          )
      )}
    </Flex>
  );
};

export default Notes;
