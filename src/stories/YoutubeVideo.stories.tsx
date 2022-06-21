import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { YoutubeVideo } from '../components/YoutubeVideo';

export default {
  title: 'Components/YoutubeVideo',
  component: YoutubeVideo,
} as ComponentMeta<typeof YoutubeVideo>;

const Template: ComponentStory<typeof YoutubeVideo> = ({ embedId }) => (
  <YoutubeVideo embedId={embedId} />
);

export const YoutubeVideoHistory = Template.bind({});

YoutubeVideoHistory.args = {
  embedId: 'NgkYH97Z3nk',
};
