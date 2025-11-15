import { useState, useEffect } from 'react';
import { Eye, Info, CheckCircle, Smartphone } from 'lucide-react';
import { supabase, ARModel } from '../lib/supabase';
import ARModelCard from '../components/ARModelCard';

export default function ARMenu() {
  const [models, setModels] = useState<ARModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadModels();
  }, []);

  const loadModels = async () => {
    setLoading(true);
    const { data } = await supabase
      .from('ar_models')
      .select('*')
      .order('created_at', { ascending: false });

    if (data) setModels(data);
    setLoading(false);
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full mb-6">
              <Eye className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-semibold text-purple-900">Revolutionary Technology</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              AR 3D Menu System
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Let your customers see dishes in 3D before ordering. View food in real space, check portion sizes, and create unforgettable dining experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">View in AR</h3>
              <p className="text-gray-600">
                Tap any dish to open Google AR Viewer and place 3D food models in real space. See exactly what you're ordering.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">No App Needed</h3>
              <p className="text-gray-600">
                Works instantly on any smartphone. No downloads, no installations. Just tap and view in augmented reality.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Results</h3>
              <p className="text-gray-600">
                Restaurants see 35% higher average order value and increased customer satisfaction with AR menus.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 mb-16">
            <div className="flex items-start space-x-4">
              <Info className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">How It Works</h3>
                <ol className="space-y-2 text-gray-700">
                  <li><strong>1.</strong> We create photorealistic 3D models of your dishes in GLB format</li>
                  <li><strong>2.</strong> Upload models to your restaurant's AR menu system</li>
                  <li><strong>3.</strong> Customers browse your menu and tap "View in AR" on any dish</li>
                  <li><strong>4.</strong> Google AR Viewer opens automatically (no app download needed)</li>
                  <li><strong>5.</strong> Customers place the 3D model in real space to see portion size and presentation</li>
                  <li><strong>6.</strong> Increased confidence leads to higher orders and customer satisfaction</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Experience AR Menu Demo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {models.length > 0
                ? 'Try our AR 3D models below. Tap "View in AR" on any dish to see it in your space!'
                : 'Demo models coming soon. Contact us to get your dishes added to AR menu system.'}
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
              <p className="text-gray-600 mt-4">Loading AR models...</p>
            </div>
          ) : models.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {models.map((model) => (
                <ARModelCard key={model.id} model={model} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Eye className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">No AR models available yet</p>
              <p className="text-sm text-gray-500 max-w-md mx-auto">
                Contact us to get your restaurant's dishes transformed into stunning 3D AR models
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Affordable AR Menu Pricing
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Premium augmented reality technology at prices every restaurant can afford
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">₹2,999</div>
                <p className="text-white/80">10 Dishes</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">₹4,999</div>
                <p className="text-white/80">20 Dishes</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">₹7,999</div>
                <p className="text-white/80">Unlimited Dishes</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all"
            >
              Get Started with AR Menu
            </a>
            <a
              href="tel:9096500303"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all"
            >
              Call: 9096500303
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
