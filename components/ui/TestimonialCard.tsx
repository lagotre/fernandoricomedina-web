interface TestimonialCardProps {
  quote: string;
  author: string;
  context: string;
  className?: string;
}

export default function TestimonialCard({ quote, author, context, className = "" }: TestimonialCardProps) {
  return (
    <div className={`bg-white/5 border border-white/10 rounded-sm p-8 ${className}`}>
      <div className="text-brand-gold text-4xl font-display leading-none mb-4">&quot;</div>
      <p className="text-white/80 leading-relaxed mb-6">{quote}</p>
      <p className="text-white font-semibold text-sm">{author}</p>
      <p className="text-white/50 text-xs uppercase tracking-widest mt-1">{context}</p>
    </div>
  );
}
