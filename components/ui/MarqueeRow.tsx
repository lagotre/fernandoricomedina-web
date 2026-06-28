interface MarqueeRowProps {
  items: string[];
  duration: number;
}

export default function MarqueeRow({ items, duration }: MarqueeRowProps) {
  return (
    <div className="relative overflow-hidden marquee-fade">
      <div
        className="flex w-max gap-10 whitespace-nowrap animate-marquee"
        style={{ animationDuration: `${duration}s` }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="font-display text-lg sm:text-xl text-brand-navy/70">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
