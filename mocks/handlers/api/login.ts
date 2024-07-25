import { rest } from "msw";
import { LoginRequestBody, LoginResponse } from "@/types/api";

export const loginHandlers = [
  rest.post<LoginRequestBody, LoginResponse>("/api/login", (req, res, ctx) => {
    const { customerNumber, password } = req.body;

    if (customerNumber === 123456 && password === 1234) {
      return res(
        ctx.status(200),
        ctx.json({ message: "Login successful", token: "fake-token" })
      );
    } else {
      return res(
        ctx.status(401),
        ctx.json({ message: "Invalid customer number or password" })
      );
    }
  }),
];
