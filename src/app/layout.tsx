import React from 'react';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'JobBandhu',
  description: 'Job Portal',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* UPDATED BACKGROUND:
         - from-blue-100: Matches the top left
         - via-purple-100: The middle transition
         - to-pink-100: Matches the bottom right
         - text-slate-800: Dark text for readability on light background
      */}
      <body className="min-h-screen bg-gradient-to-br from-[#dbeafe] via-[#f3e8ff] to-[#fce7f3] text-slate-800 selection:bg-purple-300 selection:text-purple-900">
        
        <Navbar />
        
        <main className="pt-24 min-h-screen"> 
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}