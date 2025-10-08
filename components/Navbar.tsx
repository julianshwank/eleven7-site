"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // hamburger + close icons

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <nav className="w-full bg-black text-white flex items-center px-6 py-4">
        <button onClick={() => setOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Pop-out menu */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col items-center justify-center gap-8 text-xl font-medium">
          {/* Close button top-right */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Links */}
          <Link href="/" onClick={() => setOpen(false)} className="hover:underline">
            Home
          </Link>
          <Link href="/about" onClick={() => setOpen(false)} className="hover:underline">
            About Us
          </Link>
          <Link href="/cook-up" onClick={() => setOpen(false)} className="hover:underline">
            Cook Up Footage
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="hover:underline">
            Contact
          </Link>
        </div>
      )}
    </>
  );
}
