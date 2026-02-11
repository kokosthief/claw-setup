export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl p-12 border-2 border-blue-500/50 backdrop-blur-sm overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 animate-pulse-slow"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s have a quick call to discuss your workflow and how OpenClaw can help.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-2xl hover:shadow-blue-500/50 hover:scale-105"
              >
                Schedule Free Consultation
              </a>
              <a
                href="#packages"
                className="px-10 py-5 bg-slate-800/80 text-white text-lg font-semibold rounded-lg hover:bg-slate-700 transition-all duration-200 border-2 border-slate-700 hover:border-blue-500"
              >
                View Packages
              </a>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-700/50">
              <p className="text-slate-400">
                <span className="text-blue-400 font-semibold">Free 15-minute discovery call</span> • No commitment required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
