"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const goToPacks = () => {
    router.push("/packs");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black">
      <div className="flex flex-col items-center group cursor-pointer">
        {/* Logo with click + hover enlarge */}
        <div onClick={goToPacks}>
          <Image
            src="/images/logo.png"
            alt="Eleven-7 Logo"
            width={308}
            height={505}
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Button that highlights when logo is hovered */}
        <button
          onClick={goToPacks}
          className="mt-6 border border-black px-6 py-2 text-white transition 
                     group-hover:bg-black group-hover:text-white"
        >
          Enter
        </button>
      </div>
    </div>
  );
}
