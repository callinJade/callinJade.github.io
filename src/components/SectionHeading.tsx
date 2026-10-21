interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ children, subtitle, className = "" }: SectionHeadingProps) {
  return (
    <div className={`mb-8 ${className}`}>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{children}</h2>
      {subtitle && <p className="mt-3 max-w-2xl text-base leading-relaxed opacity-70">{subtitle}</p>}
    </div>
  );
}
