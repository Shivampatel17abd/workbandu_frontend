import React from 'react'; // 1. Fixes "React is not defined"
import './globals.css';
import Navbar from '../components/Navbar'; // 2. Fixes "Module not found" (uses relative path)

export const metadata = {
  title: 'JobBandhu',
  description: 'Job Portal',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> 
        <main className="pt-16"> 
          {children}
        </main>
      </body>
    </html>
  );
}