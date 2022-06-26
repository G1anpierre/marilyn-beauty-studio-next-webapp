import React, { FC } from 'react';
import { SubsectionType } from './DesktopNav';
import Link from 'next/link';

type SubsectionsProps = {
  subsections: SubsectionType[];
};

export const Subsections: FC<SubsectionsProps> = ({ subsections }) => {
  return (
    <>
      <ul className="subsections">
        {subsections.map((subsection) => (
          <li className="subsection-group">
            <h3 className="subsection-title">{subsection.name}</h3>
            {subsection.value.items.map((item) => (
              <Link className="subsection-name-link" href={''}>
                <a className="">{item.name}</a>
              </Link>
            ))}
          </li>
        ))}
      </ul>
      <style jsx>{`
        .subsections {
          margin: 0;
          padding: 30px;
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 45px;
          background-color: var(--white);
          border: 0.0625rem solid #d6d6d6;
          border-radius: 0.25rem;
        }

        .subsection-group {
          display: grid;
          gap: 16px;
        }
      `}</style>
    </>
  );
};
