import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        children: 'Button',
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// Light theme
export const PrimaryS = Template.bind({});
PrimaryS.args = {
    size: ButtonSize.S,
};
export const PrimaryM = Template.bind({});
PrimaryM.args = {
    size: ButtonSize.M,
};
export const PrimaryL = Template.bind({});
PrimaryL.args = {
    size: ButtonSize.L,
};
export const PrimaryXL = Template.bind({});
PrimaryXL.args = {
    size: ButtonSize.XL,
};

export const ClearS = Template.bind({});
ClearS.args = {
    theme: ButtonTheme.CLEAR,
    size: ButtonSize.S,
};
export const ClearM = Template.bind({});
ClearM.args = {
    theme: ButtonTheme.CLEAR,
    size: ButtonSize.M,
};
export const ClearL = Template.bind({});
ClearL.args = {
    theme: ButtonTheme.CLEAR,
    size: ButtonSize.L,
};
export const ClearXL = Template.bind({});
ClearXL.args = {
    theme: ButtonTheme.CLEAR,
    size: ButtonSize.XL,
};

export const OutlinedS = Template.bind({});
OutlinedS.args = {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.S,
};
export const OutlinedM = Template.bind({});
OutlinedM.args = {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M,
};
export const OutlinedL = Template.bind({});
OutlinedL.args = {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
};
export const OutlinedXL = Template.bind({});
OutlinedXL.args = {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
};

export const BackgroundS = Template.bind({});
BackgroundS.args = {
    theme: ButtonTheme.BACKGROUND,
    size: ButtonSize.S,
};
export const BackgroundM = Template.bind({});
BackgroundM.args = {
    theme: ButtonTheme.BACKGROUND,
    size: ButtonSize.M,
};
export const BackgroundL = Template.bind({});
BackgroundL.args = {
    theme: ButtonTheme.BACKGROUND,
    size: ButtonSize.L,
};
export const BackgroundXL = Template.bind({});
BackgroundXL.args = {
    theme: ButtonTheme.BACKGROUND,
    size: ButtonSize.XL,
};

export const BackgroundInvertedS = Template.bind({});
BackgroundInvertedS.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.S,
};
export const BackgroundInvertedM = Template.bind({});
BackgroundInvertedM.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.M,
};
export const BackgroundInvertedL = Template.bind({});
BackgroundInvertedL.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.L,
};
export const BackgroundInvertedXL = Template.bind({});
BackgroundInvertedXL.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.XL,
};
export const PrimarySSquare = Template.bind({});
PrimarySSquare.args = {
    size: ButtonSize.S,
    square: true,
    children: '>',
};
export const PrimaryMSquare = Template.bind({});
PrimaryMSquare.args = {
    size: ButtonSize.M,
    square: true,
    children: '>',
};
export const PrimaryLSquare = Template.bind({});
PrimaryLSquare.args = {
    size: ButtonSize.L,
    square: true,
    children: '>',
};
export const PrimaryXLSquare = Template.bind({});
PrimaryXLSquare.args = {
    size: ButtonSize.XL,
    square: true,
    children: '>',
};
export const ClearSSquare = Template.bind({});
ClearSSquare.args = {
    theme: ButtonTheme.CLEAR,
    size: ButtonSize.S,
    square: true,
    children: '>',
};
export const ClearMSquare = Template.bind({});
ClearMSquare.args = {
    theme: ButtonTheme.CLEAR,
    size: ButtonSize.M,
    square: true,
    children: '>',
};
export const ClearLSquare = Template.bind({});
ClearLSquare.args = {
    theme: ButtonTheme.CLEAR,
    size: ButtonSize.L,
    square: true,
    children: '>',
};
export const ClearXLSquare = Template.bind({});
ClearXLSquare.args = {
    theme: ButtonTheme.CLEAR,
    size: ButtonSize.XL,
    square: true,
    children: '>',
};

