import { useParams } from "next/navigation";

export default function ItemPage() {
  const { id } = useParams();
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-black">Item {id}</h1>
      <div className="bg-white rounded-lg shadow p-6 h-96">
        <div className="bg-gray-200 h-48 mb-4"></div>
        <p>Description placeholder</p>
        <p className="mt-2">$XX / week</p>
        <button className="mt-4 px-4 py-2 bg-gray-900 text-white rounded">Rent this item</button>
      </div>
    </div>
  );
}
