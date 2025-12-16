import Link from 'next/link';

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: 72, marginBottom: 8 }}>404</h1>
      <p style={{ fontSize: 18, marginBottom: 24 }}>
        Trang bạn tìm kiếm không tồn tại
      </p>

      <Link
        href="/"
        style={{
          padding: '10px 20px',
          borderRadius: 8,
          background: '#3bb77e',
          color: '#fff',
          textDecoration: 'none',
        }}
      >
        Quay về trang chủ
      </Link>
    </main>
  );
}
