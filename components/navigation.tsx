'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/features', label: 'Features' },
    { href: '/security', label: 'Security' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/blog', label: 'Blog' },
    { href: '/docs', label: 'Docs' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-muted bg-background/70 backdrop-blur-xl">
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-bold text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/50 transition-all">
              W
            </div>
            <span className="text-lg font-bold text-foreground hidden sm:inline tracking-tight">WalletWise</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
              <Link href="/connect">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg h-10 px-6">
                Connect Wallet
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center rounded-lg border border-muted bg-card hover:bg-muted p-2 text-foreground transition-colors"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t border-muted pb-6 md:hidden">
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-muted-foreground hover:text-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
              <Link href="/connect" className="pt-4">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg h-10">
                  Connect Wallet
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
