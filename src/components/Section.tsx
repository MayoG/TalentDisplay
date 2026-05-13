import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  /** Extra wrapper classes for the inner content max-width container */
  innerClassName?: string;
};

export function Section({ id, children, className = "", innerClassName = "" }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 md:scroll-mt-24 ${className}`}>
      <div className={`mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 ${innerClassName}`}>{children}</div>
    </section>
  );
}
