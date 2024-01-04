import { useDispatch, useSelector } from "react-redux";
import { ordered } from "../features/cakeSlice";

export default function Cake() {
  const cakes = useSelector((state) => state.cakes.numberOfCake);
  const dispatch = useDispatch();

  return (
    <div className="px-10 space-y-3">
      <h1 className="text-2xl font-semibold">Cakes</h1>
      <p>
        Number of Cake: <span>{cakes}</span>
      </p>
      <button
        onClick={() => dispatch(ordered())}
        className="px-10 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white"
      >
        Order Cake
      </button>
    </div>
  );
}
