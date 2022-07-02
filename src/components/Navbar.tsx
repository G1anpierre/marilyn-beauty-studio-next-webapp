import React, { FC } from 'react';
import { MobileNav } from './MobileNav';
import { DesktopNav, DesktopNavProps } from './DesktopNav';

export type NavbarProps = {
  desktopNav: DesktopNavProps;
  mobileNav: any;
};

export const Navbar: FC<NavbarProps> = ({ desktopNav, mobileNav }) => {
  return (
    <>
      <div className="container">
        <MobileNav />
        <DesktopNav sections={desktopNav.sections} />
      </div>
      <style jsx>
        {`
          .container {
            color: 'red';
            background-color: 'black';
          }
        `}
      </style>
    </>
  );
};
