import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className=" min-h-screen flex flex-col">
      <Head>
        <title>Cleaning Services</title>
        <meta name="description" content="Professional cleaning services for your facilities and buildings" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      <Header />
      <main className="flex-grow flex justify-center items-center">
        <div className="w-full max-w-4xl px-4">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;