import { Eye, ExternalLink } from 'lucide-react';
import { ARModel } from '../lib/supabase';

interface ARModelCardProps {
  model: ARModel;
}

export default function ARModelCard({ model }: ARModelCardProps) {
  const handleViewInAR = () => {
    window.open(`https://arvr.google.com/scene-viewer/1.0?file=${encodeURIComponent(model.model_url)}`, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all group">
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        {model.thumbnail_url ? (
          <img
            src={model.thumbnail_url}
            alt={model.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <Eye className="w-16 h-16 text-gray-400" />
        )}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button
            onClick={handleViewInAR}
            className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-gray-100 transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
            <span>View in AR</span>
          </button>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900">{model.title}</h3>
          {model.price && (
            <span className="text-lg font-bold text-amber-600">
              ₹{model.price.toFixed(0)}
            </span>
          )}
        </div>
        <p className="text-sm text-gray-600 mb-4">{model.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-gray-500 uppercase bg-gray-100 px-3 py-1 rounded-full">
            {model.category}
          </span>
          <button
            onClick={handleViewInAR}
            className="text-sm font-medium text-amber-600 hover:text-amber-700 flex items-center space-x-1"
          >
            <span>View in AR</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
