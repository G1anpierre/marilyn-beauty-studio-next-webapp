// Button.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Navbar from '../components/Navbar';

export default {
  title: 'Components/Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = ({ desktopNav, mobileNav }) => (
  <Navbar desktopNav={desktopNav} mobileNav={mobileNav} />
);

export const NavbarHistory = Template.bind({});

NavbarHistory.args = {
  desktopNav: {
    sections: [
      {
        title: 'Pa menuen',
        subsections: [
          {
            name: 'Pa menuen 1',
            value: {
              title: 'feature',
              items: [
                {
                  name: 'menuLink Pa menuen',
                },
                {
                  name: 'menuLink Pa menuen',
                },
                {
                  name: 'menuLink Pa menuen',
                },
              ],
            },
          },
          {
            name: 'Pa menuen 2',
            value: {
              title: 'feature2',
              items: [
                {
                  name: 'menuLink Pa menuen 2',
                },
                {
                  name: 'menuLink Pa menuen 2',
                },
                {
                  name: 'menuLink Pa menuen 2',
                },
              ],
            },
          },
        ],
      },
      {
        title: 'McCafe',
        subsections: [
          {
            name: 'McCafe 1',
            value: {
              title: 'feature',
              items: [
                {
                  name: 'menuLink McCafe',
                },
                {
                  name: 'menuLink McCafe',
                },
                {
                  name: 'menuLink McCafe',
                },
              ],
            },
          },
        ],
      },
      {
        title: 'Job & Frentid',
        subsections: [
          {
            name: 'subSection',
            value: {
              title: 'feature',
              items: [
                {
                  name: 'menuLink Job & Frentid',
                },
                {
                  name: 'menuLink Job & Frentid',
                },
                {
                  name: 'menuLink Job & Frentid',
                },
              ],
            },
          },
        ],
      },
    ],
  },
};
