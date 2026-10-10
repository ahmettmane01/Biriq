import Link from 'next/link';
export default function AdminLayout({children}:{children:React.ReactNode}){
 return <div className="admin-shell"><aside><strong>Biriq Admin</strong><nav>{['','orders','products','users','payments','cashback','codes','support','settings'].map(x=><Link key={x} href={'/admin'+(x?'/'+x:'')}>{x||'Dashboard'}</Link>)}</nav></aside><main>{children}</main></div>
}
