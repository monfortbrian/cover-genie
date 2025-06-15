'use client';

import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const originalLogos = ['Stripe', 'Framer', 'Vercel', 'Webflow', 'Notion'];
const logos = [...originalLogos, ...originalLogos]; // duplicate for seamless looping

export default function LogoCarousel() {
  const plugin = React.useRef(
    Autoplay({
      delay: 1000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      playDirection: 'forward', // move left
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
        }}
      >
        <CarouselContent className="-ml-4">
          {logos.map((logo, index) => (
            <CarouselItem
              key={index}
              className="basis-auto px-3 flex items-center justify-center"
            >
              <p className="text-[16px] font-semibold text-gray-400 text-center whitespace-nowrap">
                {logo}
              </p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
