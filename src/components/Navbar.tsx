
import { Button } from '@/components/ui/button';
import MobileNavMenu from './MobileNavMenu';

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

export default function Navbar() {
  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 z-30 w-[95vw] max-w-4xl rounded-full px-4 py-2 shadow-xl backdrop-blur-2xl flex items-center justify-between 
    bg-white/80 border border-gray-300 
    dark:bg-zinc-900/90 dark:border-zinc-700 transition-all duration-300"
    >
      <a
        href="#hero"
        className="flex items-center gap-2 font-bold tracking-tight text-lg text-gray-900 dark:text-white transition-transform duration-200 hover:scale-105"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
          alt="Logo"
          className="h-7 w-7 object-contain transition-transform duration-200 hover:rotate-12"
        />
        CoverGenie
      </a>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-2 lg:gap-4">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="px-3 py-1.5 rounded-full text-gray-900 dark:text-white hover:bg-primary/10 font-medium transition-all duration-200 hover:text-primary"
            onClick={(e) => {
              if (item.href.startsWith('#')) {
                e.preventDefault();
                document.getElementById(item.href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span>{item.label}</span>
          </a>
        ))}
      </div>

      <div className="hidden lg:block">
        <Button
          asChild
          className="rounded-full px-6 py-2.5 text-base font-semibold bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
        >
          <a 
            href="#generate"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('generate')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Generate Letter
          </a>
        </Button>
      </div>

      {/* Mobile Navigation */}
      <MobileNavMenu />
    </nav>
  );
}