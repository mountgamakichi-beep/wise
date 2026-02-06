'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Link2, Zap, Brain, BarChart3 } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { PageHeader } from '@/components/page-header';

export default function HowItWorksPage() {
  const steps = [
    {
      number: 1,
      title: 'Connect Your Wallet',
      description: 'Link any Web3 wallet securely. No private keys required. Read-only access only.',
      icon: Link2,
      details: [
        'Choose from MetaMask, Trust Wallet, Ledger, Coinbase Wallet, or any WalletConnect wallet',
        'Click "Connect Wallet" and follow your wallet\'s connection flow',
        'Your private keys never leave your device',
        'Approve read-only access to your public wallet data',
      ],
    },
    {
      number: 2,
      title: 'Preview Networks',
      description: 'See all 30+ supported blockchain networks. Learn about cross-chain readiness.',
      icon: Zap,
      details: [
        'View complete list of supported blockchains at WalletWise launch',
        'Understand which networks your wallet currently uses',
        'Prepare for multi-chain features coming soon',
        'Stay updated as more networks are added',
      ],
    },
    {
      number: 3,
      title: 'Get Early Access',
      description: 'Receive updates about new features and upcoming platform launch.',
      icon: Brain,
      details: [
        'Enable early access notifications for your wallet address',
        'Receive exclusive founding member updates',
        'Be notified when new features become available',
        'Help shape WalletWise development with your feedback',
      ],
    },
    {
      number: 4,
      title: 'Stay Prepared',
      description: 'Prepare your wallet for the full WalletWise experience at launch.',
      icon: BarChart3,
      details: [
        'Keep your wallet connected to stay informed',
        'Experience the read-only preview of supported networks',
        'Join the founding community of early adopters',
        'Be ready when full features become available',
      ],
    },
  ];

  const timeline = [
    { time: '0s', event: 'Wallet Connection Initiated' },
    { time: '1s', event: 'Wallet Address Verified' },
    { time: '2s', event: 'Security Check Complete' },
    { time: '3s', event: 'Read-Only Access Granted' },
    { time: '5s', event: 'Network Preview Ready' },
  ];

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navigation />
      <PageHeader
        title="How It Works"
        subtitle="Simple, secure, transparent. See how to connect and prepare for WalletWise at launch."
        badge="Step by Step"
      />

      {/* Main Steps */}
      {/* Hero Image Section */}
      <section className="py-12">
        <div className="section-container">
          <div className="relative h-96 rounded-3xl overflow-hidden border border-muted">
            <Image
              src="/process-hero.jpg"
              alt="Process Flow"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
              <div key={step.number} className="card-glow p-8 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-lg font-bold text-primary-foreground">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      {steps.map((step, i) => (
        <section key={step.number} className={i % 2 === 0 ? 'section-padding' : 'section-padding bg-card/30'}>
          <div className="section-container">
            <div className={`grid lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="text-5xl">
                      {(() => {
                        const Icon = step.icon;
                        return <Icon className="w-12 h-12 text-primary" />;
                      })()}
                    </div>
                    <div>
                      <p className="text-primary font-bold text-sm uppercase">Step {step.number}</p>
                      <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-foreground">
                        {step.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  <div className="space-y-3 pt-4">
                    <p className="text-sm font-bold text-foreground uppercase tracking-wide">What Happens</p>
                    <ul className="space-y-3">
                      {step.details.map((detail, j) => (
                        <li key={j} className="flex gap-3">
                          <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5 h-5 w-5" />
                          <span className="text-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="card-glow p-12 h-full flex items-center justify-center">
                  <div className="opacity-40">
                    {(() => {
                      const Icon = step.icon;
                      return <Icon className="w-32 h-32 text-primary" />;
                    })()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Timeline */}
      <section className="section-padding">
        <div className="section-container max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4 text-foreground">Real-Time Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Here's what happens the moment you connect your wallet to WalletWise.</p>
          </div>

          <div className="relative space-y-6">
            {timeline.map((item, i) => (
              <div key={i} className="card-glow p-6 flex gap-6 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-1 h-12 bg-gradient-to-b from-primary/40 to-transparent mt-2" />
                  )}
                </div>
                <div className="pt-2">
                  <p className="text-primary font-bold text-sm">{item.time}</p>
                  <p className="text-foreground font-medium">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-card/30">
        <div className="section-container max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-4 text-foreground">Common Questions</h2>
            <p className="text-muted-foreground">Everything you need to know about how WalletWise works.</p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'Is this truly read-only?',
                a: 'Yes, completely. WalletWise has no ability to execute transactions, move funds, or access private keys. You maintain total control.',
              },
              {
                q: 'Can I connect multiple wallets?',
                a: 'Yes, you can connect multiple wallets to receive early access updates for all of them.',
              },
              {
                q: 'How will I be notified of updates?',
                a: 'You\'ll receive notifications about new features, network additions, and WalletWise launch updates to your connected wallet address.',
              },
              {
                q: 'What blockchains are supported?',
                a: 'Currently previewing 30+ blockchains including Ethereum, Polygon, Arbitrum, Optimism, Base, Solana, and more. More coming soon.',
              },
              {
                q: 'When does WalletWise launch?',
                a: 'We\'re in early access. Connect now to be notified the moment full features become available to founding members.',
              },
              {
                q: 'Can I disconnect anytime?',
                a: 'Yes, you can disconnect anytime without consequences. Your connection is entirely voluntary.',
              },
            ].map((item, i) => (
              <div key={i} className="card-glow p-6">
                <h3 className="font-bold text-foreground mb-3">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card/50 border-y border-border/50">
        <div className="section-container text-center space-y-8">
          <div className="space-y-4">
            <h2 className="gradient-text">Ready to Join the Early Access?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect your wallet to get exclusive early access updates and be part of the WalletWise founding community.
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
