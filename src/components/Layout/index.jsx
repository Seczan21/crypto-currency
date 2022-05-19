import React from 'react';
import Navbar from '../Navbar/index';

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
