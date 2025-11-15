import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, Check } from 'lucide-react';
import { supabase } from '../lib/supabase';
import content from '../data/content.json';

export default function NewContact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', restaurant_name: '', city: '', service_type: 'Complete Package', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await supabase.from('contacts').insert([form]);
    setLoading(false);
    setSuccess(true);
    setForm({ name: '', email: '', phone: '', restaurant_name: '', city: '', service_type: 'Complete Package', message: '' });
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <div className="pt-24 pb-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6">Let's talk</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Request a free 15-minute audit and discover how we can transform your restaurant
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-3xl p-8 md:p-12"
        >
          {success && (
            <div className="mb-8 p-4 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 flex items-center gap-3">
              <Check size={20} className="text-green-600 dark:text-green-400" />
              <p className="text-sm text-green-900 dark:text-green-100">Thank you! We'll contact you within 24 hours.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="px-4 py-3 rounded-xl bg-transparent border border-gray-200 dark:border-white/10 focus:border-accent outline-none transition-colors"
              />
              <input
                required
                type="tel"
                placeholder="Phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="px-4 py-3 rounded-xl bg-transparent border border-gray-200 dark:border-white/10 focus:border-accent outline-none transition-colors"
              />
            </div>

            <input
              required
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-transparent border border-gray-200 dark:border-white/10 focus:border-accent outline-none transition-colors"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <input
                required
                placeholder="Restaurant name"
                value={form.restaurant_name}
                onChange={(e) => setForm({ ...form, restaurant_name: e.target.value })}
                className="px-4 py-3 rounded-xl bg-transparent border border-gray-200 dark:border-white/10 focus:border-accent outline-none transition-colors"
              />
              <input
                required
                placeholder="City"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                className="px-4 py-3 rounded-xl bg-transparent border border-gray-200 dark:border-white/10 focus:border-accent outline-none transition-colors"
              />
            </div>

            <select
              value={form.service_type}
              onChange={(e) => setForm({ ...form, service_type: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-transparent border border-gray-200 dark:border-white/10 focus:border-accent outline-none transition-colors"
            >
              <option value="Complete Package">Complete Package</option>
              <option value="Restaurant Consultancy">Restaurant Consultancy</option>
              <option value="Digital Transformation">Digital Transformation</option>
              <option value="AR Menu">AR Menu</option>
              <option value="Influencer Marketing">Influencer Marketing</option>
            </select>

            <textarea
              rows={4}
              placeholder="Tell us about your restaurant..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-transparent border border-gray-200 dark:border-white/10 focus:border-accent outline-none transition-colors resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full px-8 py-4 bg-accent text-white rounded-full font-medium hover:scale-105 transition-transform disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? 'Sending...' : 'Request Free Audit'}
              <Send size={18} />
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row gap-6 justify-between">
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Phone</div>
              <a href={`tel:${content.contact.phone}`} className="font-medium hover:text-accent transition-colors">
                {content.contact.phone}
              </a>
            </div>
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Email</div>
              <a href={`mailto:${content.contact.email}`} className="font-medium hover:text-accent transition-colors break-all">
                {content.contact.email}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
