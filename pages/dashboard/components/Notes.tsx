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

  const formatDate = (formattedDate: FormattedDate): string => {
    const { day, month, year } = formattedDate;
    return `${day.toString().padStart(2, "0")}/${month
      .toString()
      .padStart(2, "0")}/${year}`;
  };

  const formattedSelectedDate = formatDate(selectedDate.formattedDate);

  console.log(notes);
  return (
    <Flex
      width="100%"
      flexDirection="column"
      maxHeight="17.5rem"
      overflow="scroll"
    >
      {notes.map(
        (note: Note, index: number) =>
          note.displayDate === formattedSelectedDate && (
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
