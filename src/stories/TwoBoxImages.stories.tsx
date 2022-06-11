import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TwoBoxImages } from '../components/TwoBoxImages';

export default {
  title: 'Components/TwoBoxImages',
  component: TwoBoxImages,
} as ComponentMeta<typeof TwoBoxImages>;

export const TwoBoxImagesComponent = () => <TwoBoxImages />;
