export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900/40 to-purple-900/20 animate-pulse-slow"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          AI Automation
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Made Simple
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-slate-300 mb-4 font-light">
          I run OpenClaw for my own business 24/7.
        </p>
        <p className="text-lg sm:text-xl text-slate-400 mb-12">
          Let me set it up for yours.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#packages"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          >
            View Packages
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-all duration-200 border border-slate-700 hover:border-slate-600"
          >
            Get in Touch
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
