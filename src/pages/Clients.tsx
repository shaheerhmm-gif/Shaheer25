import { useEffect, useState } from 'react';
import { TrendingUp, Users, DollarSign, Star } from 'lucide-react';
import { supabase, CaseStudy, Testimonial } from '../lib/supabase';
import TestimonialCard from '../components/TestimonialCard';

export default function Clients() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);

    const [casesResult, testimonialsResult] = await Promise.all([
      supabase.from('case_studies').select('*').order('created_at', { ascending: false }),
      supabase.from('testimonials').select('*').order('created_at', { ascending: false })
    ]);

    if (casesResult.data) setCaseStudies(casesResult.data);
    if (testimonialsResult.data) setTestimonials(testimonialsResult.data);

    setLoading(false);
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Success <span className="text-amber-600">Stories</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Real results from real restaurant owners. See how we've helped businesses like yours achieve remarkable growth.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 text-white text-center shadow-lg">
              <TrendingUp className="w-12 h-12 mx-auto mb-4" />
              <div className="text-5xl font-bold mb-2">500+</div>
              <p className="text-xl text-white/90">Restaurants Transformed</p>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-8 text-white text-center shadow-lg">
              <DollarSign className="w-12 h-12 mx-auto mb-4" />
              <div className="text-5xl font-bold mb-2">65%</div>
              <p className="text-xl text-white/90">Average Revenue Growth</p>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white text-center shadow-lg">
              <Star className="w-12 h-12 mx-auto mb-4" />
              <div className="text-5xl font-bold mb-2">100%</div>
              <p className="text-xl text-white/90">Client Satisfaction</p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Case Studies</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Detailed breakdowns of how we transformed struggling restaurants into thriving businesses
              </p>
            </div>

            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
                <p className="text-gray-600 mt-4">Loading case studies...</p>
              </div>
            ) : caseStudies.length > 0 ? (
              <div className="space-y-12">
                {caseStudies.map((study) => (
                  <div key={study.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                      <div className="lg:col-span-2 p-8">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">
                              {study.restaurant_name}
                            </h3>
                            <p className="text-gray-600 flex items-center space-x-2">
                              <Users className="w-4 h-4" />
                              <span>{study.location}</span>
                            </p>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center space-x-2">
                              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                              <span>The Challenge</span>
                            </h4>
                            <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                          </div>

                          <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center space-x-2">
                              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                              <span>Our Solution</span>
                            </h4>
                            <p className="text-gray-700 leading-relaxed">{study.solution}</p>
                          </div>

                          <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center space-x-2">
                              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                              <span>Results Achieved</span>
                            </h4>
                            <p className="text-gray-700 leading-relaxed font-semibold">{study.results}</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 flex flex-col justify-center">
                        <h4 className="text-lg font-bold text-gray-900 mb-4">Services Used</h4>
                        <div className="space-y-2">
                          {study.services_used.map((service, index) => (
                            <div key={index} className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2 shadow-sm">
                              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                              <span className="text-sm text-gray-700">{service}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">Case studies coming soon</p>
              </div>
            )}
          </div>

          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear what our clients have to say about their experience working with us
              </p>
            </div>

            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
                <p className="text-gray-600 mt-4">Loading testimonials...</p>
              </div>
            ) : testimonials.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">Testimonials coming soon</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of successful restaurants that have transformed their business with DineUp
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/contact"
              className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all"
            >
              Get Free Consultation
            </a>
            <a
              href="tel:9096500303"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all"
            >
              Call: 9096500303
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
