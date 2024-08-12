import { TFunction } from "next-i18next";
export const getNoteValues = (t: TFunction) => [
  { value: 0, label: `${t("Bir Kere")}` },
  { value: 1, label: `${t("Her Gün")}` },
  { value: 2, label: `${t("Her Ay")}` },
  { value: 3, label: `${t("Her Yıl")}` },
];
