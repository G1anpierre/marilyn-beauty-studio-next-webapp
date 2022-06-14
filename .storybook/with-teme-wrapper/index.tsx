import React from 'react';
import { ThemeWrapper } from '../../src/components/ThemeWrapper';

export const withThemeWrapper = (Story) => {
  return (
    <>
      <ThemeWrapper>
        <Story />
      </ThemeWrapper>
    </>
  );
};
