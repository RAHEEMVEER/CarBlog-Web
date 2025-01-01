"use client";

import React from "react";
import { useState } from "react";

interface Comment {
  inputVal: string;
  carName: string;
}

export default function Comments({ carName }: any) {
  const [inputVal, setInputVal] = useState<string>("");
  const [commentVal, setComment] = useState<Comment[]>([]);

  const handleChange = (event: any) => {
    setInputVal(event.target.value);
  };

  const submit = async (e: any) => {
    e.preventDefault();
    if (inputVal.trim() !== "") {
      await postComment();
      setInputVal("");
      await getComment();
    }
  };

  const postComment = async () => {
    try {
      const req = await fetch("/api/comment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ inputVal, carName }),
      });

      const response = await req.json();
      console.log(response);
    } catch (error) {
      console.error("Error not save comment", error);
    }
  };

  const getComment = async () => {
    try {
      const req = await fetch(`/api/comment?carName=${carName}`);
      const res = await req.json();
      setComment(res);
    } catch (err) {
      console.error("Failed to fetch comments:", err);
    }
  };
  return (
    <div className="mt-8 sm:mt-14">
      <h1 className="text-center text-xl sm:text-2xl text-gray-700">
        Give Your Feedback Here!
      </h1>
      <form className="flex justify-center items-center gap-3 mt-3">
        <input
          type="text"
          placeholder="Enter Comment"
          className="h-[35px] px-2 text-sm outline-blue-800"
          onChange={handleChange}
          value={inputVal}
        />
        <button
          className="bg-blue-800 w-[35px] h-[35px] rounded-md text-white"
          onClick={submit}
        >
          <i className="ri-send-plane-2-fill"></i>
        </button>
      </form>
      <div>
        <h1>comment</h1>
      </div>
      {carName === carName
        ? commentVal.map((val) => <div>{val.inputVal}</div>)
        : ""}
    </div>
  );
}
