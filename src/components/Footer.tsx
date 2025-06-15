
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-6 px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 text-center sm:text-left">
          Copyright 2025
        </p>
        <p className="text-sm text-gray-600 flex items-center gap-1.5">
          Made with <Heart className="text-red-500" size={16} fill="currentColor" /> by Lovable + n8n +{" "}
          <a
            href="https://monfortbrian.framer.website"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:underline"
          >
            Brian
          </a>
        </p>
      </div>
    </footer>
  );
}
