import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'antd/dist/reset.css';
import Headers from '@/components/sheared/Headers';
import { Sidebar } from '@/components/sheared/Sidebar';


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Admin dashboard application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="min-h-screen flex">
          <Sidebar />
          <div className="flex-1 pl-16">
            <Headers />
            <main className="bg-gray-50 min-h-[calc(100vh-4rem)]">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
