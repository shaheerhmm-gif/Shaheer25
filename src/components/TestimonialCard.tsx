import { Star } from 'lucide-react';
import { Testimonial } from '../lib/supabase';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
      <div className="flex items-center space-x-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
        ))}
      </div>
      <p className="text-gray-700 mb-6 leading-relaxed italic">
        "{testimonial.testimonial}"
      </p>
      {testimonial.results && (
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-4 mb-4">
          <p className="text-sm font-semibold text-amber-900">Results:</p>
          <p className="text-sm text-amber-800">{testimonial.results}</p>
        </div>
      )}
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">
            {testimonial.client_name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-semibold text-gray-900">{testimonial.client_name}</p>
          <p className="text-sm text-gray-600">{testimonial.client_role}</p>
        </div>
      </div>
    </div>
  );
}
