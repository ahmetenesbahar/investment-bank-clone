import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  CenteredFlex,
  Flex,
  Text,
  Icon,
  NotesModalInput,
  Form,
  Button,
} from "@/styles/styles";
import { useForm, Controller } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useModal } from "../../context/ModalContext";
import { colors } from "@/styles/colors";
import Calendar from "../Calendar";
import { useDate } from "../../context/DateContext";
import Select, { SingleValue } from "react-select";
import { getNoteValues } from "../../utils/noteValues";
import { useTranslation } from "next-i18next";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { AddNoteResponse } from "@/types/api";
import useNotes from "../../hooks/useNotes";
import useMediaQuery from "@/hooks/useMediaQuery";
import { breakpoints } from "@/utils/constants";

interface FormData {
  title: string;
  description: string;
  displayDate: string;
  recurrence: string;
  lastViewedDate: string;
}

type RecurrenceOption = {
  value: number;
  label: string;
};

const schema = object({
  title: string()
    .required("Bu alan zorunludur !")
    .max(35, "Başlık 35 karakterden uzun olamaz."),
  description: string()
    .required("Bu alan zorunludur !")
    .max(35, "Açıklama 35 karakterden uzun olamaz."),
  displayDate: string().required("Bu alan zorunludur !"),
  recurrence: string().required("Bu alan zorunludur !"),
  lastViewedDate: string().required("Bu alan zorunludur !"),
});

