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
          <h1 className="text-2xl font-bold mt-4">About Us</h1>
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
          <p className="mb-4">
  <strong>Eleven7</strong> is a British music production duo and multi-instrumentalists 
  made up of Miguel and Julian. Known for their versatility across sounds and genres, 
  the pair bring a unique blend of musicianship, experimentation, and forward-thinking 
  production to every project.
</p>

<p className="mb-4">
  They have <strong>worked with artists including KWN, Lancey Foux, Lil Yachty, Maeta, Joe James, 
  and many more. Their work also includes soundtracking culture through collaborations with iconic brands 
  such as Under Armour, NFL, Trapstar and many more</strong>, building a reputation for delivering both cutting-edge and 
  timeless records and sounds. Their collaborative approach and deep musicality allow them to seamlessly shift 
  between styles, whether crafting genre-bending soundscapes, hard-hitting rhythms, or soulful melodies.
</p>

<p>
  Constantly evolving, Eleven7 embody the spirit of modern producers who don’t just make beats — 
  they create worlds.
</p>
          </p>
        </div>
      </div>
    </div>
  );
}
