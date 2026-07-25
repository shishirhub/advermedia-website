type SectionLabelProps = {
  index: string;
  label: string;
  onDark?: boolean;
  className?: string;
};

export function SectionLabel({ index, label, onDark, className }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      <span className={onDark ? "eyebrow-on-dark" : "eyebrow"}>{index}</span>
      <span className={`h-px w-8 ${onDark ? "bg-cream/25" : "bg-ink/20"}`} />
      <span className={onDark ? "eyebrow-on-dark" : "eyebrow"}>{label}</span>
    </div>
  );
}
