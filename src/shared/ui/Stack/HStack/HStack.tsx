import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

export const HStack = (props: HStackProps) => {
    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Flex direction="row" {...props} />
    );
};
