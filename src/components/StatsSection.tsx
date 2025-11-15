import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Target } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '500+',
    label: 'Restaurants Transformed',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: TrendingUp,
    value: '65%',
    label: 'Average Revenue Growth',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Award,
    value: '100%',
    label: 'Client Satisfaction',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Target,
    value: '4.9/5',
    label: 'Average Rating',
    gradient: 'from-purple-500 to-pink-500'
  }
];

export default function StatsSection() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Results that speak for themselves
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Join hundreds of successful restaurants that trust us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />

                <div className="relative glass p-6 sm:p-8 rounded-3xl text-center hover:bg-white/10 transition-all duration-500">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <Icon size={24} className="sm:w-8 sm:h-8 text-white" />
                  </div>

                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-500">
                    {stat.value}
                  </div>

                  <div className="text-xs sm:text-sm text-gray-400 font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
