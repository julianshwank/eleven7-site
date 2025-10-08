"use client";
import Image from "next/image";
import Link from "next/link";

export default function CookUpPage() {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col overflow-hidden">
      {/* Page container to center + limit width */}
      <div className="max-w-6xl w-full mx-auto px-6">
        {/* Logo + Title */}
        <div className="flex flex-col items-center py-6">
          <Image src="/images/logo.png" alt="Eleven-7 Logo" width={80} height={80} />
          <h1 className="text-2xl font-bold mt-4">Cook Up</h1>
        </div>

        {/* Back button row */}
        <div className="flex items-center py-6">
          <Link
            href="/packs"
            className="text-white border border-white px-4 py-2 hover:bg-white hover:text-black transition"
          >
            ← Back to Store
          </Link>
        </div>

        {/* Video */}
        <div className="flex justify-center">
          <div className="w-full max-w-sm">
            <video
              autoPlay
              loop
              playsInline
              className="w-full h-auto rounded-lg shadow-lg"
            >
              <source src="/videos/cookup.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Caption */}
        <p className="mt-4 text-sm text-gray-300 text-center pb-12">
          Cook up footage of miguellondon and Julian creating Mausoleum
        </p>
      </div>
    </div>
  );
}
