import Link from 'next/link';
import { games, pubgKoreanProducts } from '@/lib/data';

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const game = games.find((item) => item.slug === slug);
  if (!game) {
    return <section className="simple-page"><div className="container simple-card"><span className="section-kicker">BIRIQ STORE</span><h1>Game Not Found</h1><p>The game you requested does not exist.</p><Link href="/" className="btn primary">Back Home</Link></div></section>;
  }
  const products = slug === 'pubg-korean' ? pubgKoreanProducts : [['Small Pack', 2], ['Medium Pack', 5], ['Large Pack', 10], ['Mega Pack', 20]] as const;
  return <section className="category-page"><div className="container">
    <Link href="/" className="back">← Back to games</Link>
    <div className="category-hero"><div className="big-game-icon">{game.icon}</div><div><span className="section-kicker">{game.mode}</span><h1>{game.name}</h1><p>{game.description}</p></div></div>
    <div className="order-panel"><label htmlFor="player-id">Player ID</label><input id="player-id" placeholder="Enter your Player ID" /><small>Your ID is used only to process the top-up.</small></div>
    <div className="products"><h2>Select Package</h2><div className="product-grid">{products.map(([name, price]) => <div className="product" key={name}><b>{name}</b><small>Gaming top-up</small><strong>${Number(price).toFixed(2)}</strong><button type="button">Buy</button></div>)}</div></div>
  </div></section>;
}
