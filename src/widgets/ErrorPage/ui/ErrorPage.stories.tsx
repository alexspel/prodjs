import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ErrorPage from './ErrorPage';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'widgets/ErrorPage',
    component: ErrorPage,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ErrorPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ErrorPage> = (args) => <ErrorPage {...args} />;

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