import React, { FC } from 'react';
import { MobileNav } from './MobileNav';
import { DesktopNav } from './DesktopNav';

type NavbarProps = {
  desktopNav: any;
  mobileNav: any;
};

const Navbar: FC<NavbarProps> = ({ desktopNav, mobileNav }) => {
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

export default Navbar;
