import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ButtonTheme } from './Button';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'shared/Button',
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        children: 'Button',
    },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
export const Primary = Template.bind({});
export const Clear = Template.bind({});
Clear.args = {
    theme: ButtonTheme.CLEAR,
};
export const Outline = Template.bind({});
Outline.args = {
    theme: ButtonTheme.OUTLINE,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export const ClearDark = Template.bind({});
ClearDark.args = {
    theme: ButtonTheme.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];
export const OutlineDark = Template.bind({});
OutlineDark.args = {
    theme: ButtonTheme.OUTLINE,
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
