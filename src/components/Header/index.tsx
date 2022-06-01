import React from 'react';
import HeaderContent from './HeaderContent';
import HeaderTop from './HeaderTop';

export default function Header() {
  return (
    <header className="header">
      <HeaderTop/>
      <HeaderContent/>
    </header>
  );
}
