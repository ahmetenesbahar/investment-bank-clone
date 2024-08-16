export interface OptionType {
  value: string;
  label: string;
}

interface Branch {
  code: number;
  name: string;
}

interface Account {
  accountType: string;
  currency: string;
  iban: string;
  balance: number;
  accountName: string;
}

interface User {
  customerNumber: number;
  firstName: string;
  lastName: string;
  email: string;
  lastLogin: string;
  debts: number;
  branch: Branch;
  accounts: Account[];
}
