import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChefHat,
  Smartphone,
  Eye,
  Users,
  TrendingUp,
  Award,
  Zap,
  Target,
  ArrowRight,
  Star,
  CheckCircle
} from 'lucide-react';
import { supabase, Testimonial } from '../lib/supabase';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

export default function Home() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = async () => {
    const { data } = await supabase
      .from('testimonials')
      .select('*')
      .eq('is_featured', true)
      .order('created_at', { ascending: false });

    if (data) setTestimonials(data);
  };

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-orange-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-6">
              <Award className="w-5 h-5 text-amber-600" />
              <span className="text-sm font-semibold text-gray-700">
                India's Most Complete Restaurant Growth Agency
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              The Only Complete{' '}
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Restaurant Growth Agency
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 mb-8 leading-relaxed">
              Consultancy + Digital Transformation + AR Menus + Free Micro-Influencers
            </p>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
              We are a comprehensive multi-service consultancy and digital solutions agency for cafés, restaurants, cloud kitchens, food joints, and small hospitality businesses.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all flex items-center space-x-2"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/ar-menu"
                className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all border-2 border-gray-200"
              >
                Explore AR Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-amber-600">DineUp</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              One agency for your entire restaurant ecosystem with efficiency, automation, and smart systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 text-center border border-amber-100">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Solution</h3>
              <p className="text-gray-700 text-sm">From menu to marketing, we handle everything</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 text-center border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free Influencers</h3>
              <p className="text-gray-700 text-sm">No commission, verified local micro-influencers</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center border border-purple-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">AR Technology</h3>
              <p className="text-gray-700 text-sm">3D food menus at extremely low prices</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 text-center border border-green-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-700 text-sm">65% average revenue growth in 4 months</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our Complete Service Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything your restaurant needs to thrive in one place
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={ChefHat}
              title="Restaurant Consultancy"
              description="Complete menu engineering, cost optimization, recipe refinement, and brand identity creation for maximum profitability."
              features={[
                'Menu Engineering',
                'Food Cost Optimization',
                'Recipe Refinement',
                'Pricing Strategy',
                'Kitchen Workflow'
              ]}
            />

            <ServiceCard
              icon={Smartphone}
              title="Digital Transformation"
              description="Full-stack digital presence including website, SEO, Google ranking, and social media branding to dominate online."
              features={[
                'Website Development',
                'SEO Optimization',
                'Google Business Ranking',
                'Social Media Branding',
                'Marketing Automation'
              ]}
              gradient="from-blue-500 to-cyan-600"
            />

            <ServiceCard
              icon={Eye}
              title="AR 3D Menu System"
              description="Revolutionary augmented reality menus. Customers view 3D food models in real space using Google AR Viewer."
              features={[
                'GLB 3D Model Upload',
                'Google AR Integration',
                'No App Required',
                'Premium Experience',
                'Low-Cost Pricing'
              ]}
              gradient="from-purple-500 to-pink-600"
            />

            <ServiceCard
              icon={Users}
              title="Free Influencer Marketing"
              description="Our strongest USP! Verified local micro-influencers for real footfall. Completely free with no commission or hidden fees."
              features={[
                'Zero Cost Included',
                'Verified Influencers',
                'Local Targeting',
                'Real Footfall',
                'No Commission Ever'
              ]}
              gradient="from-green-500 to-emerald-600"
            />
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our Clients Love Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real restaurant owners across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/clients"
              className="inline-flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-semibold text-lg"
            >
              <span>View All Case Studies</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <p className="text-xl text-white/90">Restaurants Transformed</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">65%</div>
              <p className="text-xl text-white/90">Average Revenue Growth</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <p className="text-xl text-white/90">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Transform Your Restaurant?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free consultation and discover how we can help you grow your business with our complete suite of services
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
