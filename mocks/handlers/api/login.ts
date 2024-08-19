import { rest } from "msw";
import jwt from "jsonwebtoken";
import { LoginRequestBody, LoginResponse } from "@/types/api";

const SECRET_KEY = "mysecretkey";
interface Receipt {
  date: string;
  channel: string;
  type: string;
  amount: string;
  currency: string;
  receipt: string;
}

interface Transaction {
  date: string;
  amount: string;
  description: string;
  channel: string;
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
  receipts: Receipt[];
  lastTransactions: Transaction[];
}

const user: User = {
  customerNumber: 123456,
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  lastLogin: "2024-07-30T12:34:56Z",
  debts: 3000.45,
  branch: {
    code: 1056,
    name: "Üsküdar İstanbul",
  },
  accounts: [
    {
      accountType: "checking",
      currency: "TL",
      iban: "TR800006400000111234567890",
      balance: 1500.75,
      accountName: "Current TL",
    },
    {
      accountType: "checking",
      currency: "USD",
      iban: "TR800006400000112345678901",
      balance: 250.5,
      accountName: "Current FC",
    },
    {
      accountType: "checking",
      currency: "GR",
      iban: "TR800006400000113456789012",
      balance: 100.0,
      accountName: "Current Gold",
    },
  ],
  receipts: [
    {
      date: "16/08/2024 14:34",
      channel: "Otomatik",
      type: "FAST",
      amount: "1,500.00",
      currency: "TL",
      receipt: "receipt",
    },
    {
      date: "11/08/2024 00:26",
      channel: "İşCep",
      type: "Havale",
      amount: "1,502.22",
      currency: "TL",
      receipt: "receipt",
    },
    {
      date: "05/08/2024 21:01",
      channel: "İşCep",
      type: "FAST",
      amount: "1,004.43",
      currency: "TL",
      receipt: "receipt",
    },
    {
      date: "05/08/2024 16:10",
      channel: "İşCep",
      type: "Havale",
      amount: "1,000.00",
      currency: "TL",
      receipt: "receipt",
    },
    {
      date: "26/07/2024 13:09",
      channel: "İşCep",
      type: "Havale",
      amount: "322.22",
      currency: "TL",
      receipt: "receipt",
    },
  ],
  lastTransactions: [
    {
      date: "15/08/2024 09:34",
      amount: "1,200.00 TL",
      description: "Grocery shopping",
      channel: "İşCep",
    },
    {
      date: "14/08/2024 11:15",
      amount: "850.00 TL",
      description: "Electricity bill payment",
      channel: "Otomatik",
    },
    {
      date: "12/08/2024 18:22",
      amount: "500.00 TL",
      description: "Dining at restaurant",
      channel: "İşCep",
    },
    {
      date: "10/08/2024 13:45",
      amount: "250.00 TL",
      description: "Fuel purchase",
      channel: "İşCep",
    },
    {
      date: "08/08/2024 16:20",
      amount: "150.00 TL",
      description: "Online shopping",
      channel: "İşCep",
    },
  ],
};

export const loginHandlers = [
  rest.post<LoginRequestBody, LoginResponse>("/api/login", (req, res, ctx) => {
    const { customerNumber, password } = req.body;

    if (customerNumber === 123456 && password === 1234) {
      try {
        const token = jwt.sign(
          { customerNumber: user.customerNumber, email: user.email },
          SECRET_KEY,
          { expiresIn: "1h" }
        );

        return res(
          ctx.status(200),
          ctx.json({
            message: "Login successful",
            token,
            user,
          })
        );
      } catch (error: any) {
        console.error("Error signing the token:", error);
        return res(
          ctx.status(500),
          ctx.json({ message: "Internal server error", error: error.message })
        );
      }
    } else {
      return res(
        ctx.status(401),
        ctx.json({ message: "Invalid customer number or password" })
      );
    }
  }),
];
