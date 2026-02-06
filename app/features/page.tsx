'use client';

import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { PageHeader } from '@/components/page-header';
import { FeatureCard } from '@/components/feature-card';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  BarChart3,
  Eye,
  Gauge,
  Zap,
  Shield,
  Layers,
} from 'lucide-react';

export default function FeaturesPage() {
  const features = [
    {
      icon: <BarChart3 />,
      title: 'Multi-Chain Network Support',
      description: 'Access all your accounts across 30+ blockchains from a single dashboard.',
      label: 'Multi-Chain',
      benefits: [
        'Unified portfolio view across all chains',
        'Support for major networks at launch',
        'Easy wallet switching',
        'Network expansion planned regularly',
      ],
    },
    {
      icon: <Eye />,
      title: 'Clear Transaction Insights',
      description: 'Understand your on-chain activity with clear, plain language explanations.',
      label: 'Insights',
      benefits: [
        'Simple transaction breakdowns',
        'Activity timeline and history',
        'Easy-to-understand summaries',
        'Network activity tracking',
      ],
    },
    {
      icon: <Gauge />,
      title: 'Portfolio Overview',
      description: 'Visualize your assets and understand your wallet composition at a glance.',
      label: 'Analytics',
      benefits: [
        'Asset allocation overview',
        'Balance tracking',
        'Network breakdown view',
        'Easy portfolio monitoring',
      ],
    },
    {
      icon: <Zap />,
      title: 'Network Insights',
      description: 'Learn about the networks you use and optimize your Web3 preparation.',
      label: 'Optimization',
      benefits: [
        'Network information and details',
        'Fee and cost context',
        'Activity summaries',
        'Wallet readiness preparation',
      ],
    },
    {
      icon: <Shield />,
      title: 'Read-Only Security',
      description: 'Connect with complete peace of mind. No transactions, no risk, no private key exposure.',
      label: 'Security',
      benefits: [
        'Read-only connection guarantee',
        'No private key access',
        'No transaction capability',
        'Secure by design',
      ],
    },
    {
      icon: <Layers />,
      title: 'Activity History',
      description: 'Access your complete transaction history with search and filter capabilities.',
      label: 'History',
      benefits: [
        'Complete activity records',
        'Searchable transaction history',
        'Timeline organization',
        'Easy activity tracking',
      ],
    },
  ];

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navigation />
      <PageHeader
        title="Upcoming Features"
        subtitle="A preview of what's coming with WalletWise. These features will be available at launch."
        badge="Coming Soon"
      />

      {/* Main Features Grid */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <FeatureCard
                key={i}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                label={feature.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Feature Deep Dives */}
      {features.map((feature, i) => (
        <section key={i} className={i % 2 === 0 ? 'section-padding' : 'section-padding bg-card/30'}>
          <div className="section-container">
            <div className={`grid lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="text-4xl text-primary">{feature.icon}</div>
                    <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-foreground">
                      {feature.title}
                    </h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-3 pt-4">
                    <p className="text-sm font-bold text-foreground uppercase tracking-wide">
                      Key Benefits
                    </p>
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, j) => (
                        <li key={j} className="flex gap-3">
                          <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5 h-5 w-5" />
                          <span className="text-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="card-glow p-12 h-full flex items-center justify-center">
                  <div className="text-7xl opacity-40 text-primary">{feature.icon}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Comparison Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4 text-foreground">How We Compare</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              WalletWise combines the best of wallet simplicity with the depth of block explorer data, designed specifically for early access.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left py-4 px-4 font-bold text-foreground">Feature</th>
                  <th className="text-center py-4 px-4 font-bold text-foreground">WalletWise</th>
                  <th className="text-center py-4 px-4 font-bold text-foreground">Block Explorer</th>
                  <th className="text-center py-4 px-4 font-bold text-foreground">Wallet App</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Multi-Chain Dashboard', walletwise: true, explorer: false, wallet: true },
                  { feature: 'Transaction Explanation', walletwise: true, explorer: false, wallet: false },
                  { feature: 'Portfolio Analytics', walletwise: true, explorer: false, wallet: false },
                  { feature: 'Gas Optimization', walletwise: true, explorer: false, wallet: false },
                  { feature: 'Health Score', walletwise: true, explorer: false, wallet: false },
                  { feature: 'Activity Timeline', walletwise: true, explorer: true, wallet: false },
                  { feature: 'Non-Custodial', walletwise: true, explorer: true, wallet: true },
                  { feature: 'Read-Only Access', walletwise: true, explorer: true, wallet: false },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border/50 hover:bg-card/30 transition-colors">
                    <td className="py-4 px-4 text-foreground">{row.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {row.walletwise ? (
                        <CheckCircle2 className="h-5 w-5 text-primary mx-auto" />
                      ) : (
                        <div className="h-5 w-5 border-2 border-border rounded-full mx-auto" />
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.explorer ? (
                        <CheckCircle2 className="h-5 w-5 text-muted-foreground mx-auto" />
                      ) : (
                        <div className="h-5 w-5 border-2 border-border rounded-full mx-auto" />
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.wallet ? (
                        <CheckCircle2 className="h-5 w-5 text-muted-foreground mx-auto" />
                      ) : (
                        <div className="h-5 w-5 border-2 border-border rounded-full mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card/50 border-y border-border/50">
        <div className="section-container text-center space-y-8">
          <div className="space-y-4">
            <h2 className="gradient-text">Ready for What's Coming?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect your wallet today to get early access updates and be among the first to experience these features.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/connect">
              <Button size="lg" className="gradient-button">
                Connect Wallet
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-primary/30 bg-transparent">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
