import { ComponentMeta, ComponentStory } from '@storybook/react';
import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

// export const Light = Template.bind({});
// Light.args = {};
// Light.decorators = [StoreDecorator({})];

// export const Dark = Template.bind({});
// Dark.args = {};
// Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
