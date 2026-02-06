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
                Web3 Pre-Launch Access
              </span>
            </div>
            <h1 className='text-5xl sm:text-6xl font-bold tracking-tight text-pretty'>
              Connect Your Wallet. Stay Updated.
            </h1>
            <p className='text-xl text-foreground/70 max-w-2xl mx-auto text-pretty'>
              Connect your wallet to preview supported networks and stay informed about WalletWise updates. Read-only, secure, no transactions.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center pt-4'>
              <Button
                size='lg'
                className='bg-primary hover:bg-primary/90 text-primary-foreground group'
                asChild
              >
                <Link href='/connect' className='flex items-center gap-2'>
                  Connect Wallet{' '}
                  <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition' />
                </Link>
              </Button>
              <Button size='lg' variant='outline'>
                How It Works
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
              Security & Privacy First
            </p>
            <p className='text-lg max-w-2xl mx-auto'>
              Read-only wallet connection. No private keys stored. Your data, your control.
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
              Future Ready
            </p>
            <h2 className='text-foreground max-w-4xl mx-auto'>
              Prepare for the Web3 future
            </h2>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              A preview of what's coming. Stay informed about network support and upcoming features.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              {
                icon: <BarChart3 className='w-8 h-8' />,
                title: 'Multi-Chain Preview',
                desc: 'See supported blockchains and prepare your wallet for cross-chain readiness',
              },
              {
                icon: <Eye className='w-8 h-8' />,
                title: 'Network Compatibility',
                desc: 'Learn which networks WalletWise will support at launch and beyond',
              },
              {
                icon: <TrendingUp className='w-8 h-8' />,
                title: 'Early Interest',
                desc: 'Join early access members to stay informed about new features',
              },
              {
                icon: <Zap className='w-8 h-8' />,
                title: 'Quick Setup',
                desc: 'Connect your wallet in seconds—no transactions or commitments',
              },
              {
                icon: <Shield className='w-8 h-8' />,
                title: 'Secure Connection',
                desc: 'Read-only access means complete safety and privacy',
              },
              {
                icon: <Layers className='w-8 h-8' />,
                title: 'Future Access',
                desc: 'Prepare your wallet now for exclusive early access benefits',
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
                  Network Preview
                </p>
                <h2 className='text-foreground'>
                  Preview upcoming features
                </h2>
              </div>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                See which blockchain networks WalletWise will support. Connect now to stay updated as we add new networks and prepare for full platform launch.
              </p>
              <ul className='space-y-4'>
                {[
                  'Preview 30+ supported blockchains',
                  'Stay informed about new network additions',
                  'Prepare your wallet for future features',
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
                  Early Access Benefits
                </p>
                <h2 className='text-foreground'>Join the early community</h2>
              </div>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                Connect your wallet to get early access updates. As a founding member, you'll be among the first to experience new features and shape the future of WalletWise.
              </p>
              <ul className='space-y-4'>
                {[
                  'Exclusive founding member status',
                  'First access to new features',
                  'Direct input on development roadmap',
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
                  Safety & Trust
                </p>
                <h2 className='text-foreground'>
                  Your wallet. Your control. Always.
                </h2>
              </div>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                Read-only wallet connection. WalletWise never accesses private keys, initiates transactions, or stores sensitive data. Your security is our priority.
              </p>
              <ul className='space-y-4'>
                {[
                  'Connect any Web3 wallet with zero risk',
                  'Private keys never exposed to WalletWise',
                  'No transactions or transfers initiated',
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
              Three steps to get started
            </h2>
          </div>

          <div className='grid md:grid-cols-3 gap-12'>
            {[
              {
                num: '01',
                title: 'Connect Your Wallet',
                desc: 'Link any Web3 wallet securely. WalletWise is read-only—no transactions will occur.',
              },
              {
                num: '02',
                title: 'Preview Networks',
                desc: 'See all 30+ supported blockchains and stay informed about upcoming network additions.',
              },
              {
                num: '03',
                title: 'Stay Updated',
                desc: 'Get early access updates and be among the first to experience new WalletWise features.',
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
            <h2 className='text-foreground'>Ready to stay updated?</h2>
            <p className='text-xl text-muted-foreground leading-relaxed'>
              Connect your wallet today to receive early access updates and shape the future of WalletWise. No commitments, no transactions—just early access information.
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
              Learn More
            </Button>
          </div>

          <p className='text-sm text-muted-foreground'>
            Early access is limited. Connect now to secure your spot.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
