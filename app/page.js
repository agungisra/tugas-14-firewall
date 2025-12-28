export default function Home() {
    return (
      <div style={{ padding: '50px', fontFamily: 'sans-serif' }}>
        <h1>Halaman Publik</h1>
        <p>Halaman ini aman dan bisa diakses siapa saja.</p>
        <p>Coba akses <a href="/admin">/admin</a> untuk melihat firewall bekerja.</p>
      </div>
    );
  }