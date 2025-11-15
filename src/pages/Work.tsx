import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { supabase, CaseStudy } from '../lib/supabase';

export default function Work() {
  const [cases, setCases] = useState<CaseStudy[]>([]);

  useEffect(() => {
    supabase.from('case_studies').select('*').then(({ data }) => data && setCases(data));
  }, []);

  return (
    <div className="pt-24 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-20"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Real results from real restaurants
          </p>
        </motion.div>

        <div className="space-y-16">
          {cases.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8 md:p-12"
            >
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{c.restaurant_name}</h2>
                  <p className="text-gray-600 dark:text-gray-400">{c.location}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <TrendingUp size={24} className="text-accent" />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Challenge</h3>
                  <p className="text-sm">{c.challenge}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Solution</h3>
                  <p className="text-sm">{c.solution}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Results</h3>
                  <p className="text-sm font-bold text-accent">{c.results}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
