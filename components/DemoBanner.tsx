export default function DemoBanner() {
  return (
    <div className="bg-slate-700 text-slate-200 text-xs py-2 px-4 text-center">
      This is a demo site created by{" "}
      <a
        href="https://aurentis.ca"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-white transition-colors"
      >
        Aurentis
      </a>
      . Not a real business.{" "}
      <a
        href="https://aurentis.ca"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-white transition-colors"
      >
        View our work at aurentis.ca
      </a>
    </div>
  );
}
