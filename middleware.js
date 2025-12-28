import { NextResponse } from 'next/server';

export function middleware(request) {
  // ATURAN FIREWALL:
  // Jika URL diawali dengan "/admin", maka BLOKIR.
  if (request.nextUrl.pathname.startsWith('/admin')) {
    return new NextResponse(
      JSON.stringify({ 
        success: false, 
        message: 'AKSES DITOLAK: Firewall mendeteksi aktivitas mencurigakan ke area Admin.' 
      }),
      { status: 403, headers: { 'content-type': 'application/json' } }
    );
  }
}