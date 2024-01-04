import IceCream from "./components/IceCream";
import Users from "./components/Users";
import Cake from "./components/cake";

export default function App() {
  return (
    <div className="max-w-6xl mx-auto bg-gray-100 py-5 mt-5">
      <Cake />
      <IceCream />
      <Users />
    </div>
  );
}
