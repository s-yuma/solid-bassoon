import { z } from "zod";

export const schema = z.object({
  name: z
    .string()
    .max(5, { message: "5文字以上です" })
    .refine((value) => value.trim().length > 0, {
      message: "必須入力です",
    }),
  password: z
    .string()
    .max(5, { message: "5文字以上です" })
    .refine((value) => value.trim().length > 0, {
      message: "必須入力です",
    }),
  email: z.string().max(5, { message: "5文字以上です" }),
  age: z.string().max(5, { message: "5文字以上です" }),
  birth: z.string().max(5, { message: "5文字以上です" }),
});

export type Schema = z.infer<typeof schema>;
