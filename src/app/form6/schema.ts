import { z } from "zod";

export const schema = z.object({
  id: z
    .string()
    .max(5, { message: "5文字以上です" })
    .refine((value) => value.trim().length > 0, {
      message: "必須入力です",
    }),
  password: z
    .string()
    .nonempty({message:"入力必須です"})
    .min(9, {message: " "})
    .max(31, {message: "パスワードは31文字以下で入力してください"})
    .regex(
      /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[!\"#$%&'()*+,-./:;<=>?@[\]^_`{}|~])[\w!\"#$%&'()*+,-./:;<=>?@[\]^_`{}|~]{9,31}$/,
      {message: " "}),
});

export type Schema = z.infer<typeof schema>;
