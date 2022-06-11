import React from 'react';
import Link from 'next/link';
import { Button } from './Button';

export const OneBoxImageOfThreeBoxes = () => {
  return (
    <>
      <figure className="card">
        <picture>
          <img
            src="../assets/blue-bg.svg"
            width="1920"
            height="1080"
            alt="Blue soft landscape"
            className="card-image"
          />
        </picture>
        <figcaption>
          <h2 className="card-title">McDelivery</h2>
          <p className="card-description">
            Læs mere om job og karrieremuligheder hos McDonald’s.
          </p>
          <div className="card-button-container">
            <Link href="/">
              <a>
                <Button label="Læs mere" primary size="large" />
              </a>
            </Link>
          </div>
        </figcaption>
      </figure>
      <style jsx>{`
        .card {
          display: grid;
          grid-template-rows: auto 1fr;
          border: 0.0625rem solid #d6d6d6;
          border-radius: 0.25rem;
          width: 100%;
        }

        .card-image {
          width: 100%;
          height: auto;
          object-fit: cover;
        }

        picture {
          aspect-ratio: 2.3;
          background-color: grey;
        }

        figcaption {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .card-title {
          margin: 0;
          font-size: 1.25rem;
          text-align: center;
        }

        .card-description {
          margin: 0;
          text-align: center;
        }

        .card-button-container {
          text-align: center;
          margin-top: 1rem;
          margin-bottom: 1rem;
        }
      `}</style>
    </>
  );
};
