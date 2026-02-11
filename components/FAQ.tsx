'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What hardware do I need?',
      answer: 'OpenClaw runs best on modern Macs (M1/M2/M3 or Intel) with at least 8GB RAM. For the Premium On-Site package, I provide a complete Mac Mini setup. It can also run on Linux or Windows (via WSL), but Mac is recommended for the smoothest experience.',
    },
    {
      question: 'Is my data private?',
      answer: 'Absolutely. OpenClaw runs entirely on YOUR machine—not in the cloud. All your data stays local. You choose which AI models to use (including local models), and you have complete control over what data is shared and with whom.',
    },
    {
      question: 'What can OpenClaw actually do?',
      answer: 'OpenClaw can automate email management, file organization, calendar scheduling, project tracking, social media monitoring, web scraping, data analysis, report generation, messaging integration (Telegram, WhatsApp, Signal), and much more. I configure it specifically for YOUR workflow.',
    },
    {
      question: 'Do I need technical knowledge?',
      answer: 'No! That\'s the whole point of my service. I handle all the technical setup, configuration, and integration. You just tell me what you want to automate, and I make it happen. I provide training so you can use it confidently.',
    },
    {
      question: 'Which AI models does it use?',
      answer: 'OpenClaw supports multiple AI providers: Claude (Anthropic), GPT (OpenAI), Gemini (Google), and local models via Ollama. I help you choose the best models for your use case and budget, and set up smart fallback chains for reliability.',
    },
    {
      question: 'What\'s included in Monthly Support?',
      answer: 'Ongoing maintenance, skill updates as your needs evolve, priority troubleshooting, a dedicated Telegram support channel, model optimization to reduce costs, workflow improvements, and monthly check-in calls to ensure everything runs smoothly.',
    },
    {
      question: 'Can I start with Virtual Setup and upgrade later?',
      answer: 'Yes! Many clients start with the Virtual Setup to get familiar with OpenClaw, then add Monthly Support or upgrade to a full on-site installation. All packages are designed to work together.',
    },
    {
      question: 'How long does setup take?',
      answer: 'Virtual Setup is typically 2 hours. Premium On-Site setup takes 3-4 hours including hardware installation and training. You can start using basic automation immediately, and I\'ll continue refining your setup based on feedback.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-400 mb-12 text-center">
          Everything you need to know about OpenClaw setup
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 overflow-hidden transition-all duration-200 hover:border-blue-500/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center"
              >
                <h3 className="text-lg font-semibold text-white pr-8">{faq.question}</h3>
                <svg
                  className={`w-5 h-5 text-blue-400 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
