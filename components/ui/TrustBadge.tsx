import * as Icons from "lucide-react";

interface TrustBadgeProps {
  icon: string;
  label: string;
  value?: string;
}

export function TrustBadge({ icon, label, value }: TrustBadgeProps) {
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[icon] || Icons.CheckCircle;

  return (
    <div className="flex flex-col items-center text-center gap-2">
      <IconComponent className="w-8 h-8 text-navy" />
      {value && (
        <span className="text-2xl font-bold text-navy">{value}</span>
      )}
      <span className="text-sm text-gray-600">{label}</span>
    </div>
  );
}
