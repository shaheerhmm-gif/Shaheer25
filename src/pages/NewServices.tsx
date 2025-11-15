import { motion } from 'framer-motion';
import { ChefHat, Smartphone, Eye, Users } from 'lucide-react';
import content from '../data/content.json';

const icons = [ChefHat, Smartphone, Eye, Users];

export default function NewServices() {
  return (
    <div className="pt-24 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-20"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6">Services</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Comprehensive solutions to transform your restaurant operations and drive growth
          </p>
        </motion.div>

        <div className="space-y-32">
          {content.services.map((service, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                    <Icon size={32} className="text-accent" />
                  </div>
                  <h2 className="text-4xl font-bold mb-4">{service.title}</h2>
                  <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">{service.desc}</p>
                  <ul className="space-y-3">
                    {service.features.map((feat, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`glass rounded-3xl h-96 flex items-center justify-center ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <Icon size={120} className="text-accent opacity-10" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
