'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  FileText,
  Code,
  Book,
  Shield,
  Zap,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { PageHeader } from '@/components/page-header';

export default function DocsPage() {
  const docSections = [
    {
      icon: <Book />,
      title: 'Getting Started',
      description: 'Learn the basics of WalletWise and get up and running quickly',
      items: [
        'Introduction to WalletWise',
        'Creating Your First Connection',
        'Understanding the Dashboard',
        'Navigation Guide',
      ],
    },
    {
      icon: <Code />,
      title: 'API Reference',
      description: 'Comprehensive API documentation for developers',
      items: [
        'Authentication',
        'Wallet Endpoints',
        'Transaction Endpoints',
        'Portfolio Endpoints',
        'Error Handling',
      ],
    },
    {
      icon: <Shield />,
      title: 'Security & Privacy',
      description: 'Everything you need to know about our security practices',
      items: [
        'Security Architecture',
        'Data Encryption',
        'Privacy Policy',
        'Responsible Disclosure',
        'Audit Reports',
      ],
    },
    {
      icon: <Zap />,
      title: 'Advanced Features',
      description: 'Master advanced features and optimization techniques',
      items: [
        'Portfolio Analysis',
        'Multi-Chain Queries',
        'Custom Alerts',
        'Data Export',
        'Webhooks',
      ],
    },
  ];

  const faqs = [
    {
      question: 'What is WalletWise?',
      answer: 'WalletWise is a non-custodial Web3 wallet companion that provides clarity on your on-chain activity. It helps you understand transactions, track portfolios across multiple blockchains, and optimize your crypto holdings.',
    },
    {
      question: 'Which wallets are supported?',
      answer: 'WalletWise supports MetaMask, Trust Wallet, Ledger Live, Coinbase Wallet, Rainbow, Frame, WalletConnect, and Gnosis Safe. Any wallet compatible with WalletConnect protocol can be used.',
    },
    {
      question: 'Is WalletWise open source?',
      answer: 'Yes, WalletWise is open source and audited by leading security firms. You can review our code on GitHub and see our full audit reports.',
    },
    {
      question: 'How much does it cost?',
      answer: 'WalletWise offers a free tier with basic features and premium plans for advanced analytics and data exports. Check our pricing page for details.',
    },
    {
      question: 'Can I use WalletWise on mobile?',
      answer: 'Yes, WalletWise is fully responsive and works on mobile devices. Download our mobile app or use the web version in your mobile browser.',
    },
    {
      question: 'How do I report a security issue?',
      answer: 'Please follow our responsible disclosure policy. Email security@walletwise.dev with details of the issue. Do not disclose publicly until we have resolved the issue.',
    },
  ];

  const quickLinks = [
    { title: 'Connect a Wallet', href: '/connect', icon: '🔗' },
    { title: 'View Features', href: '/features', icon: '⚡' },
    { title: 'Security Info', href: '/security', icon: '🔒' },
    { title: 'Read Blog', href: '/blog', icon: '📚' },
  ];

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navigation />
      <PageHeader
        title="Documentation"
        subtitle="Comprehensive guides, API reference, and resources for getting the most out of WalletWise."
        badge="Developer Hub"
      />

      {/* Quick Links */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link, i) => (
              <Link key={i} href={link.href}>
                <div className="card-glow p-6 text-center cursor-pointer hover:scale-105 transition-transform h-full">
                  <div className="text-4xl mb-3">{link.icon}</div>
                  <h3 className="font-bold text-foreground mb-2">{link.title}</h3>
                  <ChevronRight className="h-4 w-4 text-primary mx-auto mt-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="section-padding bg-card/30">
        <div className="section-container">
          <div className="mb-12">
            <h2 className="text-3xl font-black mb-4 text-foreground">Documentation Sections</h2>
            <p className="text-muted-foreground max-w-2xl">Everything you need to know about using and integrating WalletWise.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {docSections.map((section, i) => (
              <div key={i} className="card-glow p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl text-primary">{section.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{section.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{section.description}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-foreground">
                      <ChevronRight className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full gradient-button text-sm">
                  View Docs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="section-padding">
        <div className="section-container">
          <div className="mb-12">
            <h2 className="text-3xl font-black mb-4 text-foreground">Code Examples</h2>
            <p className="text-muted-foreground max-w-2xl">Get started with WalletWise SDK in minutes.</p>
          </div>

          <div className="card-glow p-8 space-y-6">
            <div>
              <h3 className="font-bold text-foreground mb-4">JavaScript/TypeScript</h3>
              <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto text-sm text-primary font-mono">
                <code>{`import { WalletWise } from '@walletwise/sdk';

const walletwise = new WalletWise({
  apiKey: 'your-api-key'
});

// Get wallet balance
const balance = await walletwise.getBalance({
  address: '0x...',
  chainId: 1
});

console.log(balance);`}</code>
              </pre>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-4">Python</h3>
              <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto text-sm text-primary font-mono">
                <code>{`from walletwise import WalletWise

ww = WalletWise(api_key='your-api-key')

# Get wallet transactions
txs = ww.get_transactions(
    address='0x...',
    chain_id=1
)

print(txs)`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-card/30">
        <div className="section-container max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-black mb-4 text-foreground">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Find answers to common questions about WalletWise.</p>
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

      {/* Support Section */}
      <section className="section-padding">
        <div className="section-container max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4 text-foreground">Need Help?</h2>
          <p className="text-muted-foreground mb-8">
            Our team is here to help. Check out our resources or reach out directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="gradient-button">
              Contact Support
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-primary/30 bg-transparent">
              Join Community
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card/50 border-y border-border/50">
        <div className="section-container text-center space-y-8">
          <div className="space-y-4">
            <h2 className="gradient-text">Ready to Build with WalletWise?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get API access and start integrating Web3 insights into your application.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-button">
              Get API Access
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/connect">
              <Button size="lg" variant="outline" className="border-primary/30 bg-transparent">
                Try WalletWise
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
