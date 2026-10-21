import { Tag } from "./Tag";

interface SkillGroup {
  label: string;
  color: "green" | "rust" | "plum";
  tags: string[];
}

interface SkillTagsProps {
  groups: SkillGroup[];
}

export function SkillTags({ groups }: SkillTagsProps) {
  return (
    <div className="space-y-6">
      {groups.map((group) => (
        <div key={group.label}>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide opacity-60">{group.label}</h3>
          <div className="flex flex-wrap gap-2">
            {group.tags.map((tag) => (
              <Tag key={tag} color={group.color}>
                {tag}
              </Tag>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
