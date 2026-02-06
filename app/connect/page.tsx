'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { PageHeader } from '@/components/page-header';
import { ArrowRight, CheckCircle2, Wallet, Shield, Lock, Briefcase, Zap, Box, Link2, LayoutGrid } from 'lucide-react';

export default function ConnectPage() {
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);

  const wallets = [
    {
      id: 'metamask',
      name: 'MetaMask',
      icon: Wallet,
      networks: ['Ethereum', 'Polygon', 'Arbitrum', 'Optimism', 'Base'],
    },
    {
      id: 'trustwallet',
      name: 'Trust Wallet',
      icon: Shield,
      networks: ['Ethereum', 'BSC', 'Polygon', 'Solana', 'Avalanche'],
    },
    {
      id: 'ledger',
      name: 'Ledger Live',
      icon: Lock,
      networks: ['Ethereum', 'Polygon', 'Arbitrum', 'Bitcoin', 'Solana'],
    },
    {
      id: 'coinbase',
      name: 'Coinbase Wallet',
      icon: Briefcase,
      networks: ['Ethereum', 'Polygon', 'Arbitrum', 'Optimism', 'Base'],
    },
    {
      id: 'rainbow',
      name: 'Rainbow',
      icon: Zap,
      networks: ['Ethereum', 'Polygon', 'Arbitrum', 'Optimism', 'Base'],
    },
    {
      id: 'frame',
      name: 'Frame',
      icon: Box,
      networks: ['Ethereum', 'Polygon', 'Arbitrum', 'Optimism'],
    },
    {
      id: 'walletconnect',
      name: 'WalletConnect',
      icon: Link2,
      networks: ['All Networks'],
    },
    {
      id: 'gnosissafe',
      name: 'Gnosis Safe',
      icon: LayoutGrid,
      networks: ['Ethereum', 'Polygon', 'Arbitrum', 'Optimism'],
    },
  ];

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navigation />
      <PageHeader
        title="Connect Your Wallet"
        subtitle="Choose your favorite wallet provider and connect securely to WalletWise. Non-custodial, read-only access."
        badge="Web3 Native"
      />

      {/* Hero Image Section */}
      <section className="py-12">
        <div className="section-container">
          <div className="relative h-96 rounded-3xl overflow-hidden border border-muted">
            <Image
              src="/wallet-hero.jpg"
              alt="Web3 Wallet Interface"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Wallet Selection Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Supported Wallets</h2>
            <p className="text-muted-foreground max-w-2xl">
              We support all major Web3 wallets. Select one to see supported blockchains.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {wallets.map((wallet) => {
              const Icon = wallet.icon;
              return (
                <button
                  key={wallet.id}
                  onClick={() =>
                    setSelectedWallet(selectedWallet === wallet.id ? null : wallet.id)
                  }
                  className={`card-glow p-6 text-center transition-all ${
                    selectedWallet === wallet.id
                      ? 'border-primary/60 bg-primary/10'
                      : 'border-primary/20'
                  }`}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{wallet.name}</h3>
                  {selectedWallet === wallet.id && (
                    <div className="mt-3 pt-3 border-t border-primary/20">
                      <p className="text-xs text-muted-foreground font-mono mb-2">
                        Networks:
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {wallet.networks.map((net) => (
                          <span
                            key={net}
                            className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full"
                          >
                            {net}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {selectedWallet && (
            <div className="card-glow p-8 text-center space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  Ready to Connect?
                </h3>
                <p className="text-muted-foreground">
                  Your connection is secure and read-only. We never access your private keys.
                </p>
              </div>
              <Button size="lg" className="gradient-button">
                Continue with{' '}
                {wallets.find((w) => w.id === selectedWallet)?.name}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Security Info Section */}
      <section className="section-padding bg-card/30">
        <div className="section-container">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Why These Wallets?</h2>
            <p className="text-muted-foreground max-w-2xl">
              We partner with industry-leading wallets that prioritize security and user control.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Industry Leading',
                description:
                  'All supported wallets are trusted by millions of users worldwide.',
              },
              {
                title: 'Security First',
                description:
                  'Each wallet maintains high security standards and regular audits.',
              },
              {
                title: 'Your Control',
                description:
                  'Non-custodial by design. You maintain full control of your assets.',
              },
            ].map((item, i) => (
              <div key={i} className="card-glow p-6">
                <CheckCircle2 className="text-primary mb-4 h-6 w-6" />
                <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Support Section */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Blockchain Networks Supported</h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            WalletWise supports 30+ blockchain networks, with support for more being added regularly.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Ethereum',
              'Polygon',
              'Arbitrum One',
              'Optimism',
              'Base',
              'Avalanche',
              'Binance Smart Chain',
              'Solana',
              'Fantom',
              'Gnosis Chain',
              'Celo',
              'zkSync Era',
              'StarkNet',
              'Linea',
              'Scroll',
              'Aurora',
              'Harmony',
              'Moonbeam',
              'Cronos',
              'Polygon zkEVM',
            ].map((network) => (
              <div
                key={network}
                className="card-glow px-6 py-4 flex items-center gap-3"
              >
                <CheckCircle2 className="text-primary h-5 w-5 flex-shrink-0" />
                <span className="text-foreground">{network}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-card/30">
        <div className="section-container max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-foreground text-center">
            Connection FAQs
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'Is my connection secure?',
                a: 'Yes. WalletWise uses read-only access with encrypted end-to-end communication. Your private keys are never shared.',
              },
              {
                q: 'Can I connect multiple wallets?',
                a: 'Yes, you can connect and track multiple wallets in your WalletWise dashboard simultaneously.',
              },
              {
                q: 'What if I disconnect my wallet?',
                a: 'You can disconnect anytime. Your historical data will be preserved for when you reconnect.',
              },
              {
                q: 'Do you store my wallet address?',
                a: 'We store encrypted wallet addresses only for your connected sessions. Your data is never shared with third parties.',
              },
            ].map((item, i) => (
              <div key={i} className="card-glow p-6">
                <h3 className="text-lg font-bold mb-3 text-foreground">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
