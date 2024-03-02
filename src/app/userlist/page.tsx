"use client"

import React, { useState, useEffect } from 'react';

   type user = {
     "postId": string,
     "name": number,
     "email": string,
     "body": string
   }

const Userpage = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // 現在のページ番号
  const itemsPerPage = 25; // 1ページあたりのアイテム数

  const url = "https://jsonplaceholder.typicode.com/comments";

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error("エラーが発生しました");
        }
        return res.json();
      })
      .then(data => setPosts(data));
  }, []);

  // 総ページ数を計算
  const pageCount = Math.ceil(posts.length / itemsPerPage);

  // 現在のページに表示するアイテムを抽出
  const displayedItems = posts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // ページ切り替えを処理
  const handlePageChange = (newPage:any) => {
    setCurrentPage(newPage);
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("page", newPage);
    window.history.replaceState({}, "", `${window.location.pathname}?${searchParams.toString()}`);
  };

  return (
    <>
      <ul>
        {displayedItems.map((item:user) => (
          <li key={item.postId}>
            <div>名前: {item.name}</div>
            <div>メールアドレス: {item.email}</div>
            <div>本文: {item.body}</div>
          </li>
        ))}
      </ul>
      <div>
        {Array.from({ length: pageCount }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            style={{ margin: "0.5rem" }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default Userpage;
