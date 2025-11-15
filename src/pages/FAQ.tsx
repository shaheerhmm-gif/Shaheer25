import { useState } from 'react';
import { ChevronDown, Phone, Mail } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What makes DineUp different from other agencies?',
    answer: 'We are the only agency in India that provides a complete ecosystem - consultancy, digital transformation, AR menus, AND free micro-influencer marketing all in one package. Our strongest USP is the zero-cost influencer marketing with verified local micro-influencers, included with every package at no additional charge or commission.'
  },
  {
    question: 'Is the micro-influencer marketing really free?',
    answer: 'Yes, absolutely! There are no hidden fees, no commission charges, and no additional costs. We include verified local micro-influencers as part of our package pricing. This is our unique value proposition - we want every restaurant to benefit from influencer marketing regardless of budget.'
  },
  {
    question: 'How quickly can I see results?',
    answer: 'Most clients see noticeable improvements within 4-6 weeks. Digital presence improvements (website, SEO) start showing results in 2-3 weeks. Influencer campaigns typically drive footfall within the first month. Our average client achieves 65% revenue growth within 4 months of implementation.'
  },
  {
    question: 'Which package is right for my restaurant?',
    answer: 'It depends on your current situation and goals. Starter Package is perfect for new or small establishments starting their digital journey. Growth Package is our most popular choice for established restaurants ready to scale. Premium Package is for restaurants serious about dominating their market. Contact us for a free consultation and we\'ll recommend the best fit.'
  },
  {
    question: 'How does the AR 3D menu system work?',
    answer: 'We create photorealistic 3D models of your dishes in GLB format. Customers simply tap "View in AR" on your menu, and Google AR Viewer opens automatically (no app download needed). They can then place the 3D food model in real space to see portion size and presentation before ordering. It works on any smartphone.'
  },
  {
    question: 'Do I need technical knowledge to use your services?',
    answer: 'Not at all! We handle everything for you. From website setup to social media management to AR menu implementation, our team takes care of all technical aspects. You just focus on running your restaurant while we grow your business.'
  },
  {
    question: 'What areas do you serve?',
    answer: 'We provide services across all of India. Our digital services work anywhere, and we have micro-influencer networks in all major cities and many tier-2 cities. For consultancy services, we can work remotely or arrange on-site visits depending on your package.'
  },
  {
    question: 'How many influencers will promote my restaurant?',
    answer: 'It depends on your package: Starter includes 5 verified micro-influencers, Growth includes 15, and Premium includes 30+ influencers. All influencers are local to your area with genuine followers and engagement.'
  },
  {
    question: 'Can I choose which services I want?',
    answer: 'Our packages are designed to work as complete ecosystems for maximum results. However, we understand every restaurant is unique. Contact us to discuss custom solutions tailored to your specific needs and budget.'
  },
  {
    question: 'What is included in menu engineering?',
    answer: 'Complete menu analysis, food cost optimization, recipe refinement, pricing strategy based on psychology and market research, dish positioning to highlight profitable items, and recommendations to eliminate low performers. We analyze every aspect to maximize profitability.'
  },
  {
    question: 'Do you provide ongoing support after the initial setup?',
    answer: 'Yes! All packages include management for 3-12 months depending on the tier. This includes SEO monitoring, social media management, performance tracking, and adjustments. Premium clients also get a dedicated account manager and priority 24/7 support.'
  },
  {
    question: 'How do I measure the ROI of your services?',
    answer: 'We provide detailed analytics dashboards showing website traffic, Google rankings, social media engagement, influencer campaign reach, and most importantly, footfall and revenue changes. We track metrics that matter to your bottom line, not vanity numbers.'
  },
  {
    question: 'What if I already have a website?',
    answer: 'We can either optimize your existing website or build a new one, depending on its current state. Often, starting fresh with a modern, optimized website delivers better results than trying to fix an outdated one. We\'ll assess and recommend the best approach.'
  },
  {
    question: 'How long does the complete setup take?',
    answer: 'Initial setup typically takes 2-4 weeks depending on your package. Website and digital presence setup happens in the first week. Menu engineering and consultancy are ongoing processes. Influencer campaigns can start within 10 days. We work efficiently to get you results fast.'
  },
  {
    question: 'Do you work with cloud kitchens and food trucks?',
    answer: 'Absolutely! We work with all types of food businesses - restaurants, cafés, cloud kitchens, food trucks, food courts, bakeries, and more. Our strategies adapt to your specific business model and target audience.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-amber-600">Questions</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Everything you need to know about our services, packages, and process
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-8">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-600 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
          <p className="text-lg text-gray-700 mb-8">
            We're here to help! Contact us directly and we'll answer all your questions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="tel:9096500303"
              className="flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">Call: 9096500303</span>
            </a>
            <a
              href="mailto:INAMKEPRATEEK@gmail.com"
              className="flex items-center space-x-3 bg-white text-gray-900 px-6 py-3 rounded-lg border-2 border-gray-200 hover:shadow-lg transition-all"
            >
              <Mail className="w-5 h-5" />
              <span className="font-semibold">Email Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
