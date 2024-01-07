"use client";

import { HiOutlineTrash } from "react-icons/hi";

export default function RemoveBtn({ id }) {
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      await fetch(
        `http://localhost:3000/api/topics?id=${id}`,
        {
          method: "DELETE",
        },
        {
          next: {revalidate: 5}
        },
      );
    }
  };

  return (
    <button onClick={removeTopic} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
}
