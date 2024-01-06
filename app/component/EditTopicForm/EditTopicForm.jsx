export default function EditTopicForm() {
  return (
    <form className="flex flex-col gap-3">
      <input
        className="border border-slate-500 px-9 py-2"
        placeholder="Topic Title"
        type="text"
      />
      {/* <input
          className="border border-slate-500 resize-y w-full px-9 py-2 h-32"
          placeholder="Topic Description"
          type="text"
        /> */}
      <textarea
        className="border border-slate-500 resize-y w-full px-9 py-4 h-36"
        cols="30"
        rows="10"
        placeholder="Description"
      ></textarea>
      <button className="font-bold rounded-lg w-40 ml-auto text-white py-3 px-6 bg-green-500">
        Update Topic
      </button>
    </form>
  );
}
