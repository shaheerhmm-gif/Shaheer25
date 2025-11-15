import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="text-2xl font-bold mb-4">DineUp</div>
            <p className="text-slate-400 leading-relaxed">
              Complete restaurant growth agency providing consultancy, digital marketing, AR menus, and free influencer marketing.
            </p>
          </div>

          <div>
            <div className="text-lg font-bold mb-4">Quick Links</div>
            <div className="space-y-3">
              <Link to="/about" className="block text-slate-400">About Us</Link>
              <Link to="/services" className="block text-slate-400">Our Services</Link>
              <Link to="/pricing" className="block text-slate-400">Pricing Plans</Link>
              <Link to="/contact" className="block text-slate-400">Contact Us</Link>
              <Link to="/faq" className="block text-slate-400">FAQ</Link>
            </div>
          </div>

          <div>
            <div className="text-lg font-bold mb-4">Contact Information</div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm text-slate-500">Call Us</div>
                  <a href="tel:9096500303" className="text-white font-semibold">
                    9096500303
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm text-slate-500">Email Us</div>
                  <a href="mailto:INAMKEPRATEEK@gmail.com" className="text-white break-all">
                    INAMKEPRATEEK@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm text-slate-500">Service Area</div>
                  <div className="text-white">All Over India</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-500 text-sm">
            © 2024 DineUp Agency. All Rights Reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <Link to="/terms" className="text-slate-500">Terms of Service</Link>
            <Link to="/privacy" className="text-slate-500">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
