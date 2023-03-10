import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppLink, AppLinkTheme } from './AppLink';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider';

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
