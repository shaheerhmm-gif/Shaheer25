import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  gradient?: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  gradient = 'from-amber-500 to-orange-600'
}: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-amber-200 hover:-translate-y-2">
      <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className="text-amber-500 mt-1">•</span>
              <span className="text-sm text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
