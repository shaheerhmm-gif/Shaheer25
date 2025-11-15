import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import content from '../data/content.json';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 text-slate-900 leading-tight tracking-tight">
            Transform Your<br />Restaurant Business
          </h1>

          <p className="text-xl sm:text-2xl text-slate-600 mb-6 max-w-3xl mx-auto leading-relaxed">
            Complete restaurant growth solution: Consultancy, Digital Marketing, 3D AR Menus & Free Influencer Marketing
          </p>

          <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
            One agency for everything your restaurant needs to succeed
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-24">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.stats.map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200">
              <div className="text-5xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-base text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
