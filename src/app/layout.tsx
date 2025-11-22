import React from 'react';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; // <--- 1. Import the Footer

export const metadata = {
  title: 'JobBandhu',
  description: 'Job Portal',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Added bg-black to body to ensure full dark theme */}
      <body className="bg-black"> 
        <Navbar />
        
        {/* Added min-h-screen to push footer to bottom */}
        <main className="pt-16 min-h-screen"> 
          {children}
        </main>
        
        <Footer /> {/* <--- 2. Add the Footer Component here */}
      </body>
    </html>
  );
}