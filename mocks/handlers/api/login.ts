import { rest } from "msw";
import jwt from "jsonwebtoken";
import { LoginRequestBody, LoginResponse } from "@/types/api";

const SECRET_KEY = "mysecretkey";

interface User {
  customerNumber: number;
  firstName: string;
  lastName: string;
  email: string;
  lastLogin: string;
  accounts: {
    accountType: string;
    currency: string;
    iban: string;
    balance: number;
  }[];
}

const user: User = {
  customerNumber: 123456,
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  lastLogin: "2024-07-30T12:34:56Z",
  accounts: [
    {
      accountType: "checking",
      currency: "TRY",
      iban: "TR330006100519786457841326",
      balance: 1500.75,
    },
    {
      accountType: "checking",
      currency: "USD",
      iban: "US440029310008232645891123",
      balance: 250.5,
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
