import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArticleEditPage from './ArticleEditPage';

export default {
    title: 'shared/ArticleEditPage',
    component: ArticleEditPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = (args) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ArticleEditPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
