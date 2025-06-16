
'use client';

import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const originalLogos = ['Stripe', 'Framer', 'Vercel', 'Webflow', 'Notion'];
const logos = [...originalLogos, ...originalLogos, ...originalLogos]; // triple for smoother infinite loop

export default function LogoCarousel() {
  const plugin = React.useRef(
    Autoplay({
      delay: 1000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    })
  );

  return (
    <div className="w-full overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        opts={{
          align: 'start',
          loop: true,
          dragFree: true,
        }}
      >
        <CarouselContent className="-ml-2">
          {logos.map((logo, index) => (
            <CarouselItem
              key={`${logo}-${index}`}
              className="basis-auto px-2 flex items-center justify-center"
            >
              <p className="text-[14px] font-medium text-gray-400 text-center whitespace-nowrap opacity-80 hover:opacity-100 transition-opacity duration-300">
                {logo}
              </p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}