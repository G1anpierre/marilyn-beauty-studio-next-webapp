import React, { FC } from 'react';
import { Navbar } from './Navbar';

type LayoutProps = {
  children: React.ReactNode;
  navbar: any;
};

export const Layout = ({ children, navbar }: LayoutProps) => {
  const { desktopNav, mobileNav } = navbar;

  return (
    <div>
      <Navbar desktopNav={desktopNav} mobileNav={mobileNav} />
      {children}
    </div>
  );
};
