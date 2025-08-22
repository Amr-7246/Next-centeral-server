import React from "react";
import { Star, ShieldCheck, Leaf, Gem } from "lucide-react";

const CeracomaPref = () => {
  const features = [
    {
      icon: <Star className="w-8 h-8 text-yellow-400" />,
      head: "Excellence Since 1985",
      description:
        "For over three decades, we’ve crafted timeless ceramic pieces that blend tradition with innovation.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />,
      head: "Trusted Quality",
      description:
        "Each product is carefully inspected and hand-finished to meet the highest standards of durability and beauty.",
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-400" />,
      head: "Sustainable Craft",
      description:
        "We prioritize eco-friendly practices, ensuring our materials and processes respect the environment.",
    },
    {
      icon: <Gem className="w-8 h-8 text-sky-400" />,
      head: "Unique Designs",
      description:
        "Our artisans infuse creativity into every piece, making each item a work of art that tells its own story.",
    },
  ];

  return (
    <div className="flex flex-col gap-10 pb-12 items-center">
      {/* Company Story */}
      <div className="w-[90%] flex-col flex">
        <h2 className="font-winky font-black z-2 text-center text-transparent bg-clip-text mt-5 bg-gradient-to-r from-sky-400 via-white to-sky-400 w-fit text-[36px] md:text-[44px] border-l-5 border-sky-400 pl-3">
          Crafting Excellence Since 1985
        </h2>
        <p className="text-sky-200 w-[80%] text-[18px] md:text-[18px] mt-3">
          Born from passion and perfected through generations, our ceramic
          company has been shaping homes, businesses, and lifestyles with
          timeless designs. From delicate tiles to robust stoneware, every
          creation reflects dedication, heritage, and craftsmanship.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-[90%]">
        {features.map((f, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white/20 border-2 border-sky-300/50 backdrop-blur-sm p-6 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            {f.icon}
            <h3 className="mt-4 text-xl font-semibold text-sky-300">
              {f.head}
            </h3>
            <p className="mt-2 text-white text-center text-sm">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CeracomaPref;
