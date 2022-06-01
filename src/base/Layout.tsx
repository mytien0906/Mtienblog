import React from 'react';
import Footer from '../components/Footer';
import Head from './Head';

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  const { children } = props;
  return (
    <div>
      <Head />
      {children}
      <Footer/>
    </div>
  );
}
