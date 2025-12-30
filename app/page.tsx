import Image from "next/image";
import SignUpModal from "./signupPopup";

export default function HomePage() {
  return (
    <div>
      <SignUpModal/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow p-4 h-48 flex items-center justify-center text-black">
            Placeholder {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

