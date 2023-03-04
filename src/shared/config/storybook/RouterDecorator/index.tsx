import { Story } from '@storybook/react';
// import { classNames } from '../../../lib/classNames/classNames';
// import { Theme } from '../../../../app/providers/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (StoryComponent: Story) => (
    <BrowserRouter>
        <StoryComponent />
    </BrowserRouter>
);
