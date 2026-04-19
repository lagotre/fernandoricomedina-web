import { ReactNode } from "react";

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export default function SectionWrapper({ id, children, className = "", dark = false }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`section-padding ${dark ? "bg-brand-navy text-white" : "bg-brand-surface"} ${className}`}
    >
      <div className="container-max">
        {children}
      </div>
    </section>
  );
}
