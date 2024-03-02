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
