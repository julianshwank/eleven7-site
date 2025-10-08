const packs: any = {
    quin: {
      name: "Quin Kiu Vol. 4",
      description: "Dark textures, soulful progressions, and analog tones.",
      image: "/images/quin.png",
      price: "$29.99",
      soundcloud: "https://soundcloud.com/your-pack-preview",
      buy: "https://yourstore.com/quin-kiu-vol-4"
    },
  };
  
  export default function PackDetail({ params }: { params: { id: string } }) {
    const pack = packs[params.id];
    if (!pack) return <p className="text-white">Pack not found</p>;
  
    return (
      <div className="bg-black min-h-screen text-white p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold">{pack.name}</h1>
        <img src={pack.image} alt={pack.name} className="w-80 my-4" />
        <p className="mb-4">{pack.description}</p>
        <iframe
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(pack.soundcloud)}&color=%23ff5500`}
        />
        <p className="mt-4 font-bold">{pack.price}</p>
        <a
          href={pack.buy}
          target="_blank"
          className="mt-4 bg-white text-black px-6 py-2 hover:bg-gray-300"
        >
          Buy Now
        </a>
      </div>
    );
  }
  