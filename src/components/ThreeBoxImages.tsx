import React from 'react';
import { OneBoxImageOfThreeBoxes } from './OneBoxImageOfThreeBoxes';

export const ThreeBoxImages = () => {
  return (
    <>
      <div className="threebox-images-container">
        <OneBoxImageOfThreeBoxes />
        <OneBoxImageOfThreeBoxes />
        <OneBoxImageOfThreeBoxes />
      </div>
      <style jsx>{`
        .threebox-images-container {
          display: grid;
          gap: 1rem;
        }

        @media (min-width: 768px) {
          .threebox-images-container {
            grid-auto-flow: column;
          }
        }
      `}</style>
    </>
  );
};
