import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { add, deduct } from "../features/CakeSlice";

export default function Cake() {
  const [value, setValue] = useState(1);
  const cakes = useSelector((state) => state.cake.numberOfCake);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="text-2xl">
        Number of Cakes:{" "}
        <span className="text-blue-500 font-bold">{cakes}</span>
      </h1>
      <input
        type="text"
        onChange={(e) => setValue(parseInt(e.target.value))}
        placeholder="Enter number of cake to restoke"
        className="w-full py-4 px-3 border border-blue-500 outline-none mt-4"
      />
      <div className="flex gap-5 mt-3">
        <button
          onClick={() => {
            dispatch(deduct());
          }}
          className="py-3 px-5 bg-blue-500 text-white rounded-sm hover:bg-blue-600"
        >
          Order Cake
        </button>
        <button
          onClick={() => {
            dispatch(add(value));
          }}
          className="py-3 px-5 bg-blue-500 text-white rounded-sm hover:bg-blue-500"
        >
          Restoke Cake
        </button>
      </div>
    </div>
  );
}
