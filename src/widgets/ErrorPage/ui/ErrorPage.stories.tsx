import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ErrorPage from './ErrorPage';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider';

export default {
    title: 'widgets/ErrorPage',
    component: ErrorPage,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ErrorPage>;

const Template: ComponentStory<typeof ErrorPage> = (args) => <ErrorPage {...args} />;

export const Light = Template.bind({});

Light.args = {
    children: 'Text',
};

export const Dark = Template.bind({});

Dark.args = {
    children: 'Text',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
