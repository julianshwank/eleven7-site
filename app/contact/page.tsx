"use client";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col overflow-hidden">
      {/* Page container to center + limit width */}
      <div className="max-w-6xl w-full mx-auto px-6">
        {/* Logo + Title (same layout as Cook Up) */}
        <div className="flex flex-col items-center py-6">
          <Image src="/images/logo.png" alt="Eleven-7 Logo" width={80} height={80} />
          <h1 className="text-2xl font-bold mt-4">Contact</h1>
        </div>

        {/* Back button row (same position/style as Cook Up) */}
        <div className="flex items-center py-6">
          <Link
            href="/packs"
            className="text-white border border-white px-4 py-2 hover:bg-white hover:text-black transition"
          >
            ← Back to Store
          </Link>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-300">
For ALL enquiries, contact: eleven7duo@gmail.com          </p>
        </div>
      </div>
    </div>
  );
}
