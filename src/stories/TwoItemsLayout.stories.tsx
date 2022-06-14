import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TwoItemsLayout } from '../components/TwoItemsLayout';

export default {
  title: 'Components/TwoItemsLayout',
  component: TwoItemsLayout,
} as ComponentMeta<typeof TwoItemsLayout>;

export const TwoItemsLayoutComponent = () => <TwoItemsLayout />;
