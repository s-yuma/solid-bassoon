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

  const idValue = watch("id") || "";
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

  const onSubmit = (data: any) => console.log(errors.password?.message);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 items-center mt-3"
    >
      <input
        {...register("id")}
        placeholder="Name 必須"
        className=" border"
      />
      {errors.id?.message && <p>{errors.id.message}</p>}
      <input
        {...register("password")}
        placeholder="Password 必須"
        className=" border"
      />
      {(errors.password?.message === "入力必須です" || errors.password?.message === "パスワードは31文字以下で入力してください" ) &&  <p>{errors.password.message}</p>}

      <div>
        <div className="flex">
          <div>
            {passwordValue.length === 0
              ? "○"
              : isPasswordLengthValid && passwordValue.length > 0
              ? "✅"
              : "❌"}
          </div>
          <p
            className={`${
              passwordValue.length === 0
                ? "text-black"
                : isPasswordLengthValid && passwordValue.length > 0
                ? "text-black"
                : "text-red-500"
            }`}
          >
            9文字以上で入力してください
          </p>
        </div>

        <div className="flex">
          <div>
            {passwordValue.length === 0
              ? "○"
              : hasUppercaseLetter && passwordValue.length > 0
              ? "✅"
              : "❌"}
          </div>
          <p
            className={`${
              passwordValue.length === 0
                ? "text-black"
                : hasUppercaseLetter && passwordValue.length > 0
                ? "text-black"
                : "text-red-500"
            }`}
          >
            半角英字　大文字を含めてください
          </p>
        </div>

        <div className="flex">
          <div>
            {passwordValue.length === 0
              ? "○"
              : hasLowercaseLetter && passwordValue.length > 0
              ? "✅"
              : "❌"}
          </div>
          <p
            className={`${
              passwordValue.length === 0
                ? "text-black"
                : hasLowercaseLetter && passwordValue.length > 0
                ? "text-black"
                : "text-red-500"
            }`}
          >
            半角英字　小文字を含めてください
          </p>
        </div>

        <div className="flex">
          <div>
            {passwordValue.length === 0
              ? "○"
              : hasDigit && passwordValue.length > 0
              ? "✅"
              : "❌"}
          </div>
          <p
            className={`${
              passwordValue.length === 0
                ? "text-black"
                : hasDigit && passwordValue.length > 0
                ? "text-black"
                : "text-red-500"
            }`}
          >
            半角数字を含めてください
          </p>
        </div>

        <div className="flex">
          <div>
            {passwordValue.length === 0
              ? "○"
              : hasSymbol && passwordValue.length > 0
              ? "✅"
              : "❌"}
          </div>
          <p
            className={`${
              passwordValue.length === 0
                ? "text-black"
                : hasSymbol && passwordValue.length > 0
                ? "text-black"
                : "text-red-500"
            }`}
          >
            記号を含めてください
          </p>
        </div>
      </div>
      <button
        type="submit"
        className=" border px-2 py-1 bg-sky-300"
        disabled={idValue.length === 0 || passwordValue.length === 0}
        style={{
          color:
            idValue.length === 0 || passwordValue.length === 0
              ? "gray"
              : "black",
        }}
      >
        登録
      </button>
      <div>{isValid ? "問題なし" : "問題あり"}</div>
    </form>
  );
}
