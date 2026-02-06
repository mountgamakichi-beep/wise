'use client';

import { CheckCircle2 } from 'lucide-react';

const NETWORKS = [
  'Ethereum',
  'Polygon',
  'Arbitrum',
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
];

export function NetworksList() {
  return (
    <section className="section-padding bg-card/30">
      <div className="section-container">
        <h2 className="text-3xl font-bold mb-4 text-foreground">
          Blockchain Networks Supported
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Preview the 30+ blockchain networks where WalletWise will operate at launch. More networks coming soon.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {NETWORKS.map((network) => (
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
  );
}
