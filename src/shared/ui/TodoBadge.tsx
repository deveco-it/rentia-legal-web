import type { ReactNode } from 'react';

interface TodoBadgeProps {
  children: ReactNode;
}

export function TodoBadge({ children }: TodoBadgeProps) {
  return (
    <span
      title="Pendiente de completar por el equipo legal"
      className="inline-flex items-center gap-1 rounded-md border border-rentia-gold/50 bg-rentia-gold/15 px-1.5 py-0.5 align-baseline font-mono text-[0.78em] font-semibold uppercase tracking-wide text-rentia-gold-light"
    >
      <span aria-hidden="true">⚠</span>
      <span>TODO: {children}</span>
    </span>
  );
}
