"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, Schema } from "./schema";

// Zodスキーマの定義

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
    mode: "onSubmit",
  });

  const nameValue = watch("name") || "";
  const passwordValue = watch("password") || "";

  // 9文字以下
  const isPasswordLengthValid = passwordValue.length >= 9;

  // 半角英字大文字
  const hasUppercaseLetter = /[A-Z]/.test(passwordValue);

  // 半角英字小文字
  const hasLowercaseLetter = /[a-z]/.test(passwordValue);

  // 半角数字
  const hasDigit = /\d/.test(passwordValue);

  // 記号
  const hasSymbol = /[!\"#$%&'()*+,-./:;<=>?@[\]^_`{}|~]/.test(passwordValue);

  const onSubmit = (data: any) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 items-center mt-3"
    >
      <input
        {...register("name")}
        placeholder="Name 必須"
        className=" border"
      />
      {errors.name?.message && <p>{errors.name.message}</p>}
      <input
        {...register("password")}
        placeholder="Password 必須"
        className=" border"
      />
      {errors.password?.message && <p>{errors.password.message}</p>}
      <div className="flex ">
        <div>{`${!isPasswordLengthValid ? `❌` : `✅`}`}</div>
        <p
          className={`${
            !isPasswordLengthValid ? `text-red-500` : `text-black`
          }`}
        >
          9文字以上で入力してください
        </p>
      </div>
      <div className="flex">
        <div>{`${!hasUppercaseLetter ? `❌` : `✅`}`}</div>
        <p className={`${!hasUppercaseLetter} && text-red-500`}>
          半角英字　大文字を入れてください
        </p>
      </div>
      <div className="flex">
        <div>{`${!hasLowercaseLetter ? `❌` : `✅`}`}</div>
        <p className={`${!hasLowercaseLetter} && text-red-500`}>
          半角英字　小文字を含めてください
        </p>
      </div>
      
      <div className="flex">
        <div>{`${!hasDigit ? `❌` : `✅`}`}</div>
        <p className={`${!hasDigit} && text-red-500`}>
          半角数字を含めてください。
        </p>
      </div>
      <div className="flex">
        <div>{`${!hasSymbol ? `❌` : `✅`}`}</div>
        <p className={`${!hasSymbol} && text-red-500`}>記号を含めてください</p>
      </div>
      <input {...register("email")} placeholder="Email" className=" border" />
      {errors.email?.message && <p>{errors.email.message}</p>}
      <input {...register("age")} placeholder="Age" className=" border" />
      {errors.age?.message && <p>{errors.age.message}</p>}
      <input {...register("birth")} placeholder="Birth" className=" border" />
      {errors.birth?.message && <p>{errors.birth.message}</p>}
      <button
        type="submit"
        className=" border px-2 py-1 bg-sky-300"
        disabled={nameValue.length === 0 || passwordValue.length === 0}
        style={{
          color:
            nameValue.length === 0 || passwordValue.length === 0
              ? "gray"
              : "black",
        }}
      >
        登録
      </button>
    </form>
  );
}
