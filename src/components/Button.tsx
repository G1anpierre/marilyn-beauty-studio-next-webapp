import React from 'react';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'button--primary' : 'button--secondary';
  return (
    <>
      <button
        type="button"
        className={`button button--${size} ${mode}`}
        style={{ backgroundColor }}
        {...props}
      >
        {label}
      </button>
      <style jsx>{`
        .button {
          font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial,
            sans-serif;
          font-weight: 400;
          border: 0;
          border-radius: 0.25rem;
          cursor: pointer;
          display: inline-block;
          line-height: 1;
        }
        .button--primary {
          color: black;
          background-color: #ffbc0d;
        }
        .button--secondary {
          color: #333;
          background-color: transparent;
          box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
        }
        .button--small {
          font-size: 12px;
          padding: 10px 16px;
        }
        .button--medium {
          font-size: 14px;
          padding: 11px 20px;
        }
        .button--large {
          font-size: 16px;
          padding: 12px 24px;
        }
      `}</style>
    </>
  );
};
