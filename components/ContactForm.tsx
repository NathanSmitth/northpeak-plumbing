"use client";

import { useState, FormEvent } from "react";
import { serviceTypes, siteConfig } from "@/data/content";

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

const emptyForm: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  }

  return (
    <section id="contact" className="py-20 bg-[#1e3a5f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: info */}
          <div className="text-white">
            <span className="text-sm font-semibold text-[#ea580c] uppercase tracking-widest">
              Get In Touch
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold mb-6">
              Request a Free Quote
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-10">
              Fill out the form and we'll get back to you within one business
              day — usually much faster. For emergencies, call us directly any
              time, day or night.
            </p>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                    Phone
                  </div>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                    className="text-white font-semibold hover:text-slate-200 transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                  <div className="text-slate-400 text-sm mt-0.5">
                    24/7 for emergencies
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                    Email
                  </div>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-white font-semibold hover:text-slate-200 transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                    Address
                  </div>
                  <div className="text-white font-semibold">{siteConfig.address}</div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    Hours
                  </div>
                  <div className="text-white text-sm space-y-0.5">
                    <div>{siteConfig.hours.weekdays}</div>
                    <div>{siteConfig.hours.saturday}</div>
                    <div>{siteConfig.hours.sunday}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-xl p-8 shadow-2xl">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center h-full min-h-[400px] gap-4">
                <div className="w-16 h-16 bg-[#22c55e]/15 rounded-full flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0f172a]">
                  Request Received!
                </h3>
                <p className="text-slate-500 max-w-xs text-sm leading-relaxed">
                  Thanks for reaching out. We'll be in touch within one
                  business day. For urgent issues, please call{" "}
                  <a
                    href="tel:5065550192"
                    className="text-[#1e3a5f] font-semibold"
                  >
                    {siteConfig.phone}
                  </a>{" "}
                  directly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm(emptyForm);
                  }}
                  className="mt-2 text-sm text-slate-500 hover:text-[#1e3a5f] underline transition-colors"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-[#0f172a] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(506) 555-0000"
                      className="w-full border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-[#0f172a] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-[#0f172a] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5"
                  >
                    Service Type *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent transition bg-white"
                  >
                    <option value="">Select a service…</option>
                    {serviceTypes.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5"
                  >
                    Tell Us About the Job
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Briefly describe what's happening. The more detail, the better."
                    className="w-full border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-[#0f172a] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#1e3a5f] hover:bg-[#152d4a] disabled:opacity-70 text-white font-bold text-sm px-6 py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" opacity="0.25" />
                        <path d="M21 12a9 9 0 00-9-9" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    "Send Request"
                  )}
                </button>

                <p className="text-xs text-slate-400 text-center">
                  For emergencies, skip the form and call us directly at{" "}
                  <a href="tel:5065550192" className="text-[#1e3a5f] font-semibold">
                    {siteConfig.phone}
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
