interface KPICardProps {
  label: string;
  value: string | number;
  subtitle?: string;
}

export default function KPICard({ label, value, subtitle }: KPICardProps) {
  return (
    <div className="kpi-card">
      <span className="kpi-label">{label}</span>
      <span className="kpi-value">{value}</span>
      {subtitle && <span className="kpi-subtitle">{subtitle}</span>}
    </div>
  );
}
