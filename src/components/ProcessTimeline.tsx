import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import content from '../data/content.json';

export default function ProcessTimeline() {
  return (
    <section className="py-20 sm:py-32 lg:py-40 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-indigo-50/30 to-white" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20 lg:mb-24"
        >
          <div className="inline-flex items-center space-x-2 glass px-5 py-2.5 rounded-full mb-6">
            <span className="text-sm font-medium text-gray-700">Our process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-balance px-4">
            How we <span className="gradient-text">transform</span><br className="hidden sm:block" /> your restaurant
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            A proven, step-by-step methodology that delivers results
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-blue-500 transform md:-translate-x-1/2" />

          {content.process.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`mb-16 sm:mb-20 last:mb-0 relative flex ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col md:items-center gap-6 sm:gap-8 pl-16 sm:pl-20 md:pl-0`}
            >
              <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="premium-card p-6 sm:p-8 inline-block hover:shadow-2xl transition-all duration-500 w-full md:w-auto"
                >
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-3 sm:mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg">{item.desc}</p>
                </motion.div>
              </div>

              <div className="absolute left-6 sm:left-8 md:left-1/2 top-8 transform md:-translate-x-1/2 -translate-y-1/2 -translate-x-1/2">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 shadow-xl shadow-blue-500/40 flex items-center justify-center"
                >
                  <CheckCircle2 size={24} className="sm:w-8 sm:h-8 text-white" />
                </motion.div>
              </div>

              <div className="md:w-1/2" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 lg:mt-24 text-center px-4"
        >
          <a
            href="/contact"
            className="inline-block w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-base sm:text-lg font-medium hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500"
          >
            Start Your Transformation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
