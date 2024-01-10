export default function IceCrearm() {
  return (
    <div>
      <h1 className="text-2xl">
        Number of IceCream: <span className="text-green-800 font-bold">20</span>
      </h1>
      <input
        type="text"
        placeholder="Enter number of Icecream to restoke"
        className="w-full py-4 px-3 border border-green-500 outline-none mt-4"
      />
      <div className="flex gap-5 mt-3">
        <button className="py-3 px-5 bg-green-500 text-white rounded-sm hover:bg-green-500">
          Order IceCream
        </button>
        <button className="py-3 px-5 bg-green-500 text-white rounded-sm hover:bg-green-600">
          Restoke IceCream
        </button>
      </div>
    </div>
  );
}
