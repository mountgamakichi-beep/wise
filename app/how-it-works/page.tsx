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
      description: 'Link any Web3 wallet securely through WalletConnect or your preferred provider. No private keys required.',
      icon: Link2,
      details: [
        'Choose from MetaMask, Trust Wallet, Ledger, Coinbase Wallet, Rainbow, or any WalletConnect-compatible wallet',
        'Click "Connect Wallet" and follow the wallet\'s authentication flow',
        'Your private keys never leave your device—we only get your wallet address',
        'Grant read-only permission to view your public blockchain data',
      ],
    },
    {
      number: 2,
      title: 'Automatic Indexing',
      description: 'WalletWise automatically scans and indexes your transactions across all supported chains in seconds.',
      icon: Zap,
      details: [
        'We query the blockchain for your wallet address across all supported networks',
        'Historical data is retrieved from decentralized RPC nodes and indexing services',
        'All queries use your public wallet address—nothing private is exposed',
        'Real-time updates ensure you always see your latest on-chain activity',
      ],
    },
    {
      number: 3,
      title: 'Analysis & Decoding',
      description: 'Our engine analyzes your activity and transforms complex transactions into clear, understandable actions.',
      icon: Brain,
      details: [
        'Transactions are decoded to show token swaps, liquidity movements, and protocol interactions',
        'Smart contract calls are translated into plain language explanations',
        'Gas fees are calculated and categorized by transaction type',
        'Your activities are organized by protocol, token, and time period',
      ],
    },
    {
      number: 4,
      title: 'Explore & Optimize',
      description: 'Get actionable insights, portfolio analytics, and optimization recommendations for your crypto holdings.',
      icon: BarChart3,
      details: [
        'View your complete portfolio composition across all chains',
        'Discover gas optimization opportunities and savings',
        'Get wallet health score and security recommendations',
        'Make informed decisions about your Web3 activity',
      ],
    },
  ];

  const timeline = [
    { time: '0s', event: 'Wallet Connection Initiated' },
    { time: '1s', event: 'Wallet Address Verified' },
    { time: '3s', event: 'On-Chain Data Indexing Begins' },
    { time: '5-10s', event: 'All Chains Scanned & Analyzed' },
    { time: '10s', event: 'Dashboard Ready with Full Insights' },
  ];

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navigation />
      <PageHeader
        title="How It Works"
        subtitle="Simple, secure, and transparent. Understand every step of the WalletWise process."
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
                    <div className="text-5xl">{step.icon}</div>
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
                  <div className="text-8xl opacity-40">{step.icon}</div>
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
                q: 'How is my wallet data analyzed?',
                a: 'We use a combination of on-chain indexing services and real-time blockchain queries to fetch your transaction history and current balances. All analysis happens securely.',
              },
              {
                q: 'Can I connect multiple wallets?',
                a: 'Yes! You can add multiple wallets to your WalletWise dashboard and see all your portfolios in one unified view.',
              },
              {
                q: 'How often is my data updated?',
                a: 'Your data updates in real-time as transactions occur on-chain. You\'ll always see your latest balances and activity.',
              },
              {
                q: 'What blockchains are supported?',
                a: 'WalletWise supports 30+ blockchains including Ethereum, Polygon, Arbitrum, Optimism, Base, Solana, and more.',
              },
              {
                q: 'Is my data saved after I disconnect?',
                a: 'No, your data is not saved on our servers. When you disconnect, your session ends and data is cleared.',
              },
              {
                q: 'Can I export my wallet data?',
                a: 'Yes, you can export your transaction history and portfolio data as CSV for tax reporting and record keeping.',
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
            <h2 className="gradient-text">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect your wallet now and experience clarity in your on-chain activity.
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
