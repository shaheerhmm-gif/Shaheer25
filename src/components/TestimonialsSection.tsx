import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { fadeUp } from '../lib/motion';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Owner, Spice Garden',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
    quote: 'Our revenue increased by 75% in just 4 months. The AR menu and influencer marketing are game-changers.',
    rating: 5
  },
  {
    name: 'Priya Sharma',
    role: 'Manager, Cloud Kitchen Co.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
    quote: 'The consultancy helped us optimize our menu and reduce costs by 30%. Incredible expertise and support.',
    rating: 5
  },
  {
    name: 'Amit Patel',
    role: 'Owner, Urban Bites',
    image: 'https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
    quote: 'Digital transformation at its finest. Our online orders doubled and Google ranking went to the top.',
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-32 lg:py-40 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20 lg:mb-24"
        >
          <div className="inline-flex items-center space-x-2 glass px-5 py-2.5 rounded-full mb-6">
            <span className="text-sm font-medium text-gray-700">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-balance px-4">
            Loved by restaurant<br className="hidden sm:block" />
            <span className="gradient-text"> owners everywhere</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Real results from real businesses across India
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="premium-card p-6 sm:p-8 group cursor-pointer transition-all duration-500"
            >
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <Quote size={32} className="sm:w-10 sm:h-10 text-blue-500/20 mb-4" />

              <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center space-x-3 sm:space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-4 ring-white group-hover:scale-110 transition-transform duration-500 flex-shrink-0"
                />
                <div>
                  <div className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.name}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center px-4"
        >
          <div className="inline-flex items-center space-x-2 text-gray-600">
            <Star size={18} className="sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
            <span className="text-sm sm:text-base lg:text-lg font-semibold">4.9/5 average rating from 500+ restaurants</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
