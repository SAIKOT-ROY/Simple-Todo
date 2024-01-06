import RemoveBtn from "@/app/component/RemoveBtn/RemoveBtn"
import Link from "next/link";
import {HiPencilAlt} from "react-icons/hi"
export default function TopicsList() {
  return (
    <>
    <div className="flex rounded-lg shadow-md justify-between border border-slate-400 mb-4 px-8 py-8">
        <div>
            <h2 className="font-bold mb-2 text-2xl">Topic Title</h2>
            <h2>Topic Description</h2>
        </div>
        <div className="flex items-center gap-3">
            <RemoveBtn />
            <Link href={"editTopic/123"}>
                <HiPencilAlt size={24} />
            </Link>
        </div>
    </div>
    </>
  );
}