export const OutlinedSSquare = Template.bind({});
OutlinedSSquare.args = {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.S,
    square: true,
    children: '>',
};
export const OutlinedMSquare = Template.bind({});
OutlinedMSquare.args = {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M,
    square: true,
    children: '>',
};
export const OutlinedLSquare = Template.bind({});
OutlinedLSquare.args = {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
    square: true,
    children: '>',
};
export const OutlinedXLSquare = Template.bind({});
OutlinedXLSquare.args = {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
    square: true,
    children: '>',
};

export const BackgroundSSquare = Template.bind({});
BackgroundSSquare.args = {
    theme: ButtonTheme.BACKGROUND,
    size: ButtonSize.S,
    square: true,
    children: '>',
};
export const BackgroundMSquare = Template.bind({});
BackgroundMSquare.args = {
    theme: ButtonTheme.BACKGROUND,
    size: ButtonSize.M,
    square: true,
    children: '>',
};
export const BackgroundLSquare = Template.bind({});
BackgroundLSquare.args = {
    theme: ButtonTheme.BACKGROUND,
    size: ButtonSize.L,
    square: true,
    children: '>',
};
export const BackgroundXLSquare = Template.bind({});
BackgroundXLSquare.args = {
    theme: ButtonTheme.BACKGROUND,
    size: ButtonSize.XL,
    square: true,
    children: '>',
};

