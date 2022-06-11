import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { OneBoxImageOfThreeBoxes } from '../components/OneBoxImageOfThreeBoxes';

export default {
  title: 'Components/OneBoxImagOfThreeBoxes',
  component: OneBoxImageOfThreeBoxes,
} as ComponentMeta<typeof OneBoxImageOfThreeBoxes>;

export const OneBoxImageHistory = () => <OneBoxImageOfThreeBoxes />;
