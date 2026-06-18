const brands = [
  { name: "Rheem", specialty: "Water Heaters" },
  { name: "Navien", specialty: "Tankless & Boilers" },
  { name: "Bradford White", specialty: "Water Heaters" },
  { name: "Lennox", specialty: "Heating & Cooling" },
  { name: "Rinnai", specialty: "Tankless Systems" },
];

export default function BrandsRow() {
  return (
    <section className="py-14 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Brands We Install & Service
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex flex-col items-center justify-center w-36 h-20 rounded-lg border border-slate-200 bg-slate-50 hover:border-[#1e3a5f]/30 hover:bg-slate-100 transition-colors px-3"
            >
              <span className="text-base font-bold text-[#0f172a] leading-tight text-center">
                {brand.name}
              </span>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider mt-1 text-center">
                {brand.specialty}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
