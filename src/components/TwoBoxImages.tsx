import React from 'react';
import { OneBoxImageOfTwoBoxes } from './OneBoxImageOfTwoBoxes';

export const TwoBoxImages = () => {
  return (
    <>
      <div className="twobox-images-container">
        <OneBoxImageOfTwoBoxes />
        <OneBoxImageOfTwoBoxes />
      </div>
      <style jsx>{`
        .twobox-images-container {
          display: grid;
          gap: 1rem;
        }

        @media (min-width: 768px) {
          .twobox-images-container {
            grid-auto-flow: column;
          }
        }
      `}</style>
    </>
  );
};
