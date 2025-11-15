import { Phone } from 'lucide-react';

export default function FloatingContact() {
  return (
    <a
      href="tel:9096500303"
      className="fixed bottom-8 right-8 z-40 bg-gradient-to-r from-amber-500 to-orange-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 group"
      aria-label="Call us"
    >
      <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
      <span className="absolute -top-12 right-0 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Call: 9096500303
      </span>
    </a>
  );
}
