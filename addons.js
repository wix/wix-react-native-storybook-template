import React from 'react';
import addons from '@storybook/addons';
addons.setPreview(() => React.createElement('div'));

import '@storybook/addon-knobs/register';
import 'storybook-usage/register';
//import 'react-storybook-addon-docgen/dist/register';
