import React, { FC } from 'react';

export type ThemeWrapperProps = {
  children: React.ReactNode;
};

export const ThemeWrapper: FC<ThemeWrapperProps> = ({ children }) => {
  return (
    <>
      {children}
      <style jsx global>{`
        :root {
          --primary: #310a90;
          --secondary: #42e2b8;
          --white: #ffffff;
          --gradientPrimary: linear-gradient(45deg, #fad7a1 0%, #e96d71 100%);
          --gradientSecondary: linear-gradient(45deg, #72edf2 0%, #5151e5 100%);
          --headline1: 700 5.9375rem/9.6068754196167rem Poppins;
          --headline2: 700 3.6875rem/5.96637487411499rem Poppins;
          --headline3: 700 3rem/4.854000091552734rem Poppins;
          --headline4: 700 2.125rem/3.4382500648498535rem Poppins;
          --headline5: 700 1.5rem/2.427000045776367rem Poppins;
          --body1: 400 1rem/1.6180000305175781rem Poppins;
          --body2: 400 0.875rem/1.4157500267028809rem Poppins;
          --button: 700 0.875rem/1.4157500267028809rem Poppins;
          --caption: 400 0.75rem/1.2135000228881836rem Poppins;
        }
      `}</style>
    </>
  );
};