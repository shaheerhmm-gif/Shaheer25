import { Link } from 'react-router-dom';
import { Target, Users, Zap, Award, TrendingUp, Heart, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-amber-600">DineUp</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We are a comprehensive multi-service consultancy and digital solutions agency for cafés, restaurants, cloud kitchens, food joints, and small hospitality businesses.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  DineUp was founded with a simple yet powerful vision: to provide restaurant owners with everything they need to succeed in one comprehensive package.
                </p>
                <p>
                  We saw too many restaurants struggling with fragmented solutions, working with multiple vendors for menu design, digital marketing, web development, and promotion. Each vendor charged separately, communication was difficult, and results were inconsistent.
                </p>
                <p>
                  We created a complete ecosystem where restaurants get world-class consultancy, cutting-edge digital solutions, revolutionary AR technology, and real marketing results all from one trusted partner.
                </p>
                <p className="font-semibold text-amber-600">
                  Our game-changing innovation? Free micro-influencer marketing included with every package. No other agency in India provides this at zero additional cost.
                </p>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden h-96">
              <img
                src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2"
                alt="Beautiful restaurant interior with elegant ambiance and fine dining setup"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="rounded-3xl overflow-hidden h-96 order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2"
                alt="Restaurant team working together in professional kitchen environment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                To empower every restaurant with efficient systems, smart automation, and powerful marketing at affordable prices.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We believe that great food deserves great marketing. Every restaurant owner should have access to premium consulting, professional digital presence, innovative technology, and effective marketing regardless of their budget. That's why we created affordable packages that deliver enterprise-level results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Efficiency</h3>
              <p className="text-gray-600">
                We streamline operations and eliminate waste, helping restaurants operate at peak efficiency with smart systems and automation.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Results-Driven</h3>
              <p className="text-gray-600">
                Every strategy is backed by data and designed to deliver measurable results. We focus on what actually grows your business.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Client Success</h3>
              <p className="text-gray-600">
                Your success is our success. We're invested in your long-term growth and celebrate every milestone with you.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                From AR menus to automation systems, we bring cutting-edge technology to make restaurants stand out.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Transparency</h3>
              <p className="text-gray-600">
                Clear pricing, honest communication, and realistic expectations. No hidden fees or false promises.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Partnership</h3>
              <p className="text-gray-600">
                We're not just a vendor, we're your growth partner. We work alongside you to achieve your vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Makes Us Different</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why restaurants across India choose DineUp
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Free Micro-Influencer Marketing</h3>
              <p className="text-gray-700 leading-relaxed">
                Our strongest USP! We provide verified, local micro-influencers completely FREE with every package. No commission, no hidden fees, ever. This alone drives 30-50% more footfall. No other agency in India offers this.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Ecosystem</h3>
              <p className="text-gray-700 leading-relaxed">
                From menu engineering to AR technology, we handle everything. One point of contact, one comprehensive solution, seamless execution across all aspects of your restaurant growth.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Affordable Premium Quality</h3>
              <p className="text-gray-700 leading-relaxed">
                Enterprise-level services at small business prices. We believe every restaurant deserves world-class solutions, so we've optimized our processes to deliver maximum value.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven Results</h3>
              <p className="text-gray-700 leading-relaxed">
                500+ restaurants transformed, 65% average revenue growth in 4 months. Our strategies are tested, refined, and proven to work across different cuisines and markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 500+ successful restaurants that have transformed their business with DineUp
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/contact"
              className="group bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all flex items-center space-x-2"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
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
