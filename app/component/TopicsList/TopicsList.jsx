import RemoveBtn from "@/app/component/RemoveBtn/RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      // cache: "no-store",
      next: {
        revalidate: 10,
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return await res.json();
  } catch (error) {
    console.log("Error loading topics", error);
    return [];
  }
};

export default async function TopicsList() {
  const { topics } = await getTopics();

  return (
    <>
      {topics.map((t) => (
        <div
          key={t._id}
          className="flex rounded-lg shadow-md justify-between border border-slate-400 mb-4 px-8 py-8"
        >
          <div>
            <h2 className="font-bold mb-2 text-2xl">{t.title}</h2>
            <h2>{t.description}</h2>
          </div>
          <div className="flex items-center gap-3">
            <RemoveBtn id={t._id} />
            <Link href={`editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
