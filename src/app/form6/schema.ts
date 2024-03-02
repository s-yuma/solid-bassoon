import { z } from "zod";
// a
export const schema = z.object({
  name: z
    .string()
    .max(5, { message: "5文字以上です" })
    .refine((value) => value.trim().length > 0, {
      message: "必須入力です",
    }),
  password: z
    .string()
    .min(9, "パスワードは9文字以上で入力してください")
    .max(31, "パスワードは31文字以下で入力してください")
    .regex(
      /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[!\"#$%&'()*+,-./:;<=>?@[\]^_`{}|~])[\w!\"#$%&'()*+,-./:;<=>?@[\]^_`{}|~]{9,31}$/,
      "パスワードは半角英字（大文字・小文字）、半角数字、記号を含めてください"
    ),
  email: z.string().max(5, { message: "5文字以上です" }),
  age: z.string().max(5, { message: "5文字以上です" }),
  birth: z.string().max(5, { message: "5文字以上です" }),
});

export type Schema = z.infer<typeof schema>;
