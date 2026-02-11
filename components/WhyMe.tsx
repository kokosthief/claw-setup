export default function WhyMe() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">
          Why Work With Me?
        </h2>

        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700/50">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                I&apos;m Not Just a Consultant
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                I&apos;m a <span className="text-blue-400 font-semibold">real power user</span> who runs OpenClaw 24/7 for my own business. I don&apos;t just teach theory—I live it.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Entrepreneur First</h4>
                    <p className="text-slate-400">I understand business workflows, not just technology</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Battle-Tested Setup</h4>
                    <p className="text-slate-400">Running accounting automation, project management, email scanning, and more</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Multi-Model Expertise</h4>
                    <p className="text-slate-400">Configured fallback chains, model optimization, and cost-efficient setups</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
              <h4 className="text-lg font-semibold text-white mb-4">My OpenClaw handles:</h4>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">▸</span>
                  Automated accounting workflows
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">▸</span>
                  Project management automation
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">▸</span>
                  Email scanning & categorization
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">▸</span>
                  Telegram integration for notifications
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">▸</span>
                  Scheduled cron jobs & reports
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">▸</span>
                  Multi-model fallback chains
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-700/50">
            <p className="text-center text-slate-400 italic">
              "I built my automation stack through trial and error. You get the polished, working version."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