const NotesModal: React.FC = () => {
  const { t } = useTranslation();
  const width = useMediaQuery();
  const { inputSelectedDate } = useDate();
  const [displayDateValue, setDisplayDateValue] = useState<string>(
    inputSelectedDate ? inputSelectedDate.format("DD/MM/YYYY") : ""
  );
  const [lastViewedDateValue, setLastViewedDateValue] = useState<string>(
    inputSelectedDate ? inputSelectedDate.format("DD/MM/YYYY") : ""
  );
  const [selectedRecurrence, setSelectedRecurrence] =
    useState<RecurrenceOption | null>(null);
  const selectBoxValues = getNoteValues(t);
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      description: "",
      displayDate: inputSelectedDate
        ? inputSelectedDate.format("DD/MM/YYYY")
        : "",
      recurrence: selectedRecurrence ? selectedRecurrence.toString() : "",
      lastViewedDate: inputSelectedDate
        ? inputSelectedDate.format("DD/MM/YYYY")
        : "",
    },
  });

  const { handleCloseModal } = useModal();
  const [displayDate, setDisplayDate] = useState(false);
  const [lastViewedDate, setLastViewedDate] = useState(false);

  const displayDateRef = useRef<HTMLInputElement>(null);
  const lastViewedDateRef = useRef<HTMLInputElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const { addNote } = useNotes();

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await axios.post<AddNoteResponse>("/api/addNote", data);
      return response.data;
    },
    onSuccess: (data) => {
      console.log("Not eklendi");
      if (data.note) {
        addNote(data.note);
      }
    },
    onError: (error) => {
      console.error("Not eklenemedi", error);
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data.displayDate, data.lastViewedDate);

    mutation.mutate(data);
    handleCloseModal();
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(e.target as Node) &&
        !displayDateRef.current?.contains(e.target as Node)
      ) {
        setDisplayDate(false);
      }

      if (
        calendarRef.current &&
        !calendarRef.current.contains(e.target as Node) &&
        !lastViewedDateRef.current?.contains(e.target as Node)
      ) {
        setLastViewedDate(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  useEffect(() => {
    if (displayDate) {
      setValue("displayDate", inputSelectedDate?.format("DD/MM/YYYY") || "");
      setDisplayDateValue(inputSelectedDate?.format("DD/MM/YYYY") || "");
    }
    if (lastViewedDate) {
      setValue("lastViewedDate", inputSelectedDate?.format("DD/MM/YYYY") || "");
      setLastViewedDateValue(inputSelectedDate?.format("DD/MM/YYYY") || "");
    }
  }, [inputSelectedDate]);

  useEffect(() => {
    console.log(
      "inputSelectedDate",
      inputSelectedDate?.format("DD/MM/YYYY"),
      "displayDateValue",
      displayDateValue,
      lastViewedDateValue
    );
  }, [inputSelectedDate, displayDateValue, lastViewedDateValue]);

  return ReactDOM.createPortal(
    <CenteredFlex
      position="absolute"
      top="0"
      zIndex="3"
      backgroundColor="rgba(0,0,0,0.2)"
      width="100%"
      height="100vh"
      padding="0.75rem"
    >
      <Flex
        backgroundColor="white"
        flexDirection="column"
        padding="16px"
        width={width <= breakpoints.md ? "100%" : "31.25rem"}
        height={width <= breakpoints.md ? "100%" : "auto"}
        position="absolute"
        top={width <= breakpoints.md ? "0" : "5rem"}
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          padding=" 0 0 0.5rem 0  "
          borderBottom={`0.063rem solid ${colors.borderColor}`}
        >
          <Text color={colors.secondaryBlue} fontWeight="700">
            Yeni Not Ekle
          </Text>
          <Icon src="/assets/blue_x_icon.png" onClick={handleCloseModal} />
        </Flex>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Flex flexDirection="column" width="100%" gap="1.2rem">
            <Flex
              flexDirection="column"
              width="100%"
              padding="1.2rem 0 0 0"
              gap="0.3rem"
            >
              <Text color={colors.secondaryBlue} fontWeight="700">
                Başlık
              </Text>
              <Controller
                name="title"
                control={control}
                render={({ field }) => (
                  <NotesModalInput error={!!errors.title} {...field} />
                )}
              />
              {errors.title && <Text color="red">{errors.title.message}</Text>}
            </Flex>
            <Flex flexDirection="column" width="100%" gap="0.3rem">
              <Text color={colors.secondaryBlue} fontWeight="700">
                Açıklama
              </Text>
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <NotesModalInput {...field} error={!!errors.description} />
                )}
              />
              {errors.description && (
                <Text color="red">{errors.description.message}</Text>
              )}
            </Flex>
            <Flex
              flexDirection="column"
              width="100%"
              gap="0.3rem"
              position="relative"
            >
              <Text color={colors.secondaryBlue} fontWeight="700">
                Görüntülenme Tarihi
              </Text>
              <Flex width="100%" alignItems="center">
                <Controller
                  name="displayDate"
                  control={control}
                  render={({ field }) => (
                    <NotesModalInput
                      {...field}
                      error={!!errors.displayDate}
                      onClick={() => {
                        setDisplayDate(true);
                        setLastViewedDate(false);
                      }}
                      value={displayDateValue}
                      onChange={(e) => {
                        field.onChange(e);
                        setDisplayDateValue(e.target.value);
                      }}
                      ref={displayDateRef}
                    />
                  )}
                />

                <Icon
                  src="/assets/date_picker_icon.png"
                  position="absolute"
                  right="10px"
                />
              </Flex>
              {displayDate && (
                <Flex
                  position="absolute"
                  backgroundColor="white"
                  zIndex="999"
                  top="100%"
                  ref={calendarRef}
                >
                  <Calendar />
                </Flex>
              )}
              {errors.displayDate && (
                <Text color="red">{errors.displayDate.message}</Text>
              )}
            </Flex>
            <Flex flexDirection="column" width="100%" gap="0.3rem">
              <Text color={colors.secondaryBlue} fontWeight="700">
                Tekrarlanma Sıklığı
              </Text>
              <Controller
                name="recurrence"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={selectBoxValues}
                    components={{ IndicatorSeparator: () => null }}
                    placeholder=""
                    onChange={(option: SingleValue<RecurrenceOption>) => {
                      field.onChange(option?.value);
                      setSelectedRecurrence(option as RecurrenceOption);
                    }}
                    value={selectedRecurrence}
                    styles={{
                      container: (provided) => ({
                        ...provided,

                        fontSize: "14px",
                        color: `${colors.black}`,
                        width: "100%",
                      }),
                      control: (provided, state) => ({
                        ...provided,
                        borderRadius: "0px",
                        border: state.isFocused
                          ? provided.border
                          : provided.border,
                        boxShadow: "none",
                        borderColor: state.isFocused
                          ? `  ${colors.secondaryBorderColor}`
                          : errors.recurrence
                          ? `red`
                          : `  ${colors.secondaryBorderColor}`,
                        "&:hover": {
                          borderColor: state.isFocused
                            ? `  ${colors.secondaryBorderColor}`
                            : errors.recurrence
                            ? `red`
                            : `  ${colors.secondaryBorderColor}`,
                        },
                      }),
                      singleValue: (provided) => ({
                        ...provided,
                        fontSize: "14px",
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
                )}
              />
              {errors.recurrence && (
                <Text color="red">{errors.recurrence.message}</Text>
              )}
            </Flex>
            {selectedRecurrence && selectedRecurrence.value >= 1 && (
              <Flex
                flexDirection="column"
                width="100%"
                gap="0.3rem"
                position="relative"
              >
                <Text color={colors.secondaryBlue} fontWeight="700">
                  Son Görüntülenme Tarihi
                </Text>
                <Flex width="100%" alignItems="center">
                  <Controller
                    name="lastViewedDate"
                    control={control}
                    render={({ field }) => (
                      <NotesModalInput
                        {...field}
                        error={!!errors.lastViewedDate}
                        onClick={() => {
                          setLastViewedDate(true);
                          setDisplayDate(false);
                        }}
                        value={lastViewedDateValue}
                        onChange={(e) => {
                          field.onChange(e);
                          setLastViewedDateValue(e.target.value);
                        }}
                        ref={lastViewedDateRef}
                      />
                    )}
                  />
                  <Icon
                    src="/assets/date_picker_icon.png"
                    position="absolute"
                    right="10px"
                  />
                  {lastViewedDate && (
                    <Flex
                      position="absolute"
                      backgroundColor="white"
                      zIndex="999"
                      top="100%"
                      ref={calendarRef}
                    >
                      <Calendar />
                    </Flex>
                  )}
                </Flex>
                {errors.lastViewedDate && (
                  <Text color="red">{errors.lastViewedDate.message}</Text>
                )}
              </Flex>
            )}
            <Flex justifyContent="center">
              <Button
                backgroundColor={colors.secondaryOrange}
                type="submit"
                color={colors.white}
                border={`0.063rem solid  ${colors.borderColor}`}
                padding="0.6rem 2rem"
                width="7.5rem"
              >
                Kaydet
              </Button>
            </Flex>
          </Flex>
        </Form>
      </Flex>
    </CenteredFlex>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default NotesModal;
