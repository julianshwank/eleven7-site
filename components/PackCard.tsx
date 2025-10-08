"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function PackCard({ pack }: { pack: any }) {
  const [hover, setHover] = useState(false);

  return (
    <Link 
      href="https://payhip.com/b/aC4qb" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <div
        className="relative cursor-pointer inline-block"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/* Artwork */}
        <Image
          src={pack.image}
          alt={pack.name}
          width={400}
          height={400}
          className="object-cover"
        />

        {/* Overlay */}
        {hover && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
            <span className="text-lg text-white">{pack.name}</span>
          </div>
        )}
      </div>
    </Link>
  );
}
