import { Story } from '@storybook/react';
import { classNames } from '../../../lib/classNames/classNames';
import { Theme } from '../../../../app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <div className={classNames('app', {}, [theme])}>
        <StoryComponent />
    </div>
)