export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual block */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden bg-gradient-to-br from-[#1e3a5f] to-[#2a4f7a] aspect-[4/3] flex items-center justify-center">
              {/* Decorative pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    -45deg,
                    transparent,
                    transparent 15px,
                    rgba(255,255,255,0.4) 15px,
                    rgba(255,255,255,0.4) 16px
                  )`,
                }}
              />
              <div className="relative text-center text-white px-8">
                <div className="text-6xl font-black mb-2 opacity-20">NP</div>
                <div className="text-5xl font-black text-white mb-3">15+</div>
                <div className="text-lg font-semibold text-slate-200">
                  Years Serving Fredericton
                </div>
                <div className="mt-6 flex justify-center gap-3">
                  {["Licensed", "Insured", "Local"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/15 border border-white/25 text-white text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-5 -right-4 bg-white rounded-xl shadow-xl border border-slate-200 px-5 py-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#22c55e]/15 rounded-full flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-[#0f172a]">2,400+ Jobs Done</div>
                <div className="text-xs text-slate-500">5-star rated service</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-semibold text-[#ea580c] uppercase tracking-widest">
              Our Story
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0f172a] mb-6">
              Built on Trust. Driven by Craft.
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Mike Arsenault started NorthPeak Plumbing & Heating in 2009
                with a truck, a set of tools, and a straightforward belief: do
                the job right, charge a fair price, and treat every customer
                like a neighbour.
              </p>
              <p>
                More than fifteen years later, that philosophy hasn't changed.
                What has changed is the team — today, Mike leads a crew of
                eight licensed tradespeople, all local to the Fredericton area,
                all trained to the same standard Mike holds himself to.
              </p>
              <p>
                We've worked in every type of home in this city, from 1920s
                heritage houses in the North Side to new builds in Hanwell and
                Lincoln. We know the quirks of Fredericton homes, and we know
                how to fix them.
              </p>
              <p>
                If you call us, you'll get an honest diagnosis, a clear
                upfront price, and tradespeople who clean up after themselves.
                That's the NorthPeak way.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-[#1e3a5f] hover:bg-[#152d4a] text-white font-semibold text-sm px-6 py-3 rounded transition-colors"
              >
                Get a Free Quote
              </a>
              <a
                href="tel:5065550192"
                className="inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-[#1e3a5f] text-[#0f172a] font-semibold text-sm px-6 py-3 rounded transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                (506) 555-0192
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
