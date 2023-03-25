import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '../../../../app/providers/ThemeProvider';
import { ThemeDecorator } from '../../../config/storybook/ThemeDecorator';
import Modal from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
    isOpen: true,
    parent: document.querySelector('#root'),
    children: <div>Привет</div>,
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    parent: document.querySelector('#root'),
    children: <div>Привет</div>,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
