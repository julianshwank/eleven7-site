"use client";
import Image from "next/image";
import PackCard from "@/components/PackCard";
import MusicPlayer from "@/components/MusicPlayer";
import { Menu, X } from "lucide-react"; // icons
import { useState } from "react";
import Link from "next/link";

const packs = [
  { id: "quin", name: "117 VOL.1", price: "£9.99 GBP", image: "/images/artwork.jpg" }
];

export default function PacksPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black min-h-screen text-white flex flex-col">
      <div className="max-w-6xl w-full mx-auto px-6">
        {/* Logo + Title */}
        <div className="flex flex-col items-center py-6">
          <Image
            src="/images/logo.png"
            alt="Eleven-7 Logo"
            width={80}
            height={80}
          />
          <h1 className="text-2xl font-bold mt-4">Main Catalog</h1>
        </div>

        {/* Menu button (below title on mobile, inline on larger screens) */}
        <div className="flex justify-center md:justify-start py-4">
          <button onClick={() => setMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Filters + Sort + Count */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 py-4 text-sm">
          {/* Filter + Sort controls */}
          <div className="flex flex-col sm:flex-row gap-4">
            <label className="text-white">
              Filter by:
              <select className="ml-2 bg-black text-white border border-white px-2 py-1 rounded">
                <option>All products</option>
                <option>Paid</option>
                <option>Free</option>
              </select>
            </label>
            <label className="text-white">
              Sort by:
              <select className="ml-2 bg-black text-white border border-white px-2 py-1 rounded">
                <option>Date, new to old</option>
                <option>Date, old to new</option>
                <option>Price, low to high</option>
                <option>Price, high to low</option>
              </select>
            </label>
          </div>
          {/* Product count */}
          <span>{packs.length} products</span>
        </div>

        {/* Grid of packs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-20 place-items-center">
          {packs.map((pack) => (
            <PackCard key={pack.id} pack={pack} />
          ))}
        </div>
      </div>

      <MusicPlayer />

      {/* Pop-out menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col items-center justify-center gap-8 text-xl font-medium">
          {/* Close button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6"
          >
            <X className="w-6 h-6" />
          </button>

          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:underline">
            Home
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:underline">
            About Us
          </Link>
          <Link href="/cook-up" onClick={() => setMenuOpen(false)} className="hover:underline">
            Cook Up Footage
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:underline">
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}
