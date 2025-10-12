"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [hover, setHover] = useState(false);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-white">
      <div
        className="flex flex-col items-center cursor-pointer"
        onClick={() => router.push("/packs")}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/* Logo */}
        <Image
          src="/images/logo.jpg"
          alt="Eleven-7 Logo"
          width={508}
          height={705}
          className={`transition-transform duration-300 ${
            hover ? "scale-105" : "scale-100"
          }`}
        />

        {/* Button */}
        <button
          onClick={() => router.push("/packs")}
          className={`mt-6 border border-black px-6 py-2 text-black transition ${
            hover ? "bg-black text-white" : "bg-transparent"
          }`}
        >
          Enter
        </button>
      </div>
    </div>
  );
}
