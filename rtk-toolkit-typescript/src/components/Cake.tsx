import { ordered, restocked } from "../features/cakeSlice";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";

export default function Cake() {
  const [value, setValue] = useState(1);
  const cakes = useAppSelector((state) => state.cakes.numberOfCake);
  const dispatch = useAppDispatch();

  return (
    <div className="px-10 space-y-3">
      <h1 className="text-2xl font-semibold">Cakes</h1>
      <p>
        Number of Cake:{" "}
        <span className="text-violet-700 font-bold text-2xl">{cakes}</span>
      </p>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        className="w-full py-4 px-3 border border-green-500 outline-none"
        placeholder="Enter to restore"
      />
      <div className="flex gap-4">
        <button
          onClick={() => dispatch(ordered())}
          className="px-10 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white"
        >
          Order Cake
        </button>
        <button
          onClick={() => {
            dispatch(restocked(value));
            setValue(0);
          }}
          className="px-10 py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white"
        >
          Restore Them
        </button>
      </div>
    </div>
  );
}
