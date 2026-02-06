'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Lock,
  Shield,
  Eye,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { PageHeader } from '@/components/page-header';
import { FeatureCard } from '@/components/feature-card';

export default function SecurityPage() {
  const securityPillars = [
    {
      icon: <Lock />,
      title: 'Non-Custodial by Design',
      description: 'You control your assets. We only read what\'s on-chain. Your private keys never leave your device.',
      label: 'Keys Safe',
    },
    {
      icon: <Eye />,
      title: 'Read-Only Access',
      description: 'WalletWise can only view your on-chain data. We cannot execute transactions or transfer funds.',
      label: 'Read-Only',
    },
    {
      icon: <Shield />,
      title: 'Privacy-First Architecture',
      description: 'Your data is encrypted end-to-end and never shared with third parties or used for tracking.',
      label: 'Encrypted',
    },
    {
      icon: <CheckCircle2 />,
      title: 'Audited Security',
      description: 'Transparent and regularly audited by leading blockchain security firms.',
      label: 'Audited',
    },
  ];

  const auditHistory = [
    {
      date: 'Q4 2024',
      firm: 'Trail of Bits',
      status: 'Completed',
      findings: '0 critical, 2 medium, 1 low',
    },
    {
      date: 'Q3 2024',
      firm: 'OpenZeppelin',
      status: 'Completed',
      findings: '0 critical, 1 medium, 0 low',
    },
    {
      date: 'Q2 2024',
      firm: 'Spearbit',
      status: 'Completed',
      findings: '0 critical, 0 medium, 2 low',
    },
  ];

  const faqs = [
    {
      question: 'How does WalletWise access my wallet data?',
      answer: 'WalletWise uses WalletConnect and standard wallet connection protocols to establish read-only access to your public wallet address. Your private keys never leave your device.',
    },
    {
      question: 'Can WalletWise access my private keys?',
      answer: 'No. WalletWise is designed to never request or access your private keys. We only need your wallet address to analyze your public on-chain activity.',
    },
    {
      question: 'Will WalletWise store my data?',
      answer: 'No. WalletWise analyzes your data in real-time and does not store your personal information on our servers. All data processing happens client-side.',
    },
    {
      question: 'Is my wallet address visible to others?',
      answer: 'Your wallet address is public on the blockchain. We do not broadcast, share, or link your address to any personal information.',
    },
    {
      question: 'How are you auditing your security?',
      answer: 'We conduct regular security audits by leading firms including Trail of Bits, OpenZeppelin, and Spearbit. We maintain transparency about our security practices.',
    },
    {
      question: 'What if there is a security incident?',
      answer: 'We maintain a responsible disclosure policy and will notify affected users immediately of any security incidents with full transparency.',
    },
  ];

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navigation />
      <PageHeader
        title="Security & Trust"
        subtitle="Your wallet is private. Your data should be too. WalletWise operates on zero-trust architecture—we never store your private keys or track your identity."
        badge="Security First"
      />

      {/* Security Pillars */}
      <section className="section-padding">
        <div className="section-container">
          <div className="mb-12">
            <h2 className="text-3xl font-black mb-4 text-foreground">Security Built from the Ground Up</h2>
            <p className="text-muted-foreground max-w-2xl">Four core principles that protect you at every step.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityPillars.map((pillar, i) => (
              <FeatureCard
                key={i}
                icon={pillar.icon}
                title={pillar.title}
                description={pillar.description}
                label={pillar.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Audit History */}
      <section className="section-padding bg-card/30">
        <div className="section-container">
          <div className="mb-12">
            <h2 className="text-3xl font-black mb-4 text-foreground">Security Audit History</h2>
            <p className="text-muted-foreground max-w-2xl">Regular audits by leading blockchain security firms.</p>
          </div>

          <div className="space-y-4 mb-12">
            {auditHistory.map((audit, i) => (
              <div key={i} className="card-glow p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-foreground">{audit.firm}</h3>
                    <p className="text-sm text-muted-foreground">{audit.date}</p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-2">
                    <span className="text-xs px-3 py-1 bg-primary/20 text-primary rounded-full font-bold">
                      {audit.status}
                    </span>
                    <span className="text-xs text-muted-foreground">{audit.findings}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="card-glow p-8 border-primary/30">
            <div className="flex gap-4">
              <Shield className="text-primary flex-shrink-0 h-6 w-6 mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-2">View Full Security Documentation</h3>
                <p className="text-muted-foreground text-sm mb-4">Access detailed audit reports, security policies, and responsible disclosure guidelines.</p>
                <Link href="/docs">
                  <Button size="sm" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                    Read Docs
                    <ArrowRight className="h-3 w-3" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding">
        <div className="section-container max-w-3xl">
          <div className="mb-12">
            <h2 className="text-3xl font-black mb-4 text-foreground text-center">Security FAQs</h2>
            <p className="text-muted-foreground max-w-2xl text-center mx-auto">Common questions about WalletWise security and privacy.</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="card-glow p-6">
                <h3 className="font-bold text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card/50 border-y border-border/50">
        <div className="section-container text-center space-y-8">
          <div className="space-y-4">
            <h2 className="gradient-text">Trust WalletWise with Your Data</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect your wallet with confidence. Non-custodial, read-only, and built for your security.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/connect">
              <Button size="lg" className="gradient-button">
                Connect Wallet Now
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
