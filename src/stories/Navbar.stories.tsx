// Button.stories.ts|tsx

import React from 'react';

import { ComponentMeta } from '@storybook/react';

import Navbar from '../components/Navbar';

export default {
  title: 'Components/Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

export const NavBar = () => <Navbar />;
