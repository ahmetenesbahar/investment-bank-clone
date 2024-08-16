import { rest } from "msw";
import jwt from "jsonwebtoken";
import { LoginRequestBody, LoginResponse } from "@/types/api";

const SECRET_KEY = "mysecretkey";

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
      accountName: "Vadesiz TL Hesabı",
    },
    {
      accountType: "checking",
      currency: "USD",
      iban: "TR800006400000112345678901",
      balance: 250.5,
      accountName: "Vadesiz Dolar Hesabı",
    },
    {
      accountType: "checking",
      currency: "GR",
      iban: "TR800006400000113456789012",
      balance: 100.0,
      accountName: "Vadesiz Altın Hesabı",
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
