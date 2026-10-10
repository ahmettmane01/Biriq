import Link from 'next/link';
import { ArrowRight } from './icons';
export default function GameCard({game}:{game:any}){return <Link href={`/category/${game.slug}`} className="game-card"><div className={`game-art ${game.accent}`}><span>{game.icon}</span><b>{game.mode}</b></div><div className="game-info"><div><strong>{game.name}</strong><small>{game.description}</small></div><span className="round-arrow"><ArrowRight size={16}/></span></div></Link>}
