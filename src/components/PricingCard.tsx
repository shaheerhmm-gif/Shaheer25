import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText?: string;
}

export default function PricingCard({
  name,
  price,
  period,
  description,
  features,
  highlighted = false,
  ctaText = 'Get Started'
}: PricingCardProps) {
  return (
    <div
      className={`rounded-2xl p-8 ${
        highlighted
          ? 'bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-2xl scale-105'
          : 'bg-white text-gray-900 shadow-lg border border-gray-200'
      } hover:shadow-2xl transition-all duration-300`}
    >
      {highlighted && (
        <div className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
          MOST POPULAR
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className={`text-sm mb-6 ${highlighted ? 'text-white/90' : 'text-gray-600'}`}>
        {description}
      </p>
      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        <span className={`text-sm ${highlighted ? 'text-white/80' : 'text-gray-600'}`}>
          {period}
        </span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-3">
            <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${highlighted ? 'text-white' : 'text-amber-500'}`} />
            <span className={`text-sm ${highlighted ? 'text-white/90' : 'text-gray-700'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <Link
        to="/contact"
        className={`block w-full py-3 px-6 rounded-lg font-semibold text-center transition-all ${
          highlighted
            ? 'bg-white text-amber-600 hover:bg-gray-50 hover:shadow-lg'
            : 'bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:shadow-lg'
        }`}
      >
        {ctaText}
      </Link>
    </div>
  );
}
