"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const destinations = [
  {
    title: "Santorini, Greece",
    description: "Experience the stunning sunsets and white-washed buildings of this Mediterranean paradise",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80&w=1000",
    price: "From $299/night"
  },
  {
    title: "Bali, Indonesia",
    description: "Discover tropical beaches, ancient temples, and lush rice terraces",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1000",
    price: "From $199/night"
  },
  {
    title: "Swiss Alps",
    description: "Explore majestic mountains and pristine lakes in the heart of Europe",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&q=80&w=1000",
    price: "From $399/night"
  }
];

export default function ParallaxCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  return (
    <div ref={containerRef} className="relative space-y-24 py-12">
      {destinations.map((destination, index) => (
        <ParallaxCard
          key={destination.title}
          destination={destination}
          index={index}
          progress={scrollYProgress}
        />
      ))}
    </div>
  );
}

interface ParallaxCardProps {
  destination: {
    title: string;
    description: string;
    image: string;
    price: string;
  };
  index: number;
  progress: any;
}

function ParallaxCard({ destination, index, progress }: ParallaxCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;
  
  // Calculate the scroll range for this specific card
  const scrollStart = 0.1 + (index * 0.2); // Start later in the scroll progress
  const scrollEnd = scrollStart + 0.4; // Longer animation duration
  
  // X transform - moves left or right based on position
  const x = useTransform(
    progress,
    [scrollStart, scrollEnd],
    [0, isEven ? -150 : 150]
  );

  // Scale transform - gets smaller as user scrolls
  const scale = useTransform(
    progress,
    [scrollStart, scrollEnd],
    [1, 0.85]
  );

  // Opacity transform - fades out
  const opacity = useTransform(
    progress,
    [scrollStart, scrollEnd],
    [1, 0]
  );

  return (
    <motion.div
      ref={cardRef}
      style={{ x, scale, opacity }}
      className={`flex ${isEven ? 'flex-row' : 'flex-row-reverse'} gap-8 items-center max-w-7xl mx-auto px-4`}
    >
      <div className="w-1/2">
        <div className="relative h-[600px] rounded-2xl overflow-hidden group">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
          <img
            src={destination.image}
            alt={destination.title}
            className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700"
          />
        </div>
      </div>
      <div className="w-1/2 space-y-6">
        <h2 className="text-4xl font-bold text-gray-900">{destination.title}</h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          {destination.description}
        </p>
        <p className="text-2xl font-semibold text-gray-900">{destination.price}</p>
        <Button size="lg" className="rounded-full">
          Book Now <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </motion.div>
  );
}