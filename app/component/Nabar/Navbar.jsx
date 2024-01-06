import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-slate-800 px-8 py-4 flex justify-between items-center">
            <Link className="text-white font-bold text-2xl" href={"/"}>Logan Coding</Link>
            <Link className="bg-white p-2 rounded-md" href={"/addTopic"}>Add Topic</Link>
        </nav>
    )
}