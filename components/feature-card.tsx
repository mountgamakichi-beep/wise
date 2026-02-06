import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  label?: string;
}

export function FeatureCard({ icon, title, description, label }: FeatureCardProps) {
  return (
    <div className="card-glow p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="text-primary text-3xl">{icon}</div>
        {label && (
          <span className="text-xs font-mono px-2 py-1 bg-primary/10 text-primary rounded-full">
            {label}
          </span>
        )}
      </div>
      <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
}
