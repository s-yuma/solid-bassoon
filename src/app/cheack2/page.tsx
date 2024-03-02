"use client";
import React, { useState } from "react";

const Page = () => {
  const [button1, setbutton1] = useState<boolean>(false);
  const [button2, setbutton2] = useState<boolean>(false);

  const handleButton1 = () => {
    if(!button1) {
      setbutton1(!button1)
    }
  }
  

  const handleButton2 = () => {
    if(!button2) {
      setbutton2(!button2)
    }
  }

  return (
    <div className="flex gap-3 flex-col">
      <button
        onClick={handleButton1}
      >
        ボタン1
      </button>
      <button
        onClick={handleButton2}
      >
        ボタン2
      </button>
      {(button1 && button2) && <button>ボタン３</button> }
    </div>
  );
};

export default Page;
