import React from 'react';

export const TwoItemsLayout = () => {
  return (
    <>
      <figure className="two-items-layout">
        <picture>
          <img
            src="../assets/blue-bg.svg"
            width="1920"
            height="1080"
            alt="Blue soft landscape"
            className="two-items-layout-image"
          />
        </picture>
        <figcaption>
          <h2 className="two-items-layout-title">McDonald's App</h2>
          <p className="two-items-layout-description">
            Se de seneste nyheder, få adgang til rabatter og bestil og betal din
            mad i McDonald’s app'en.
          </p>
          <div className="two-items-layout-button-container"></div>
        </figcaption>
      </figure>
      <style jsx>{`
        .two-items-layout {
          display: grid;
          grid-template-rows: auto auto;
          gap: 16px;
        }

        picture {
          aspect-ratio: 1.319;
          background-color: grey;
        }

        .two-items-layout-image {
          width: 100%;
          height: auto;
          object-fit: cover;
        }

        .two-items-layout-title,
        .two-items-layout-description {
          margin: 0;
        }

        .two-items-layout-title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        @media (min-width: 768px) {
          .two-items-layout {
            grid-template-columns: 0.45fr 1fr;
            grid-template-rows: unset;
            align-items: center;
            gap: 24px;
          }
        }
      `}</style>
    </>
  );
};
