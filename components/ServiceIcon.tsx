type IconType = "drain" | "water-heater" | "pipe" | "furnace" | "bathroom" | "emergency";

interface ServiceIconProps {
  type: IconType;
  className?: string;
}

export default function ServiceIcon({ type, className = "w-7 h-7" }: ServiceIconProps) {
  const props = {
    width: "28",
    height: "28",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
  };

  switch (type) {
    case "drain":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="3" />
          <line x1="12" y1="2" x2="12" y2="9" />
          <line x1="12" y1="15" x2="12" y2="22" />
          <line x1="2" y1="12" x2="9" y2="12" />
          <line x1="15" y1="12" x2="22" y2="12" />
        </svg>
      );
    case "water-heater":
      return (
        <svg {...props}>
          <rect x="5" y="2" width="14" height="18" rx="2" />
          <line x1="12" y1="8" x2="12" y2="14" />
          <path d="M9 11h6" />
          <path d="M8 20v2M16 20v2" />
        </svg>
      );
    case "pipe":
      return (
        <svg {...props}>
          <path d="M4 12h16" />
          <path d="M4 6h4v12H4z" />
          <path d="M16 6h4v12h-4z" />
          <path d="M8 9h8" />
          <path d="M8 15h8" />
        </svg>
      );
    case "furnace":
      return (
        <svg {...props}>
          <path d="M12 2c0 6-8 6-8 12a8 8 0 0016 0c0-6-8-6-8-12z" />
          <path d="M12 12c0 3-3 3-3 6a3 3 0 006 0c0-3-3-3-3-6z" />
        </svg>
      );
    case "bathroom":
      return (
        <svg {...props}>
          <path d="M4 12h16v4a4 4 0 01-4 4H8a4 4 0 01-4-4v-4z" />
          <path d="M4 12V6a2 2 0 012-2h1a2 2 0 012 2v2" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="8" y1="20" x2="8" y2="23" />
          <line x1="16" y1="20" x2="16" y2="23" />
        </svg>
      );
    case "emergency":
      return (
        <svg {...props}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    default:
      return null;
  }
}
