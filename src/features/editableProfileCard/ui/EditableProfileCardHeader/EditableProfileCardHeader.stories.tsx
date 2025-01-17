import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EditableProfileCardHeader } from './EditableProfileCardHeader';

export default {
    title: 'features/editableProfileCard/EditableProfileCardHeader',
    component: EditableProfileCardHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditableProfileCardHeader>;

const Template: ComponentStory<typeof EditableProfileCardHeader> = (args) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <EditableProfileCardHeader {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
