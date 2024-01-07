"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        className="border border-slate-500 px-9 py-2"
        placeholder="Topic Title"
        type="text"
      />
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        className="border border-slate-500 resize-y w-full px-9 py-4 h-36"
        cols="30"
        rows="10"
        placeholder="Description"
      ></textarea>
      <button
        type="submit"
        className="font-bold rounded-lg w-32 ml-auto text-white py-3 px-6 bg-green-500"
      >
        Add Topic
      </button>
    </form>
  );
}
