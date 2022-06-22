import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { YoutubeVideo } from '../components/YoutubeVideo';

export default {
  title: 'Components/YoutubeVideo',
  component: YoutubeVideo,
} as ComponentMeta<typeof YoutubeVideo>;

const Template: ComponentStory<typeof YoutubeVideo> = ({
  embedId,
  mobileRatio,
  desktopRatio,
}) => (
  <YoutubeVideo
    embedId={embedId}
    mobileRatio={mobileRatio}
    desktopRatio={desktopRatio}
  />
);

export const YoutubeVideoHistory = Template.bind({});

YoutubeVideoHistory.args = {
  embedId: 'NgkYH97Z3nk',
  mobileRatio: 1,
  desktopRatio: 1.77,
};
