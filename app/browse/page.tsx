export default function BrowsePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Browse Items</h1>
      <div className="flex gap-4 mb-6">
  <button className="px-4 py-2 rounded bg-gray-100 text-gray-800 hover:bg-gray-200">
    All
  </button>
  <button className="px-4 py-2 rounded bg-gray-100 text-gray-800 hover:bg-gray-200">
    Clothing
  </button>
  <button className="px-4 py-2 rounded bg-gray-100 text-gray-800 hover:bg-gray-200">
    Accessories
  </button>
  <button className="px-4 py-2 rounded bg-gray-100 text-gray-800 hover:bg-gray-200">
    Shoes
  </button>
</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow p-4 h-64 flex flex-col justify-between text-black">
            <div className="bg-gray-200 h-32 mb-2"></div>
            <h2 className="font-semibold">Item {i + 1}</h2>
            <p>£XX / week</p>
          </div>
        ))}
      </div>
    </div>
  );
}
