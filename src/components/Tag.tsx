import { Fragment } from "react";

type TagColor = "green" | "rust" | "plum" | "peach" | "yellow" | "default";

interface TagProps {
  children: React.ReactNode;
  color?: TagColor;
}

const colorClasses: Record<TagColor, string> = {
  green: "bg-green text-white",
  rust: "bg-rust text-white",
  plum: "bg-plum text-white",
  peach: "bg-peach text-foreground",
  yellow: "bg-yellow text-foreground border border-border",
  default: "bg-muted text-muted-foreground",
};

export function Tag({ children, color = "default" }: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-3 py-1 text-xs font-medium ${colorClasses[color]}`}
    >
      {children}
    </span>
  );
}

interface TagListProps {
  tags: string[];
  color?: TagColor;
}

const listClasses: Record<TagColor, string> = {
  green: "bg-green/80 text-white",
  rust: "bg-rust/80 text-white",
  plum: "bg-plum/80 text-white",
  peach: "bg-peach/80 text-foreground",
  yellow: "bg-yellow/80 text-foreground border border-border",
  default: "bg-muted text-muted-foreground",
};

export function TagList({ tags, color = "default" }: TagListProps) {
  return (
    <div
      className={`inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-2xl px-4 py-2 text-xs font-medium ${listClasses[color]}`}
    >
      {tags.map((tag, i) => (
        <Fragment key={tag}>
          {i > 0 && (
            <span aria-hidden="true" className="opacity-50">
              |
            </span>
          )}
          <span>{tag}</span>
        </Fragment>
      ))}
    </div>
  );
}