export const BackgroundInvertedSSquare = Template.bind({});
BackgroundInvertedSSquare.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.S,
    square: true,
    children: '>',
};
export const BackgroundInvertedMSquare = Template.bind({});
BackgroundInvertedMSquare.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.M,
    square: true,
    children: '>',
};
export const BackgroundInvertedLSquare = Template.bind({});
BackgroundInvertedLSquare.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.L,
    square: true,
    children: '>',
};
export const BackgroundInvertedXLSquare = Template.bind({});
BackgroundInvertedXLSquare.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.XL,
    square: true,
    children: '>',
};
// Dark theme
export const PrimarySDark = Template.bind({});
PrimarySDark.args = {
    size: ButtonSize.S,
};
PrimarySDark.decorators = [ThemeDecorator(Theme.DARK)];
export const PrimaryMDark = Template.bind({});
PrimaryMDark.args = {
    size: ButtonSize.M,
};
PrimaryMDark.decorators = [ThemeDecorator(Theme.DARK)];
export const PrimaryLDark = Template.bind({});
PrimaryLDark.args = {
    size: ButtonSize.L,
};
PrimaryLDark.decorators = [ThemeDecorator(Theme.DARK)];
export const PrimaryXLDark = Template.bind({});
PrimaryXLDark.args = {
    size: ButtonSize.XL,
};
PrimaryXLDark.decorators = [ThemeDecorator(Theme.DARK)];
export const ClearSDark = Template.bind({});
ClearSDark.args = {
    theme: ButtonTheme.CLEAR,
    size: ButtonSize.S,
};
ClearSDark.decorators = [ThemeDecorator(Theme.DARK)];
export const ClearMDark = Template.bind({});
ClearMDark.args = {
    theme: ButtonTheme.CLEAR,
    size: ButtonSize.M,
};
ClearMDark.decorators = [ThemeDecorator(Theme.DARK)];
export const ClearLDark = Template.bind({});
ClearLDark.args = {
    theme: ButtonTheme.CLEAR,
    size: ButtonSize.L,
};
ClearLDark.decorators = [ThemeDecorator(Theme.DARK)];
export const ClearXLDark = Template.bind({});
ClearXLDark.args = {
    theme: ButtonTheme.CLEAR,
    size: ButtonSize.XL,
};
ClearXLDark.decorators = [ThemeDecorator(Theme.DARK)];
export const OutlinedSDark = Template.bind({});
OutlinedSDark.args = {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.S,
};
OutlinedSDark.decorators = [ThemeDecorator(Theme.DARK)];
export const OutlinedMDark = Template.bind({});
OutlinedMDark.args = {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M,
};
OutlinedMDark.decorators = [ThemeDecorator(Theme.DARK)];
export const OutlinedLDark = Template.bind({});
OutlinedLDark.args = {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
};
OutlinedLDark.decorators = [ThemeDecorator(Theme.DARK)];
export const OutlinedXLDark = Template.bind({});
OutlinedXLDark.args = {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
};
OutlinedXLDark.decorators = [ThemeDecorator(Theme.DARK)];
export const BackgroundSDark = Template.bind({});
BackgroundSDark.args = {
    theme: ButtonTheme.BACKGROUND,
    size: ButtonSize.S,
};
BackgroundSDark.decorators = [ThemeDecorator(Theme.DARK)];
export const BackgroundMDark = Template.bind({});
BackgroundMDark.args = {
    theme: ButtonTheme.BACKGROUND,
    size: ButtonSize.M,
};
BackgroundMDark.decorators = [ThemeDecorator(Theme.DARK)];
export const BackgroundLDark = Template.bind({});
BackgroundLDark.args = {
    theme: ButtonTheme.BACKGROUND,
    size: ButtonSize.L,
};
BackgroundLDark.decorators = [ThemeDecorator(Theme.DARK)];
export const BackgroundXLDark = Template.bind({});
BackgroundXLDark.args = {
    theme: ButtonTheme.BACKGROUND,
    size: ButtonSize.XL,
};
BackgroundXLDark.decorators = [ThemeDecorator(Theme.DARK)];
export const BackgroundInvertedSDark = Template.bind({});
BackgroundInvertedSDark.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.S,
};
BackgroundInvertedSDark.decorators = [ThemeDecorator(Theme.DARK)];
export const BackgroundInvertedMDark = Template.bind({});
BackgroundInvertedMDark.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.M,
};
BackgroundInvertedMDark.decorators = [ThemeDecorator(Theme.DARK)];
export const BackgroundInvertedLDark = Template.bind({});
BackgroundInvertedLDark.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.L,
};
BackgroundInvertedLDark.decorators = [ThemeDecorator(Theme.DARK)];
export const BackgroundInvertedXLDark = Template.bind({});
BackgroundInvertedXLDark.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.XL,
};
BackgroundInvertedXLDark.decorators = [ThemeDecorator(Theme.DARK)];
export const PrimarySSquareDark = Template.bind({});
PrimarySSquareDark.args = {
    size: ButtonSize.S,
    square: true,
    children: '>',
};
PrimarySSquareDark.decorators = [ThemeDecorator(Theme.DARK)];
export const PrimaryMSquareDark = Template.bind({});
PrimaryMSquareDark.args = {
    size: ButtonSize.M,
    square: true,
    children: '>',
};
PrimaryMSquareDark.decorators = [ThemeDecorator(Theme.DARK)];
export const PrimaryLSquareDark = Template.bind({});
PrimaryLSquareDark.args = {
    size: ButtonSize.L,
    square: true,
    children: '>',
};
PrimaryLSquareDark.decorators = [ThemeDecorator(Theme.DARK)];
export const PrimaryXLSquareDark = Template.bind({});
PrimaryXLSquareDark.args = {
    size: ButtonSize.XL,
    square: true,
    children: '>',
};
PrimaryXLSquareDark.decorators = [ThemeDecorator(Theme.DARK)];
export const ClearSSquareDark = Template.bind({});
ClearSSquareDark.args = {
    theme: ButtonTheme.CLEAR,
    size: ButtonSize.S,
    square: true,
    children: '>',
};
ClearSSquareDark.decorators = [ThemeDecorator(Theme.DARK)];
export const ClearMSquareDark = Template.bind({});
ClearMSquareDark.args = {
    theme: ButtonTheme.CLEAR,
    size: ButtonSize.M,
    square: true,
    children: '>',
};
ClearMSquareDark.decorators = [ThemeDecorator(Theme.DARK)];
export const ClearLSquareDark = Template.bind({});
ClearLSquareDark.args = {
    theme: ButtonTheme.CLEAR,
    size: ButtonSize.L,
    square: true,
    children: '>',
};
ClearLSquareDark.decorators = [ThemeDecorator(Theme.DARK)];
export const ClearXLSquareDark = Template.bind({});
ClearXLSquareDark.args = {
    theme: ButtonTheme.CLEAR,
    size: ButtonSize.XL,
    square: true,
    children: '>',
};
ClearXLSquareDark.decorators = [ThemeDecorator(Theme.DARK)];
export const OutlinedSSquareDark = Template.bind({});
OutlinedSSquareDark.args = {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.S,
    square: true,
    children: '>',
};
OutlinedSSquareDark.decorators = [ThemeDecorator(Theme.DARK)];
export const OutlinedMSquareDark = Template.bind({});
OutlinedMSquareDark.args = {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M,
    square: true,
    children: '>',
};
OutlinedMSquareDark.decorators = [ThemeDecorator(Theme.DARK)];
export const OutlinedLSquareDark = Template.bind({});
OutlinedLSquareDark.args = {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
    square: true,
    children: '>',
};
OutlinedLSquareDark.decorators = [ThemeDecorator(Theme.DARK)];
export const OutlinedXLSquareDark = Template.bind({});
OutlinedXLSquareDark.args = {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
    square: true,
    children: '>',
};
OutlinedXLSquareDark.decorators = [ThemeDecorator(Theme.DARK)];
export const BackgroundSSquareDark = Template.bind({});
BackgroundSSquareDark.args = {
    theme: ButtonTheme.BACKGROUND,
    size: ButtonSize.S,
    square: true,
    children: '>',
};
BackgroundSSquareDark.decorators = [ThemeDecorator(Theme.DARK)];
export const BackgroundMSquareDark = Template.bind({});
BackgroundMSquareDark.args = {
    theme: ButtonTheme.BACKGROUND,
    size: ButtonSize.M,
    square: true,
    children: '>',
};
BackgroundMSquareDark.decorators = [ThemeDecorator(Theme.DARK)];
export const BackgroundLSquareDark = Template.bind({});
BackgroundLSquareDark.args = {
    theme: ButtonTheme.BACKGROUND,
    size: ButtonSize.L,
    square: true,
    children: '>',
};
BackgroundLSquareDark.decorators = [ThemeDecorator(Theme.DARK)];
export const BackgroundXLSquareDark = Template.bind({});
BackgroundXLSquareDark.args = {
    theme: ButtonTheme.BACKGROUND,
    size: ButtonSize.XL,
    square: true,
    children: '>',
};
BackgroundXLSquareDark.decorators = [ThemeDecorator(Theme.DARK)];
export const BackgroundInvertedSSquareDark = Template.bind({});
BackgroundInvertedSSquareDark.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.S,
    square: true,
    children: '>',
};
BackgroundInvertedSSquareDark.decorators = [ThemeDecorator(Theme.DARK)];
export const BackgroundInvertedMSquareDark = Template.bind({});
BackgroundInvertedMSquareDark.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.M,
    square: true,
    children: '>',
};
BackgroundInvertedMSquareDark.decorators = [ThemeDecorator(Theme.DARK)];
export const BackgroundInvertedLSquareDark = Template.bind({});
BackgroundInvertedLSquareDark.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.L,
    square: true,
    children: '>',
};
BackgroundInvertedLSquareDark.decorators = [ThemeDecorator(Theme.DARK)];
export const BackgroundInvertedXLSquareDark = Template.bind({});
BackgroundInvertedXLSquareDark.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.XL,
    square: true,
    children: '>',
};
BackgroundInvertedXLSquareDark.decorators = [ThemeDecorator(Theme.DARK)];
