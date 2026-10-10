'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ShoppingCart, UserRound, ChevronDown } from './icons';

export default function Header(){
 const [open,setOpen]=useState(false);
 return <header className="header"><div className="container nav">
  <Link href="/" className="brand"><span className="brand-mark">B</span><span>Biriq<span>Store</span></span></Link>
  <nav className={open?'nav-links open':'nav-links'}>
   <Link href="/">Home</Link><Link href="/orders">Orders</Link><Link href="/code-checker">Code Checker</Link><Link href="/cashback">Cashback</Link><Link href="/leaderboard">Leaderboard</Link><Link href="/faq">FAQ</Link>
  </nav>
  <div className="nav-actions"><Link className="icon-btn" href="/profile" aria-label="Profile"><UserRound size={18}/></Link><Link className="cart-btn" href="/cart"><ShoppingCart size={18}/><span>0</span></Link><button className="menu-btn" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div>
 </div></header>
}
