// app/ClientLayout.tsx
'use client';

import RouteLoader from '@/components/tools/RouteLoader';
import { Navbar } from '@/components/client/layer/navbar/navbar/navbar';
import Footer from '@/components/client/layer/footer/Footer';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <RouteLoader />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
