'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { PageHeader } from '@/components/page-header';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const articles = [
    {
      id: 1,
      title: 'Understanding Gas Fees: A Complete Guide',
      excerpt: 'Gas fees are a crucial part of blockchain transactions. Learn how they work, why they vary, and how to optimize your spending.',
      author: 'Alex Chen',
      date: 'January 28, 2025',
      category: 'Guide',
      readTime: '8 min',
      icon: '📚',
    },
    {
      id: 2,
      title: 'Web3 Security Best Practices for 2025',
      excerpt: 'Keep your crypto assets safe with these essential security practices. From wallet management to transaction verification.',
      author: 'Sarah Williams',
      date: 'January 25, 2025',
      category: 'Security',
      readTime: '12 min',
      icon: '🔒',
    },
    {
      id: 3,
      title: 'DeFi Explained: From Basics to Advanced Strategies',
      excerpt: 'Decentralized Finance is revolutionizing how we think about money. Explore the fundamentals and emerging opportunities.',
      author: 'Jordan Blake',
      date: 'January 22, 2025',
      category: 'DeFi',
      readTime: '15 min',
      icon: '💰',
    },
    {
      id: 4,
      title: 'Multi-Chain Portfolio Management Tips',
      excerpt: 'Managing assets across multiple blockchains? Here\'s how to optimize your portfolio and reduce complexity.',
      author: 'Alex Chen',
      date: 'January 20, 2025',
      category: 'Guide',
      readTime: '10 min',
      icon: '🔗',
    },
    {
      id: 5,
      title: 'NFT Valuation and Market Trends',
      excerpt: 'Understanding NFT valuations can be complex. We break down the key factors that drive value in the NFT market.',
      author: 'Maya Patel',
      date: 'January 18, 2025',
      category: 'NFT',
      readTime: '9 min',
      icon: '🎨',
    },
    {
      id: 6,
      title: 'Blockchain Technology Explained',
      excerpt: 'New to blockchain? This comprehensive guide covers everything from basic concepts to advanced applications.',
      author: 'David Kim',
      date: 'January 15, 2025',
      category: 'Technology',
      readTime: '20 min',
      icon: '⛓️',
    },
  ];

  const categories = ['All', 'Guide', 'Security', 'DeFi', 'NFT', 'Technology'];

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = !selectedCategory || selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navigation />
      <PageHeader
        title="WalletWise Blog"
        subtitle="Insights, guides, and tutorials for navigating Web3 with confidence."
        badge="Educational"
      />

      {/* Search & Filter Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="space-y-6 mb-12">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-primary/20 bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat === 'All' ? null : cat)}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                    (!selectedCategory && cat === 'All') || selectedCategory === cat
                      ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground'
                      : 'bg-card border border-primary/20 text-foreground hover:border-primary/40'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <Link key={article.id} href={`/blog/${article.id}`}>
                <div className="card-glow p-6 h-full flex flex-col cursor-pointer hover:scale-105 transition-transform">
                  <div className="text-4xl mb-4">{article.icon}</div>
                  <h3 className="text-lg font-bold text-foreground mb-3 leading-snug line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="space-y-4 pt-4 border-t border-primary/10">
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="h-3 w-3" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                        {article.readTime} read
                      </span>
                      <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No articles found matching your search.</p>
              <Button
                variant="outline"
                className="border-primary/30 bg-transparent"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory(null);
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-card/30">
        <div className="section-container max-w-2xl mx-auto">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-black text-foreground">Stay Updated</h2>
            <p className="text-muted-foreground">Get the latest Web3 insights and WalletWise updates delivered to your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-primary/20 bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
              />
              <Button className="gradient-button">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card/50 border-y border-border/50">
        <div className="section-container text-center space-y-8">
          <div className="space-y-4">
            <h2 className="gradient-text">Ready to Apply These Insights?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect your wallet and start optimizing your Web3 portfolio with WalletWise.
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
