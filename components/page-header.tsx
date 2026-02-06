interface PageHeaderProps {
  title: string;
  subtitle: string;
  badge?: string;
}

export function PageHeader({ title, subtitle, badge }: PageHeaderProps) {
  return (
    <div className="section-container section-padding pt-32">
      {badge && (
        <div className="inline-block mb-6 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full">
          <p className="text-xs font-mono text-primary">• {badge}</p>
        </div>
      )}
      <h1 className="gradient-text mb-4">{title}</h1>
      <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">{subtitle}</p>
    </div>
  );
}
