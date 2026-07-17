interface ProgressBarProps {
  label: string;
  percentage: number;
}

export function ProgressBar({ label, percentage }: ProgressBarProps) {
  return (
    <div className="my-4">
      <div className="mb-2 flex items-center justify-between text-sm font-semibold">
        <span>{label}</span>
        <span className="text-primary" dir="ltr">
          {percentage}%
        </span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-muted">
        <span
          className="block h-full rounded-full bg-brand-gradient transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
