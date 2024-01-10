import Cake from "./components/Cake";
import IceCrearm from "./components/IceCrearm";
import Users from "./components/Users";

export default function App() {
  return (
    <section className="max-w-6xl mx-auto bg-gray-100 py-10 px-6">
      <Cake />
      <div className="border my-10"></div>
      <IceCrearm />
      <div className="border my-10"></div>
      <Users />
    </section>
  );
}
