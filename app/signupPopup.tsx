"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function SignUpModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if cookie exists
    const hasSeenPopup = Cookies.get("popupSeen");
    if (!hasSeenPopup) {
      setIsOpen(true);
      // Set cookie to expire in 7 days
      Cookies.set("popupSeen", "true", { expires: 7 });
    }
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative animate-fade-in">
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4">Sign Up for Updates!</h2>
        <p className="mb-4">Get notified when we launch new items.</p>

        <form className="flex flex-col gap-2">
          <input
            type="email"
            placeholder="Your email"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <button
            type="submit"
            className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
