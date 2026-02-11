export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-xl text-slate-400 mb-12 text-center">
          Ready to automate? Let&apos;s talk about your needs
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Methods */}
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">Contact Methods</h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:henry@clawsetup.com"
                  className="flex items-center space-x-4 text-slate-300 hover:text-blue-400 transition-colors group"
                >
                  <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-slate-400">henry@clawsetup.com</p>
                  </div>
                </a>

                <a
                  href="https://t.me/henrywillmott"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-slate-300 hover:text-blue-400 transition-colors group"
                >
                  <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Telegram</p>
                    <p className="text-sm text-slate-400">@henrywillmott</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/31612345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-slate-300 hover:text-blue-400 transition-colors group"
                >
                  <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-sm text-slate-400">+31 6 1234 5678</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Booking */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/50">
              <h3 className="text-xl font-semibold text-white mb-4">Book a Session</h3>
              <p className="text-slate-300 mb-6">
                Schedule a free 15-minute discovery call to discuss your automation needs.
              </p>
              
              <a
                href="https://calendly.com/henrywillmott"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:scale-105"
              >
                Schedule Free Call
              </a>
              
              <p className="text-sm text-slate-400 mt-4 text-center">
                No commitment • Just a friendly chat
              </p>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30">
              <h3 className="text-lg font-semibold text-white mb-3">Based in Amsterdam</h3>
              <p className="text-slate-400 text-sm">
                On-site installations available in the Amsterdam area. Virtual setup available worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-700/50 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} ClawSetup by Henry Willmott. Empowering businesses with AI automation.
          </p>
        </div>
      </div>
    </section>
  );
}
