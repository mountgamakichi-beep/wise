'use client';

import { Footer } from '@/components/footer';
import { Navigation } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  BarChart3,
  Check,
  Eye,
  Layers,
  Lock,
  Shield,
  TrendingUp,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='bg-background text-foreground min-h-screen'>
      <Navigation />

      {/* Hero Section */}
      <section className='relative px-4 sm:px-6 lg:px-8 py-24 sm:py-32'>
        <div className='mx-auto max-w-4xl'>
          <div className='text-center space-y-8'>
            <div className='inline-block px-4 py-2 rounded-full border border-border bg-secondary/30'>
              <span className='text-sm font-medium text-foreground'>
                Understand Your On-Chain Activity
              </span>
            </div>
            <h1 className='text-5xl sm:text-6xl font-bold tracking-tight text-pretty'>
              Web3 Simplified. Security Guaranteed.
            </h1>
            <p className='text-xl text-foreground/70 max-w-2xl mx-auto text-pretty'>
              Track your balances across chains, get smarter insights about your
              crypto usage, and interact with Web3 securely and confidently.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center pt-4'>
              <Button
                size='lg'
                className='bg-primary hover:bg-primary/90 text-primary-foreground group'
                asChild
              >
                <Link href='/connect' className='flex items-center gap-2'>
                  Get Started{' '}
                  <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition' />
                </Link>
              </Button>
              <Button size='lg' variant='outline'>
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className='px-4 sm:px-6 lg:px-8 py-16 border-b border-border bg-secondary/20'>
        <div className='mx-auto max-w-7xl'>
          <div className='text-center space-y-6'>
            <p className='text-sm font-semibold text-primary uppercase tracking-wide'>
              Trusted by Web3 Users
            </p>
            <p className='text-lg max-w-2xl mx-auto'>
              Non-custodial access. Read-only permissions. Your keys, your
              control.
            </p>
            <div className='flex flex-wrap gap-4 justify-center text-sm text-foreground/60'>
              <span className='flex items-center gap-2'>
                <Lock className='w-4 h-4' /> No Private Keys Stored
              </span>
              <span className='flex items-center gap-2'>
                <Eye className='w-4 h-4' /> Read-Only Access
              </span>
              <span className='flex items-center gap-2'>
                <Shield className='w-4 h-4' /> Security First
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className='section-padding'>
        <div className='section-container'>
          <div className='text-center mb-20 space-y-6'>
            <p className='text-sm font-semibold text-primary uppercase tracking-widest'>
              Complete Toolkit
            </p>
            <h2 className='text-foreground max-w-4xl mx-auto'>
              Everything you need for Web3 clarity
            </h2>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              Powerful features designed to give you complete control and
              understanding of your on-chain portfolio
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              {
                icon: <BarChart3 className='w-8 h-8' />,
                title: 'Multi-Chain Tracking',
                desc: 'See all your assets across 25+ blockchains in one unified dashboard',
              },
              {
                icon: <Eye className='w-8 h-8' />,
                title: 'Transaction Clarity',
                desc: 'Understand every transaction explained in clear, plain language',
              },
              {
                icon: <TrendingUp className='w-8 h-8' />,
                title: 'Portfolio Analytics',
                desc: 'Deep insights into your holdings, performance, and allocation',
              },
              {
                icon: <Zap className='w-8 h-8' />,
                title: 'Gas Optimization',
                desc: 'Reduce fees with intelligent spending recommendations',
              },
              {
                icon: <Shield className='w-8 h-8' />,
                title: 'Wallet Health',
                desc: 'Security scoring and risk assessment for your portfolio',
              },
              {
                icon: <Layers className='w-8 h-8' />,
                title: 'Activity Timeline',
                desc: 'Complete history with advanced filtering by protocol and token',
              },
            ].map((item, i) => (
              <div
                key={i}
                className='group bg-card border border-muted hover:border-primary/50 rounded-2xl p-8 space-y-5 transition-all duration-300 hover:bg-card/80'
              >
                <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform'>
                  {item.icon}
                </div>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>
                    {item.title}
                  </h3>
                  <p className='text-muted-foreground text-sm leading-relaxed'>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive 1 */}
      <section className='section-padding bg-card/30 border-y border-muted'>
        <div className='section-container'>
          <div className='grid lg:grid-cols-2 gap-20 items-center'>
            <div className='space-y-8'>
              <div className='space-y-3'>
                <p className='text-sm font-semibold text-primary uppercase tracking-widest'>
                  On-Chain Intelligence
                </p>
                <h2 className='text-foreground'>
                  Understand your Web3 footprint
                </h2>
              </div>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                Every transaction tells a story. WalletWise breaks down complex
                interactions into clear narratives so you know exactly what you
                own, what you've traded, and what you're exposed to.
              </p>
              <ul className='space-y-4'>
                {[
                  'See the full context of every transaction',
                  'Track your entry and exit prices',
                  'Identify dormant holdings',
                ].map((item, i) => (
                  <li key={i} className='flex gap-4'>
                    <Check className='w-6 h-6 text-primary flex-shrink-0' />
                    <span className='text-foreground'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className='hidden lg:block'>
              <div className='relative h-96 rounded-3xl overflow-hidden border border-muted hover:border-primary/40 transition-colors'>
                <Image
                  src='/dashboard-hero.jpg'
                  alt='On-Chain Analytics'
                  fill
                  className='object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive 2 */}
      <section className='section-padding'>
        <div className='section-container'>
          <div className='grid lg:grid-cols-2 gap-20 items-center'>
            <div className='hidden lg:block order-2 lg:order-1'>
              <div className='relative h-96 rounded-3xl overflow-hidden border border-muted hover:border-primary/40 transition-colors'>
                <Image
                  src='/dashboard-hero.jpg'
                  alt='Smart Decisions'
                  fill
                  className='object-cover'
                />
              </div>
            </div>
            <div className='space-y-8 order-1 lg:order-2'>
              <div className='space-y-3'>
                <p className='text-sm font-semibold text-primary uppercase tracking-widest'>
                  Data Intelligence
                </p>
                <h2 className='text-foreground'>Make smarter decisions</h2>
              </div>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                Data without context is noise. We transform your on-chain
                activity into actionable intelligence—showing you trends,
                patterns, and opportunities aligned with your Web3 goals.
              </p>
              <ul className='space-y-4'>
                {[
                  'Identify most profitable protocols',
                  'Understand your trading patterns',
                  'Get alerts on balance changes',
                ].map((item, i) => (
                  <li key={i} className='flex gap-4'>
                    <Check className='w-6 h-6 text-primary flex-shrink-0' />
                    <span className='text-foreground'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive 3 */}
      <section className='section-padding bg-card/30 border-y border-muted'>
        <div className='section-container'>
          <div className='grid lg:grid-cols-2 gap-20 items-center'>
            <div className='space-y-8'>
              <div className='space-y-3'>
                <p className='text-sm font-semibold text-primary uppercase tracking-widest'>
                  Security & Control
                </p>
                <h2 className='text-foreground'>
                  Your keys. Your data. Always.
                </h2>
              </div>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                Non-custodial. Read-only. End-to-end encrypted. WalletWise is
                built on the principle that you maintain complete ownership and
                control of your assets and data at all times.
              </p>
              <ul className='space-y-4'>
                {[
                  'Connect any Web3 wallet securely',
                  'Zero private key exposure risk',
                  'Data encrypted end-to-end',
                ].map((item, i) => (
                  <li key={i} className='flex gap-4'>
                    <Check className='w-6 h-6 text-primary flex-shrink-0' />
                    <span className='text-foreground'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className='hidden lg:block'>
              <div className='relative h-96 rounded-3xl overflow-hidden border border-muted hover:border-primary/40 transition-colors'>
                <Image
                  src='/security-hero.jpg'
                  alt='Security & Control'
                  fill
                  className='object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className='section-padding'>
        <div className='section-container'>
          <div className='text-center mb-20 space-y-6'>
            <p className='text-sm font-semibold text-primary uppercase tracking-widest'>
              Simple & Secure
            </p>
            <h2 className='text-foreground max-w-3xl mx-auto'>
              Three simple steps to clarity
            </h2>
          </div>

          <div className='grid md:grid-cols-3 gap-12'>
            {[
              {
                num: '01',
                title: 'Connect Your Wallet',
                desc: 'Link any Web3 wallet securely through WalletConnect or your provider. No private keys required.',
              },
              {
                num: '02',
                title: 'Automatic Analysis',
                desc: 'WalletWise indexes your transactions and balances across all supported chains in seconds.',
              },
              {
                num: '03',
                title: 'Get Clarity',
                desc: 'Explore your complete portfolio and make informed decisions about your next Web3 move.',
              },
            ].map((item, i) => (
              <div key={i} className='space-y-6'>
                <p className='text-7xl font-bold text-primary/20'>{item.num}</p>
                <div className='space-y-3'>
                  <h3 className='text-xl font-bold text-foreground'>
                    {item.title}
                  </h3>
                  <p className='text-muted-foreground leading-relaxed'>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='section-padding bg-card/50 border-y border-muted'>
        <div className='section-container max-w-3xl mx-auto text-center space-y-10'>
          <div className='space-y-5'>
            <h2 className='text-foreground'>Ready to understand your Web3?</h2>
            <p className='text-xl text-muted-foreground leading-relaxed'>
              Join thousands of users getting clarity on their on-chain
              portfolio. Early access members get lifetime premium features.
            </p>
          </div>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/connect' className='w-full sm:w-auto'>
              <Button
                size='lg'
                className='w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg gap-2 h-12 px-8'
              >
                Connect Wallet
                <ArrowRight className='w-5 h-5' />
              </Button>
            </Link>
            <Button
              size='lg'
              variant='outline'
              className='w-full sm:w-auto border-muted hover:bg-muted/40 text-foreground font-semibold rounded-lg h-12 px-8 bg-transparent'
            >
              Join Waitlist
            </Button>
          </div>

          <p className='text-sm text-muted-foreground'>
            Limited early access slots available — join while spaces remain
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
