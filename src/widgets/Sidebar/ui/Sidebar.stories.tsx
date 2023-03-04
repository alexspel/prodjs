import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Light.args = {
    children: 'Text',
};

export const Dark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Dark.args = {
    children: 'Text',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];