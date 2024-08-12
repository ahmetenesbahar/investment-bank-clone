import { rest } from "msw";

interface FormData {
  title: string;
  description: string;
  displayDate: string;
  recurrence: string;
  lastViewedDate: string;
}

export const addNoteHandlers = [
  rest.post("/api/addNote", (req, res, ctx) => {
    const { title, description, displayDate, recurrence, lastViewedDate } =
      req.body as FormData;

    if (
      !title ||
      !description ||
      !displayDate ||
      !recurrence ||
      !lastViewedDate
    ) {
      return res(
        ctx.status(400),
        ctx.json({ message: "Missing required fields" })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        message: "Note added successfully",
        note: {
          title,
          description,
          displayDate,
          recurrence,
          lastViewedDate,
        },
      })
    );
  }),
];
