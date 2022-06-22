import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ElementVideo } from '../components/ElementVideo';

export default {
  title: 'Components/ElementVideo',
  component: ElementVideo,
} as ComponentMeta<typeof ElementVideo>;

const Template: ComponentStory<typeof ElementVideo> = ({
  videoSource,
  mobileRatio,
  desktopRatio,
}) => (
  <ElementVideo
    videoSource={videoSource}
    mobileRatio={mobileRatio}
    desktopRatio={desktopRatio}
  />
);

export const ElementVideoHistory = Template.bind({});

ElementVideoHistory.args = {
  videoSource: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  mobileRatio: 1,
  desktopRatio: 1.77,
};
