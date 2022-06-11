import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { OneBoxImageOfTwoBoxes } from '../components/OneBoxImageOfTwoBoxes';

export default {
  title: 'Components/OneBoxImagOfTwoBoxes',
  component: OneBoxImageOfTwoBoxes,
} as ComponentMeta<typeof OneBoxImageOfTwoBoxes>;

export const OneBoxImageHistory = () => <OneBoxImageOfTwoBoxes />;
