import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import ContactCTA from "@/components/shared/ContactCTA";
import FadeIn from "@/components/shared/FadeIn";
import CountUp from "@/components/shared/CountUp";
import { team } from "@/data/team";
import { siteConfig } from "@/data/content";

export const metadata: Metadata = {
  title: "About NorthPeak Plumbing & Heating | Fredericton, NB",
  description:
    "Meet the NorthPeak team — Fredericton's trusted family-owned plumbing and heating company. 15+ years serving the community, licensed master plumbers.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        overline="Our Story"
        title="Built on Trust. Driven by Craft."
        subtitle="Family-owned and operated in Fredericton since 2009. Here's who we are and how we work."
        breadcrumbs={[{ label: "About", href: "/about" }]}
      />

      {/* Story section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Visual block */}
            <FadeIn from="left">
              <div className="relative">
                <div className="rounded-xl overflow-hidden bg-gradient-to-br from-[#1e3a5f] to-[#2a4f7a] aspect-[4/3] flex items-center justify-center">
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
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#16a34a"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0f172a]">
                      2,400+ Jobs Done
                    </div>
                    <div className="text-xs text-slate-500">5-star rated service</div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Content */}
            <FadeIn from="right" delay={100}>
              <div>
                <div className="space-y-4 text-slate-600 leading-relaxed text-base">
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
                    We've worked in every type of home in this city — from 1920s
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

                {/* Stats grid with CountUp */}
                <div className="mt-8 grid grid-cols-2 gap-5">
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <div className="text-2xl font-bold text-[#1e3a5f]">2009</div>
                    <div className="text-xs text-slate-500 mt-0.5">Founded in Fredericton</div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <div className="text-2xl font-bold text-[#1e3a5f]">
                      <CountUp to={15} suffix="+" duration={1200} />
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">Years in business</div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <div className="text-2xl font-bold text-[#1e3a5f]">
                      <CountUp to={2400} suffix="+" duration={1600} separator />
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">Jobs completed</div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <div className="text-2xl font-bold text-[#1e3a5f]">$5M</div>
                    <div className="text-xs text-slate-500 mt-0.5">Liability coverage</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-sm font-semibold text-[#ea580c] uppercase tracking-widest">
                How We Work
              </span>
              <h2 className="mt-2 text-3xl font-bold text-[#0f172a]">
                The NorthPeak Standard
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Honest Diagnosis",
                body: "We tell you what's wrong and what it costs to fix — before we start. No inflated scope, no invented problems.",
              },
              {
                title: "Upfront Pricing",
                body: "Flat-rate quotes agreed in writing before work begins. You'll never see a line item on your invoice that surprised you.",
              },
              {
                title: "Clean Jobsites",
                body: "We wear boot covers, lay down drop sheets, and leave your home the way we found it — minus whatever was broken.",
              },
              {
                title: "1-Year Warranty",
                body: "Every job is backed by a full one-year labour warranty. If something we fixed fails, we come back and fix it at no charge.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 80}>
                <div className="bg-white rounded-xl border border-slate-200 p-6 h-full transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                  <div className="w-8 h-8 bg-[#1e3a5f] rounded-lg mb-4 flex items-center justify-center">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[#0f172a] mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-sm font-semibold text-[#ea580c] uppercase tracking-widest">
                The Team
              </span>
              <h2 className="mt-2 text-3xl font-bold text-[#0f172a]">
                The People Behind NorthPeak
              </h2>
              <p className="mt-4 text-slate-500 max-w-xl mx-auto text-base">
                When you call NorthPeak, you're getting one of these people at
                your door. All local, all licensed, all held to the same standard.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 80}>
                <div className="bg-white rounded-xl border border-slate-200 p-6 text-center h-full transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                  <div className="w-16 h-16 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {member.initials}
                  </div>
                  <h3 className="font-bold text-[#0f172a] text-base">{member.name}</h3>
                  <div className="text-sm text-[#ea580c] font-semibold mt-0.5 mb-1">
                    {member.role}
                  </div>
                  <div className="text-xs text-slate-400 mb-4">
                    {member.years} years with NorthPeak
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed text-left">
                    {member.bio}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        heading="Ready to work with the NorthPeak team?"
        subtext={`Call us at ${siteConfig.phone} or submit a request online. Most jobs scheduled same or next day.`}
      />
    </>
  );
}
