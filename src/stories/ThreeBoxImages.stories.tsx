import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThreeBoxImages } from '../components/ThreeBoxImages';

export default {
  title: 'Components/ThreeBoxImages',
  component: ThreeBoxImages,
} as ComponentMeta<typeof ThreeBoxImages>;

export const ThreeBoxImagesHistory = () => <ThreeBoxImages />;
