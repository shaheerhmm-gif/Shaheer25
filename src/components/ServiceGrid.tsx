import { motion } from 'framer-motion';
import { ChefHat, Smartphone, Eye, Users, ArrowUpRight } from 'lucide-react';
import { fadeUp, stagger } from '../lib/motion';
import content from '../data/content.json';

const icons = [ChefHat, Smartphone, Eye, Users];
const gradients = [
  'from-orange-500 to-red-500',
  'from-blue-500 to-cyan-500',
  'from-purple-500 to-pink-500',
  'from-green-500 to-emerald-500',
];

export default function ServiceGrid() {
  return (
    <section className="py-20 sm:py-32 lg:py-40 px-4 sm:px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20 lg:mb-24"
        >
          <div className="inline-flex items-center space-x-2 glass px-5 py-2.5 rounded-full mb-6">
            <span className="text-sm font-medium text-gray-700">What we offer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-balance px-4">
            Complete solutions for<br className="hidden sm:block" />
            <span className="gradient-text"> restaurant success</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Everything you need to transform your restaurant into a thriving business
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {content.services.map((service, i) => {
            const Icon = icons[i];
            const gradient = gradients[i];
            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                whileHover={{ scale: 1.02, y: -8 }}
                className="premium-card p-6 sm:p-8 lg:p-10 group cursor-pointer relative overflow-hidden transition-all duration-700"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <Icon size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 group-hover:gradient-text transition-all duration-500">
                    {service.headline}
                  </h3>

                  <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {service.features.slice(0, 4).map((feat, j) => (
                      <motion.span
                        key={j}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: j * 0.1 }}
                        viewport={{ once: true }}
                        className="text-xs px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass font-medium text-gray-700"
                      >
                        {feat}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-2 text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-500 text-sm sm:text-base">
                    <span>Learn more</span>
                    <ArrowUpRight size={16} className="sm:w-5 sm:h-5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
