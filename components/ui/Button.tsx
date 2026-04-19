"use client";
import { ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  target?: "_blank" | "_self";
}

const styles: Record<Variant, string> = {
  primary: "bg-brand-gold text-brand-dark hover:bg-brand-gold-light font-semibold",
  outline: "border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark font-semibold",
  ghost:   "text-brand-gold hover:underline font-medium",
};

export default function Button({
  children, href, onClick, variant = "primary", className = "", target,
}: ButtonProps) {
  const base = "inline-flex items-center gap-2 px-6 py-3 rounded-sm transition-all duration-200 text-sm tracking-wide";
  const cls  = `${base} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={cls} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
