export default function Packages() {
  const packages = [
    {
      name: 'Virtual Setup',
      price: '€750',
      description: 'Perfect for getting started with OpenClaw',
      features: [
        '2-hour video call session',
        'Full OpenClaw installation',
        'Workflow configuration',
        'Telegram/WhatsApp integration',
        'Model selection & optimization',
        'Basic skills setup',
        'Documentation & follow-up guide',
      ],
      highlight: false,
    },
    {
      name: 'Premium On-Site',
      price: '€2,500',
      description: 'Complete hardware + setup solution',
      features: [
        'Mac Mini + monitor + peripherals',
        'In-person setup at your location',
        'Full OpenClaw configuration',
        '1-hour in-person training',
        'Amsterdam area (travel fees outside)',
        'Priority support for 30 days',
        'Custom workflow optimization',
      ],
      highlight: true,
    },
    {
      name: 'Monthly Support',
      price: '€300/mo',
      description: 'Ongoing maintenance & optimization',
      features: [
        'Continuous maintenance',
        'Regular skill updates',
        'Priority troubleshooting',
        'Telegram support channel',
        'Model optimization',
        'Workflow improvements',
        'Monthly check-in calls',
      ],
      highlight: false,
    },
  ];

  return (
    <section id="packages" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            What You Get
          </h2>
          <p className="text-xl text-slate-400">
            Choose the package that fits your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl p-8 ${
                pkg.highlight
                  ? 'bg-gradient-to-b from-blue-600/20 to-purple-600/20 border-2 border-blue-500/50 shadow-2xl shadow-blue-500/20'
                  : 'bg-slate-800/50 border border-slate-700/50'
              } backdrop-blur-sm transition-all duration-300 hover:scale-105`}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  {pkg.price}
                </span>
              </div>
              <p className="text-slate-400 mb-6">{pkg.description}</p>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3 text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-200 ${
                  pkg.highlight
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
