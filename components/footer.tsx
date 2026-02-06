'use client';

import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: 'Features', href: '/features' },
      { label: 'Security', href: '/security' },
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Connect', href: '/connect' },
    ],
    Resources: [
      { label: 'Blog', href: '/blog' },
      { label: 'Documentation', href: '/docs' },
      { label: 'Support', href: '#' },
      { label: 'Contact', href: '#' },
    ],
    Company: [
      { label: 'About', href: '#' },
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Disclaimer', href: '#' },
    ],
    Social: [
      { label: 'Twitter', href: '#', icon: '𝕏' },
      { label: 'Discord', href: '#', icon: '💬' },
      { label: 'GitHub', href: '#', icon: '🐙' },
    ],
  };

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="section-container">
        <div className="py-16">
          <div className="grid gap-12 md:grid-cols-5 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center font-bold text-sm text-primary-foreground">
                  ◆
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  WalletWise
                </span>
              </Link>
              <p className="mt-4 text-sm text-muted-foreground">
                Transform your on-chain activity into clarity and actionable insights.
              </p>
              <p className="mt-6 text-xs text-muted-foreground">
                Non-custodial. Read-only. Your keys, your data, always.
              </p>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links]) => {
              if (category === 'Social') return null;
              return (
                <div key={category}>
                  <h3 className="text-sm font-bold text-foreground uppercase tracking-wide">
                    {category}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-sm nav-link"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}

            {/* Social Links */}
            <div>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wide">Social</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.Social.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-2 text-sm nav-link"
                    >
                      <span>{link.icon}</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-border/50 pt-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="text-xs text-muted-foreground">
                © {currentYear} WalletWise. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground">
                WalletWise is not a financial advisor. We provide tools for tracking and understanding your on-chain activity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
