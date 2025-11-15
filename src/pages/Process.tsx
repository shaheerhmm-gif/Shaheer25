import { motion } from 'framer-motion';
import content from '../data/content.json';

export default function Process() {
  return (
    <div className="pt-24 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-20"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6">Our Process</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            A proven methodology that delivers consistent results
          </p>
        </motion.div>

        <div className="space-y-24">
          {content.process.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-[200px_1fr] gap-12 items-start"
            >
              <div className="text-8xl font-mono font-bold text-accent opacity-20">
                {step.step}
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-4">{step.title}</h2>
                <p className="text-xl text-gray-600 dark:text-gray-400">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
