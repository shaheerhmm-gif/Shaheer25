import { Link } from 'react-router-dom';
import { ChefHat, Globe, Eye, Users, ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-20">
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Our Services
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything your restaurant needs to grow and succeed
          </p>
        </div>

        <div className="space-y-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full mb-6">
                <ChefHat className="w-5 h-5 text-slate-700" />
                <span className="text-sm font-semibold text-slate-700">Service 01</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Restaurant Consultancy</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Professional consulting to optimize your restaurant operations and maximize profitability
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Menu Engineering</h3>
                  <p className="text-slate-600">Redesign your menu to highlight profitable dishes and improve customer choices</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Food Cost Optimization</h3>
                  <p className="text-slate-600">Reduce expenses by 15-25% through better suppliers and inventory management</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Recipe Standardization</h3>
                  <p className="text-slate-600">Create exact recipes to ensure consistent taste and quality every time</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Smart Pricing Strategy</h3>
                  <p className="text-slate-600">Set optimal prices based on costs, competitors, and customer psychology</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Kitchen Workflow</h3>
                  <p className="text-slate-600">Streamline operations for faster service and higher capacity</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 bg-gradient-to-br from-slate-100 to-slate-50 rounded-3xl p-12 aspect-square flex items-center justify-center">
              <ChefHat className="w-48 h-48 text-slate-300" strokeWidth={1} />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="bg-gradient-to-br from-slate-100 to-slate-50 rounded-3xl p-12 aspect-square flex items-center justify-center">
              <Globe className="w-48 h-48 text-slate-300" strokeWidth={1} />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full mb-6">
                <Globe className="w-5 h-5 text-slate-700" />
                <span className="text-sm font-semibold text-slate-700">Service 02</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Digital Marketing & Website</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Build your online presence and attract customers through digital channels
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Professional Website</h3>
                  <p className="text-slate-600">Beautiful, mobile-friendly website with menu, photos, and contact information</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Google Ranking (SEO)</h3>
                  <p className="text-slate-600">Appear at the top when people search for restaurants in your area</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Google Business Profile</h3>
                  <p className="text-slate-600">Optimize your listing on Google Maps with photos, reviews, and directions</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Social Media Management</h3>
                  <p className="text-slate-600">Professional Instagram and Facebook presence with regular posts and engagement</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Online Advertising</h3>
                  <p className="text-slate-600">Targeted ads on Facebook and Instagram to bring customers to your door</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full mb-6">
                <Eye className="w-5 h-5 text-slate-700" />
                <span className="text-sm font-semibold text-slate-700">Service 03</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">3D AR Menu System</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Let customers see realistic 3D images of your food before they order
              </p>

              <div className="bg-slate-50 p-6 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">How It Works:</h3>
                <div className="space-y-3">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                    <p className="text-slate-700">Customer scans QR code on menu with their phone</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                    <p className="text-slate-700">3D image of the dish appears on their screen</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                    <p className="text-slate-700">They can view it on their table to see actual size</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                    <p className="text-slate-700">Customer orders with confidence</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">No App Required</h3>
                  <p className="text-slate-600">Works instantly in phone browser, no downloads needed</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Increases Orders by 35%</h3>
                  <p className="text-slate-600">Customers order more when they can see realistic food images</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Affordable Pricing</h3>
                  <p className="text-slate-600">Starting at ₹2,999 for 10 dishes with complete setup</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 bg-gradient-to-br from-slate-100 to-slate-50 rounded-3xl p-12 aspect-square flex items-center justify-center">
              <Eye className="w-48 h-48 text-slate-300" strokeWidth={1} />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="bg-gradient-to-br from-slate-900 to-slate-700 rounded-3xl p-12 aspect-square flex items-center justify-center">
              <Users className="w-48 h-48 text-slate-400" strokeWidth={1} />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full mb-6">
                <Users className="w-5 h-5" />
                <span className="text-sm font-semibold">Service 04 - FREE</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Free Influencer Marketing</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Food bloggers promote your restaurant completely free with every package
              </p>

              <div className="bg-slate-900 text-white p-6 rounded-2xl mb-8">
                <h3 className="text-xl font-bold mb-3">Our Biggest Advantage</h3>
                <p className="text-slate-200">
                  We send verified food influencers to your restaurant at zero cost. They post about your food and bring real customers. Other agencies charge 20-30% commission - we include it free.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">100% Free Forever</h3>
                  <p className="text-slate-600">No commission, no hidden fees, completely included in packages</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Verified Local Influencers</h3>
                  <p className="text-slate-600">Real food bloggers with 5K-50K followers in your area</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">30-50% More Customers</h3>
                  <p className="text-slate-600">Average increase in footfall after influencer campaigns</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">We Handle Everything</h3>
                  <p className="text-slate-600">Finding influencers, coordination, content approval, and tracking</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 bg-slate-900 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Grow Your Restaurant?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Contact us for a free consultation. We'll create a custom plan for your restaurant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-slate-900 rounded-lg text-base font-semibold inline-flex items-center justify-center gap-2"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 bg-slate-800 text-white rounded-lg text-base font-semibold"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
