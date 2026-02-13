'use client';

import { ReactNode } from 'react';

interface ChartCardProps {
  title: string;
  id?: string;
  children: ReactNode;
}

export default function ChartCard({ title, id, children }: ChartCardProps) {
  return (
    <div className="chart-card" id={id}>
      <h3 className="chart-card-title">{title}</h3>
      <div className="chart-card-body">{children}</div>
    </div>
  );
}
