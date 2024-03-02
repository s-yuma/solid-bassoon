"use client";
import axios from "axios";
import { redirect } from "next/navigation";
import React, { useRef } from "react";
import { useRouter } from 'next/navigation'

const Page = () => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .post("http://localhost:3004/user", {
        name: nameRef.current?.value,
        birth: birthRef.current?.value,
        email: emailRef.current?.value,
        id: Math.floor( Math.random() * 100 )
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        // router.push(`http://localhost:3000/check/?name=${nameRef.current?.value}`)
      })
      .finally(() => {
        router.push(`http://localhost:3000/check/?name=${nameRef.current?.value}`)
      })
  };

  const nameRef = useRef<HTMLInputElement>(null);
  const birthRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const router = useRouter()
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
        <form className="flex-col border p-5" onSubmit={handleSubmit}>
          <label htmlFor="name" className="flex">
            名前:
            <input type="text" name="name" id="name" ref={nameRef} className="border" />
          </label>
          <label htmlFor="birth" className="flex">
            誕生日:
            <input type="date" name="birth" id="birth" ref={birthRef} className=" border"/>
          </label>
          <label htmlFor="email" className="flex">
            メール:
            <input type="email" name="email" id="email" ref={emailRef} className=" border"/>
          </label>
          <button type="submit" className="bg-red-300 w-full mt-3">
            送信
          </button>
        </form>
      </main>
    </div>
  );
};

export default Page;
