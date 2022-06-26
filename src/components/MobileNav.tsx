import React from 'react';
import { MenuIcon } from './MenuIcon';
import { Button } from './Button';

export const MobileNav = () => {
  return (
    <>
      <nav className="mobile-nav">
        <div className="mobile-nav--left">
          <span className="logo-mobile">Logo</span>
          <span className="menu-icon-container">
            <MenuIcon />
          </span>
        </div>
        <span className="mobile-nav--right">
          <Button label="Bestil McDelivery" primary />
        </span>
      </nav>
      <style jsx>{`
        .mobile-nav {
          display: flex;
          justify-content: space-between;
          padding: 5px;
        }

        .mobile-nav--left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .menu-icon-container {
          cursor: pointer;
        }

        @media (min-width: 768px) {
          .mobile-nav {
            display: none;
          }
        }
      `}</style>
    </>
  );
};
