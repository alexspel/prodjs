import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppLink, AppLinkTheme } from './AppLink';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'shared/AppLink',
    component: AppLink,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
        children: 'Link',
    }
} as ComponentMeta<typeof AppLink>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const LightPrimary = Template.bind({});
LightPrimary.args = {
    theme: AppLinkTheme.PRIMARY,
}; 

export const LightSecondary = Template.bind({});
LightSecondary.args = {
    theme: AppLinkTheme.SECONDARY,
}; 

export const DarkPrimary = Template.bind({});
DarkPrimary.args = {
    theme: AppLinkTheme.PRIMARY,
}; 
DarkPrimary.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkSecondary = Template.bind({});
DarkSecondary.args = {   
    theme: AppLinkTheme.SECONDARY,
}; 
DarkSecondary.decorators = [ThemeDecorator(Theme.DARK)];

