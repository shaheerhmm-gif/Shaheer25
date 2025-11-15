import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMnptMC0yaDJ2Mmgtdi0yem0wIDBoMnYyaC0ydi0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-xl px-5 sm:px-6 py-2.5 sm:py-3 rounded-full mb-6 sm:mb-8"
          >
            <Sparkles size={18} className="sm:w-5 sm:h-5 text-white" />
            <span className="text-xs sm:text-sm font-medium text-white">Ready to transform your restaurant?</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 text-balance leading-tight px-4"
          >
            Start your journey to<br className="hidden sm:block" /> restaurant success
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Get a free consultation and discover how we can help you grow your business with our complete suite of services
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6 px-4"
          >
            <Link
              to="/contact"
              className="group w-full sm:w-auto px-8 sm:px-10 lg:px-12 py-4 sm:py-5 bg-white text-blue-600 rounded-full text-base sm:text-lg font-bold hover:scale-105 hover:shadow-2xl hover:shadow-black/30 transition-all duration-500 flex items-center justify-center gap-3"
            >
              Get Free Consultation
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500" />
            </Link>

            <a
              href="tel:9096500303"
              className="w-full sm:w-auto px-8 sm:px-10 lg:px-12 py-4 sm:py-5 bg-white/10 backdrop-blur-xl text-white rounded-full text-base sm:text-lg font-bold hover:bg-white/20 hover:scale-105 transition-all duration-500 border-2 border-white/30 text-center"
            >
              Call: 9096500303
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 sm:mt-10 lg:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white/80 text-xs sm:text-sm px-4"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Free Consultation</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
