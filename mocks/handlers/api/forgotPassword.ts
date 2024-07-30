import { rest } from "msw";
import { ForgotPasswordRequestBody, ForgotPasswordResponse } from "@/types/api";

export const forgotPasswordHandlers = [
  rest.post<ForgotPasswordRequestBody, ForgotPasswordResponse>(
    "/api/forgotPassword",
    (req, res, ctx) => {
      const { customerNumber, phoneNumber, captcha, commercialNumber } =
        req.body;

      if (typeof customerNumber !== "number" || !captcha) {
        return res(
          ctx.status(400),
          ctx.json({ message: "Missing or invalid fields" })
        );
      }

      if (commercialNumber) {
        if (
          commercialNumber === 123456 &&
          customerNumber === 123456 &&
          phoneNumber === 1234567890 &&
          captcha === "179998"
        ) {
          return res(
            ctx.status(200),
            ctx.json({
              message: "ForgotPassword successful",
              PIN: "2303",
            })
          );
        } else {
          return res(
            ctx.status(401),
            ctx.json({ message: "Missing or invalid fields" })
          );
        }
      } else {
        if (
          customerNumber === 123456 &&
          phoneNumber === 1234567890 &&
          captcha === "179998"
        ) {
          return res(
            ctx.status(200),
            ctx.json({
              message: "General ForgotPassword successful",
              PIN: "2303",
            })
          );
        } else {
          return res(
            ctx.status(401),
            ctx.json({
              message: "Invalid customer number, phone number, or captcha",
            })
          );
        }
      }
    }
  ),
];
