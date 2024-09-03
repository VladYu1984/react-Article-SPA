import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const PrimaryText = Template.bind({});
PrimaryText.args = {
    title: 'Title Lorem',
    text: 'Description',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title Lorem',
    text: 'Description',
    theme: TextTheme.ERROR,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title Lorem',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Description',
};

export const PrimaryTextDark = Template.bind({});
PrimaryTextDark.args = {
    title: 'Title Lorem',
    text: 'Description',
};
PrimaryTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Title Lorem',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Description',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
