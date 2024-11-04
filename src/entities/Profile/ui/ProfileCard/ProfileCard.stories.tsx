import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/Avatar.png';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'admin',
        first: 'Vlad',
        lastname: 'Yu',
        age: 22,
        country: Country.Ukraine,
        currency: Currency.RUB,
        city: 'Tbilisi',
        avatar,
    },
};

export const WithErrors = Template.bind({});
WithErrors.args = {
    error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
