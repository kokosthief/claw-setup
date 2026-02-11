export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          What People Are Saying
        </h2>
        <p className="text-slate-400 mb-12">
          Real results from real businesses
        </p>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-12 border border-slate-700/50">
          <svg className="w-12 h-12 text-blue-400 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          
          <p className="text-xl text-slate-300 italic mb-8 leading-relaxed">
            Coming soon: testimonials from early adopters who are already automating their businesses with OpenClaw
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mt-12 opacity-60">
            <div className="text-slate-500 font-semibold">Early Access Program</div>
            <div className="text-slate-500 font-semibold">Beta Testers</div>
            <div className="text-slate-500 font-semibold">Launch Partners</div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 italic">
            Be one of the first to experience AI automation done right
          </p>
        </div>
      </div>
    </section>
  );
}
