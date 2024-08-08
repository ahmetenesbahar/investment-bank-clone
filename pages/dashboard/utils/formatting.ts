import { User } from "@/types/api";

export const formatIBAN = (iban: string) => {
  const cleanedIban = iban.replace(/\s+/g, "").toUpperCase();

  const formattedIban = cleanedIban.replace(/(.{4})/g, "$1 ").trim();

  return formattedIban;
};

export const formatAccountNumbers = (user: User) =>
  user?.accounts.map((account: any) => {
    const last11 = account?.iban.slice(-11);
    return {
      label: `${last11.slice(0, 4)}-${last11.slice(4)}`,
      value: account?.iban,
    };
  });

export const formatDateTime = (date: Date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day}.${month}.${year} ${hours}:${minutes}`;
};
