import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LangSwitcher } from './LangSwitcher';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider';


export default {
    title: 'widgets/LangSwitcher',
    component: LangSwitcher,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LangSwitcher>;


const Template: ComponentStory<typeof LangSwitcher> = (args) => <LangSwitcher {...args} />;

export const Light = Template.bind({});

Light.args = {
    children: 'Text',
};

export const Dark = Template.bind({});

Dark.args = {
    children: 'Text',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
