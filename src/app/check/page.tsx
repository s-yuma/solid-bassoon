"use client";
import { useFetchUser } from "@/hook/useFetch";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const Page = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") as string;

  const { data, error } = useFetchUser(name);
  {
    data && console.log(data);
  }

  return (
    <div>
      {data && (
        <div>
          <div>ユーザー情報</div>
          <p data-testid="name">{data[0]?.name}</p>
          <p data-testid="birth">{data[0]?.birth}</p>
          <p data-testid="email">{data[0]?.email}</p>
        </div>
      )}
      {!data && <div>?????</div>}
      <Link href="/comp">登録</Link>
    </div>
  );
};

export default Page;
