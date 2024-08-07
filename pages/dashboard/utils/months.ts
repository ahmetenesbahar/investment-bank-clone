import { TFunction } from "next-i18next";
export const getMonths = (t: TFunction) => [
  { value: 0, label: `${t("January")}` },
  { value: 1, label: `${t("February")}` },
  { value: 2, label: `${t("March")}` },
  { value: 3, label: `${t("April")}` },
  { value: 4, label: `${t("May")}` },
  { value: 5, label: `${t("June")}` },
  { value: 6, label: `${t("July")}` },
  { value: 7, label: `${t("August")}` },
  { value: 8, label: `${t("September")}` },
  { value: 9, label: `${t("October")}` },
  { value: 10, label: `${t("November")}` },
  { value: 11, label: `${t("December")}` },
];
