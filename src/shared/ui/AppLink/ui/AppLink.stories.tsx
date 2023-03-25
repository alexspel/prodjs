import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '../../../../app/providers/ThemeProvider';
import { ThemeDecorator } from '../../../config/storybook/ThemeDecorator';
import AppLink, { AppLinkTheme } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
        children: 'Link',
    },
} as ComponentMeta<typeof AppLink>;

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
