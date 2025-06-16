import React from "react";
import Autoplay, { AutoplayType } from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const logos = [
  "Stripe",
  "Framer",
  "Vercel",
  "Webflow",
  "Notion",
  "Figma",
  "Linear",
  "Slack",
];

// Duplicate logos to avoid visible gaps during loop
const duplicatedLogos = [...logos, ...logos, ...logos];

export default function LogoCarousel() {
  const plugin = React.useRef<AutoplayType | null>(null);

  React.useEffect(() => {
    if (!plugin.current) {
      plugin.current = Autoplay({
        delay: 2500, // a bit slower for natural feel
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      });
    }
  }, []);

  return (
    <div className="w-full overflow-hidden py-4">
      <Carousel
        plugins={plugin.current ? [plugin.current as any] : []}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 animate-[scroll_40s_linear_infinite] motion-reduce:animate-none">
          {duplicatedLogos.map((logo, index) => (
            <CarouselItem
              key={`${logo}-${index}`}
              className="px-4 basis-auto flex items-center justify-center"
            >
              <p className="text-sm font-semibold text-gray-400 whitespace-nowrap hover:text-gray-300 transition-colors duration-300">
                {logo}
              </p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
