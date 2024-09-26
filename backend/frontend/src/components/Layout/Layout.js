import React from 'react';
import Head from 'next/head'
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Test-Page</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
