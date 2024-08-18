import { rest } from "msw";

interface FormData {
  id?: string;
  title: string;
  description: string;
  displayDate: string;
  recurrence: string;
  lastViewedDate: string;
}

export const editNoteHandlers = [
  rest.post("/api/editNote", (req, res, ctx) => {
    const { title, description, displayDate, recurrence, lastViewedDate, id } =
      req.body as FormData;

    if (
      !title ||
      !description ||
      !displayDate ||
      !recurrence ||
      !id ||
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
        message: "Note edited successfully",
        note: {
          title,
          description,
          displayDate,
          recurrence,
          lastViewedDate,
          id,
        },
      })
    );
  }),
];
