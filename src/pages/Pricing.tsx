import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';

export default function Pricing() {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="relative">
        <div className="absolute inset-0 h-96">
          <img
            src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=2"
            alt="Elegant restaurant ambiance"
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-20">
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Simple Pricing
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            One-time payment. No monthly fees. All packages include free influencer marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-2xl p-8 border border-slate-200">
            <div className="mb-8">
              <div className="text-sm font-semibold text-slate-600 mb-2">STARTER</div>
              <div className="text-5xl font-bold text-slate-900 mb-2">₹29,999</div>
              <div className="text-slate-600">One-time payment</div>
            </div>

            <div className="mb-8">
              <p className="text-slate-700">For small restaurants starting out</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Menu engineering (15 dishes)</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Basic website</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Google Business setup</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Social media setup</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 font-semibold">5 FREE influencers</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">3 months management</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="block w-full py-3 bg-slate-900 text-white text-center rounded-lg font-semibold"
            >
              Choose Starter
            </Link>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-8 relative scale-105">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
              MOST POPULAR
            </div>

            <div className="mb-8">
              <div className="text-sm font-semibold text-slate-400 mb-2">GROWTH</div>
              <div className="text-5xl font-bold mb-2">₹59,999</div>
              <div className="text-slate-400">One-time payment</div>
            </div>

            <div className="mb-8">
              <p className="text-slate-300">For established restaurants ready to grow</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 font-semibold">Everything in Starter, plus:</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Menu engineering (30 dishes)</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Premium website</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">3D AR menu (15 dishes)</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Advanced SEO</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 font-semibold">15 FREE influencers</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Online advertising</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">6 months management</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="block w-full py-3 bg-white text-slate-900 text-center rounded-lg font-semibold"
            >
              Choose Growth
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200">
            <div className="mb-8">
              <div className="text-sm font-semibold text-slate-600 mb-2">PREMIUM</div>
              <div className="text-5xl font-bold text-slate-900 mb-2">₹99,999</div>
              <div className="text-slate-600">One-time payment</div>
            </div>

            <div className="mb-8">
              <p className="text-slate-700">Complete transformation package</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 font-semibold">Everything in Growth, plus:</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Unlimited recipes</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Enterprise website</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">3D AR menu (unlimited)</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Premium SEO + Google Ads</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 font-semibold">30+ FREE influencers</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Dedicated manager</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">12 months management</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">24/7 support</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="block w-full py-3 bg-slate-900 text-white text-center rounded-lg font-semibold"
            >
              Choose Premium
            </Link>
          </div>
        </div>

        <div className="bg-slate-50 rounded-3xl p-12 mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              All Packages Include Free Influencer Marketing
            </h3>
            <p className="text-lg text-slate-600 mb-10">
              We send food bloggers to your restaurant completely free. They post about your food and bring real customers. Other companies charge 20-30% commission - we include it at zero cost.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6">
                <div className="text-4xl font-bold text-slate-900 mb-2">100%</div>
                <div className="text-slate-600 font-semibold">Free Forever</div>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <div className="text-4xl font-bold text-slate-900 mb-2">Verified</div>
                <div className="text-slate-600 font-semibold">Real Influencers</div>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <div className="text-4xl font-bold text-slate-900 mb-2">30-50%</div>
                <div className="text-slate-600 font-semibold">More Customers</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Need Help Choosing?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Call us for free consultation. We'll help you pick the right package.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9096500303"
              className="px-8 py-4 bg-white text-slate-900 rounded-lg text-base font-semibold"
            >
              Call: 9096500303
            </a>
            <Link
              to="/contact"
              className="px-8 py-4 bg-slate-800 text-white rounded-lg text-base font-semibold inline-flex items-center justify-center gap-2"
            >
              Send Message
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
