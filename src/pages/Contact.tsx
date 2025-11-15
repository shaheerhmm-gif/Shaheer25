import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    restaurant_name: '',
    city: '',
    service_type: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const { error: submitError } = await supabase
        .from('contacts')
        .insert([formData]);

      if (submitError) throw submitError;

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        restaurant_name: '',
        city: '',
        service_type: '',
        message: ''
      });

      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError('Failed to submit form. Please try calling us directly.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Let's Transform Your <span className="text-amber-600">Restaurant</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Get in touch for a free consultation. We'll analyze your business and recommend the perfect growth strategy.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us Your Details</h2>

                {success && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-green-900">Thank you for your inquiry!</h3>
                      <p className="text-sm text-green-700">We'll contact you within 24 hours to discuss your restaurant's growth strategy.</p>
                    </div>
                  </div>
                )}

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                        placeholder="9876543210"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="restaurant_name" className="block text-sm font-semibold text-gray-900 mb-2">
                        Restaurant Name *
                      </label>
                      <input
                        type="text"
                        id="restaurant_name"
                        name="restaurant_name"
                        required
                        value={formData.restaurant_name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                        placeholder="Your Restaurant"
                      />
                    </div>

                    <div>
                      <label htmlFor="city" className="block text-sm font-semibold text-gray-900 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                        placeholder="Mumbai"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service_type" className="block text-sm font-semibold text-gray-900 mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service_type"
                      name="service_type"
                      required
                      value={formData.service_type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="Restaurant Consultancy">Restaurant Consultancy</option>
                      <option value="Digital Transformation">Digital Transformation</option>
                      <option value="AR 3D Menu">AR 3D Menu System</option>
                      <option value="Free Influencer Marketing">Free Influencer Marketing</option>
                      <option value="Complete Package">Complete Package (All Services)</option>
                      <option value="Custom Solution">Custom Solution</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                      Additional Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your restaurant and goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 text-white shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-4">
                  <a href="tel:9096500303" className="flex items-start space-x-3 hover:scale-105 transition-transform">
                    <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-white/90">9096500303</p>
                    </div>
                  </a>

                  <a href="mailto:INAMKEPRATEEK@gmail.com" className="flex items-start space-x-3 hover:scale-105 transition-transform">
                    <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-white/90 break-all">INAMKEPRATEEK@gmail.com</p>
                    </div>
                  </a>

                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Service Area</p>
                      <p className="text-white/90">Pan-India Coverage</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Payment Options</h3>
                <p className="text-gray-600 mb-4">We accept all major payment methods including UPI, bank transfer, and cards.</p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-900 mb-2">UPI ID</p>
                  <p className="text-sm text-gray-700 break-all">PRATIKINAMKE3635@okaxis</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Why Choose Us?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">500+ Restaurants Transformed</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">65% Average Revenue Growth</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Free Micro-Influencer Marketing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Complete Digital Ecosystem</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
