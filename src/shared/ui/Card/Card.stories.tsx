import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Card } from "shared/ui/Card/Card";
import { Text } from "../Text/Text";

export default {
  title: "shared/Card",
  component: Card,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Card>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: <Text title="Title" text="text test text" />,
};
