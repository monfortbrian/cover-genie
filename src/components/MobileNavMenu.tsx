
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '#hero',
  },
  {
    label: 'Form',
    href: '#generate',
  },
  {
    label: 'Contact',
    href: 'mailto:briandev007@gmail.com',
  },
];

export default function MobileNavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-gray-900 dark:text-white hover:bg-primary/10"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-72 bg-white/95 backdrop-blur-xl border-l border-gray-200">
        <SheetHeader>
          <SheetTitle className="text-left text-lg font-bold text-gray-900">
            Navigation
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 mt-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={handleNavClick}
              className="flex items-center py-3 px-4 rounded-lg text-gray-900 hover:bg-primary/10 font-medium transition-all duration-200 hover:text-primary border border-transparent hover:border-primary/20"
            >
              <span>{item.label}</span>
            </a>
          ))}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <Button
              asChild
              className="w-full rounded-lg px-6 py-3 text-base font-semibold bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-300"
              onClick={handleNavClick}
            >
              <a href="#generate">Generate Letter</a>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}