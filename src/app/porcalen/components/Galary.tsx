import { porcalenProject } from '@/pub/assets/porcalen'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { Palette, Ruler, Sparkles, Gem, ShoppingCart } from "lucide-react";
import { ThreeDBtn } from '@/components/Buttons';

interface props {
  image: string | StaticImageData,
  title: string
  cardS?: string
  right?: boolean
  PStyle?: string
  cta?: string
  porcelainProducts: any
}

const Galary = ({image,porcelainProducts, title, cardS, right, PStyle, cta = " Buy Now "}:props) => {
  const finallCardStyles = cardS ? cardS : right ? " absolute top-0 -right-5 " : " absolute top-0 -left-5 "
  const finallPStyles = PStyle ? PStyle : right ? " absolute top-10 -left-5 text-blue-800" : " absolute top-10 -right-5 text-amber-800"
  return (
    <div className='relative h-[500px] ' >
      {/*//& pining Dots */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 z-20">
        <div className="w-6 h-6 bg-black rounded-full shadow-lg" />
      </div>
      <div className="absolute h-full left-1/2 top-0 -translate-x-1/2 z-10">
        <div className="w-1 h-full bg-black shadow-lg" />
      </div>
      {/*//& card */}
      <div className={`${finallCardStyles} shadow-2xl shadow-black/50 rounded-4xl w-[50%] h-[330px]`}>
        <div className="relative w-[95%] h-full lg:w-full bg-black/10 rounded-4xl shadow-xl overflow-hidden flex flex-col justify-center p-10 mx-auto">
          <Image
            src={image}
            alt={title}
            fill
            className="absolute inset-0 object-cover "
          />
      </div>
      </div>
      {/*//& pref */}
      <div className={` ${finallPStyles} text-[20px]  w-[50%] text-center `}>
        <div className="relative flex flex-col gap-6 z-10">
          {/* Title */}
          <h2 className="text-[22px] pl-3 border-l-4 border-black md:text-3xl font-bold text-blue-900 flex items-center gap-3">
            {title}
          </h2>

          {/* Description */}
          <p className="text-black text-lg leading-relaxed">{porcelainProducts.description}</p>

          {/* Details Section */}
          <div className="grid grid-cols-2 gap-1 text-sm text-porc-dw bg-black/80 border-b-3 border-black p-3 rounded-t-lg">
            <div className="flex items-center gap-2">
              <Palette className="w-5 h-5 text-porc-b" />
              <span>{porcelainProducts.details.color}</span>
            </div>
            <div className="flex items-center gap-2">
              <Ruler className="w-5 h-5 text-porc-b" />
              <span>{porcelainProducts.details.size}</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-porc-b" />
              <span>{porcelainProducts.details.finish}</span>
            </div>
            <div className="flex items-center gap-2">
              <Gem className="w-5 h-5 text-porc-b" />
              <span>{porcelainProducts.details.material}</span>
            </div>
          </div>

          {/* Price + CTA */}
          <div className="flex items-center justify-between gap-4 mt-4">
            <span className="text-xl font-semibold text-porc-dg">{porcelainProducts.price}</span>
            <ThreeDBtn text={cta} buttonColors={'bg-porc-dg text-black text-[18px]'} spanColors={'bg-black'} icon={ <ShoppingCart/> }/>
          </div>
        </div>
      </div>

    </div>
  )
}


const porcelainProducts = [
  {
    title: "Floor & Wall Tiles",
    description: "Durable ceramic tiles designed for modern interiors and exteriors, combining strength with elegant patterns.",
    details: {
      color: "Marble White",
      size: "60x60cm · 80x80cm · Custom Sizes",
      finish: "Matte / Gloss Options",
      material: "High-Quality Ceramic",
    },
    price: "$25.00 / m²",
    cta: "Shop Now",
    image: porcalenProject.img_1,
  },
  {
    title: "Kitchen & Bathroom Tiles",
    description: "Moisture-resistant ceramics crafted to transform kitchens and bathrooms into stylish, functional spaces.",
    details: {
      color: "Ivory Beige",
      size: "30x60cm · 40x80cm",
      finish: "Gloss Glazed",
      material: "Ceramic Stoneware",
    },
    price: "$19.00 / m²",
    cta: "View Collection",
    image: porcalenProject.img_2,
  },
  {
    title: "Decorative Ceramic Pieces",
    description: "Accent ceramics with unique patterns and textures, perfect for feature walls and luxury interiors.",
    details: {
      color: "Ocean Blue Pattern",
      size: "20x20cm",
      finish: "Hand-Glazed",
      material: "Porcelain-Ceramic Blend",
    },
    price: "$8.00 / piece",
    cta: "Add to Cart",
    image: porcalenProject.img_3,
  },
  {
    title: "Custom Ceramic Solutions",
    description: "Made-to-order ceramic tiles and designs tailored to architects, designers, and project-specific needs.",
    details: {
      color: "Customizable",
      size: "Made-to-Measure",
      finish: "Gloss / Matte / Textured",
      material: "Premium Ceramic",
    },
    price: "Contact for Quote",
    cta: "Request Custom Design",
    image: porcalenProject.porcalen_2,
  },
];


const FinalGalary = () => {
  return(
      <section className="w-full py-20 bg-porc-lb flex flex-col items-center gap-16">
      <h1 className="text-4xl md:text-5xl font-bold text-black">
        Explore Our Ceramic Collections
      </h1>

      <div className="flex flex-col w-[90%] lg:w-[80%]">
        {porcelainProducts.map((area, idx) => (
          <Galary
            key={idx}
            title={area.title}
            image={area.image}
            right={idx % 2 === 1}
            porcelainProducts={area}
          />
        ))}
      </div>
    </section>
  )
}

export default FinalGalary
