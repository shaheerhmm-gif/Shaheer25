import { ArrowRight, TrendingUp, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import content from '../data/content.json';

const Interactive3DFood = lazy(() => import('./Interactive3DFood'));

export default function Hero() {
  const icons = [TrendingUp, Users, Award];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24 bg-white">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 text-slate-900 leading-tight tracking-tight">
              Transform Your<br />Restaurant Business
            </h1>

            <p className="text-xl sm:text-2xl text-slate-600 mb-6 leading-relaxed">
              Complete restaurant growth solution: Consultancy, Digital Marketing, 3D AR Menus & Free Influencer Marketing
            </p>

            <p className="text-lg text-slate-500 mb-12">
              One agency for everything your restaurant needs to succeed
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-slate-900 text-white rounded-lg text-base font-semibold inline-flex items-center justify-center gap-2"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-900 rounded-lg text-base font-semibold"
              >
                View All Services
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100">
              <img
                src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1440&dpr=2"
                alt="Fine dining restaurant interior with elegant table setting"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-slate-900 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-slate-200 rounded-2xl -z-10"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.stats.map((stat, i) => {
            const Icon = icons[i];
            const colors = [
              { bg: 'bg-emerald-50', text: 'text-emerald-600', icon: 'text-emerald-500', border: 'border-emerald-100' },
              { bg: 'bg-blue-50', text: 'text-blue-600', icon: 'text-blue-500', border: 'border-blue-100' },
              { bg: 'bg-violet-50', text: 'text-violet-600', icon: 'text-violet-500', border: 'border-violet-100' }
            ];

            return (
              <div key={i} className={`${colors[i].bg} p-8 rounded-2xl border-2 ${colors[i].border} relative overflow-hidden`}>
                <div className="relative z-10">
                  <div className={`w-12 h-12 ${colors[i].bg} rounded-xl flex items-center justify-center mb-4 border ${colors[i].border}`}>
                    <Icon className={`w-6 h-6 ${colors[i].icon}`} strokeWidth={2.5} />
                  </div>
                  <div className={`text-6xl font-bold ${colors[i].text} mb-3 tracking-tight`}>
                    {stat.value}
                  </div>
                  <div className="text-base text-slate-700 font-semibold leading-snug">
                    {stat.label}
                  </div>
                </div>
                <div className={`absolute -right-8 -bottom-8 w-32 h-32 ${colors[i].icon} opacity-5`}>
                  <Icon className="w-full h-full" strokeWidth={1} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-32">
          <Suspense fallback={
            <div className="w-full h-96 flex items-center justify-center bg-slate-50 rounded-3xl">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
            </div>
          }>
            <Interactive3DFood />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
