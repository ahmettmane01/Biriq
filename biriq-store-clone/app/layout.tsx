import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export const metadata: Metadata={title:'Biriq Store — Gaming Top-Up',description:'Fast, secure and reliable gaming top-ups for Somalia.'};
export default function RootLayout({children}:{children:ReactNode}){return <html lang="en"><body><Header/><main>{children}</main><Footer/></body></html>}
