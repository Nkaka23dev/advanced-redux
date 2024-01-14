import { ordered, restocked } from "../features/iceCream";
import { useAppDispatch, useAppSelector } from "../app/hooks";

export default function IceCream() {
  const iceCream = useAppSelector((state) => state.iceCream.numberOfIceCream);
  const dispatch = useAppDispatch();

  return (
    <div className="px-10 space-y-3 mt-5 border-t-2 ">
      <h1 className="text-2xl font-semibold">IceCreams</h1>
      <p>
        Number of Icecream : <span>{iceCream}</span>
      </p>
      <div className="flex  gap-5">
        <button
          onClick={() => dispatch(ordered())}
          className="px-10 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white"
        >
          Order iceCream
        </button>
        <button
          onClick={() => dispatch(restocked(10))}
          className="px-10 py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white"
        >
          Restore Them
        </button>
      </div>
    </div>
  );
}
