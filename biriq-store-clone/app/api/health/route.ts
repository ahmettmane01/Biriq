import { NextResponse } from 'next/server';
export async function GET(){return NextResponse.json({ok:true,service:'biriq-store',timestamp:new Date().toISOString()});}
