"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditTopicForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type" : "application-json"
        },
        body: JSON.stringify({newTitle, newDescription})
      });
        if(!res.ok) {
          throw new Error("Failed to Update Topics")
        }
        router.refresh()
        router.push("/")
        // return res.json()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="border border-slate-500 px-9 py-2"
        placeholder="Topic Title"
        type="text"
      />
      <textarea
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="border border-slate-500 resize-y w-full px-9 py-4 h-36"
        cols="30"
        rows="10"
        placeholder="Description"
      ></textarea>
      <button type="submit" className="font-bold rounded-lg w-40 ml-auto text-white py-3 px-6 bg-green-500">
        Update Topic
      </button>
    </form>
  );
}
