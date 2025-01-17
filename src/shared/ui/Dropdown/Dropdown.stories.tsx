import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../Button/Button';

import { Dropdown } from './Dropdown';

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Dropdown {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    trigger: <Button>Open!</Button>,
    items: [
        { content: 'Item 1' },
        { content: 'Item 2' },
        { content: 'Item 3' },
    ],
};
