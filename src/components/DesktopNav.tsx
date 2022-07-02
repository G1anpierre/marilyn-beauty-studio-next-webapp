import React, { FC, useRef, useState } from 'react';
import { Button } from './Button';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { Subsections } from './Subsections';
import Link from 'next/link';

type ItemType = {
  name: string;
};

type ValueType = {
  title: string;
  items: ItemType[];
};

export type SubsectionType = {
  name: string;
  value: ValueType;
};

type SectionType = {
  title: string;
  subsections: SubsectionType[];
};

export type DesktopNavProps = {
  sections: SectionType[];
};

export const DesktopNav: FC<DesktopNavProps> = ({ sections }) => {
  const [sectionState, setSectionState] = useState('none');
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setSectionState('none'));

  const handleSection = (name: string) => {
    setSectionState(name);
  };

  const selectedSection = sections.find(
    (section) => section.title === sectionState
  );

  return (
    <>
      <div className="wrapper">
        <nav className="desktop-nav">
          <div className="logo-desktop">Logo</div>
          <div className="desktop-nav-top">
            <div className="desktop-nav-elements">
              <span>
                <Link href="/search">
                  <a className="search-link">Search</a>
                </Link>
              </span>
              <span>
                <Link href="/findMap">
                  <a className="find-link">Find Marilyn Beauty Studio</a>
                </Link>
              </span>
              <span>
                <Button label="Bestil McDelivery" primary />
              </span>
            </div>
          </div>
          <div className="desktop-nav-bottom">
            {sections.map((section, index) => (
              <div key={index}>
                <span
                  onClick={() => handleSection(section.title)}
                  className="section-title"
                >
                  {section.title}
                </span>
              </div>
            ))}
          </div>
        </nav>
      </div>
      <div className="line" />
      <div className="desktop-nav-subsections" ref={ref}>
        {selectedSection && (
          <Subsections subsections={selectedSection.subsections} />
        )}
      </div>
      <style jsx>{`
        .desktop-nav,
        .desktop-nav-subsections {
          display: none;
        }

        .search-link,
        .find-link {
          all: unset; /* no underline */
        }

        @media (min-width: 768px) {
          .desktop-nav {
            display: grid;
            grid-template-columns: minmax(auto, 200px) 1fr;
            grid-row-gap: 30px;
            grid-template-rows: repeat(2, 1fr);
            width: 100%;
          }

          .wrapper {
            max-width: 1200px;
            margin: auto;
          }

          .line {
            box-shadow: 0 0.0625rem 0.3125rem 1px rgb(0 0 0 / 7%);
          }

          .desktop-nav-subsections {
            display: block;
          }

          .logo-desktop {
            grid-row: 1 / -1;
            grid-column: 1 / 2;
            background: grey;
          }

          .desktop-nav-top {
            display: grid;
            justify-content: flex-end;
          }

          .desktop-nav-elements {
            display: flex;
            align-items: center;
            gap: 20px;
          }

          .desktop-nav-bottom {
            grid-column: 2 / -1;
            grid-row: 2 / -1;
            display: grid;
            grid-auto-flow: column;
          }

          .section-title {
            cursor: pointer;
          }

          .desktop-nav-subsections {
          }
        }
      `}</style>
    </>
  );
};
