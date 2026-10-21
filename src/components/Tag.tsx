interface TagProps {
  children: React.ReactNode;
  color?: "green" | "rust" | "plum" | "peach" | "yellow" | "default";
}

const colorClasses: Record<string, string> = {
  green: "bg-green/10 text-green",
  rust: "bg-rust/10 text-rust",
  plum: "bg-plum/10 text-plum",
  peach: "bg-peach/20 text-foreground",
  yellow: "bg-yellow/30 text-foreground",
  default: "bg-muted text-muted-foreground",
};

export function Tag({ children, color = "default" }: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${colorClasses[color]}`}
    >
      {children}
    </span>
  );
}
