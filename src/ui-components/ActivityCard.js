import {
    Card,
    Image,
    View,
    Heading,
    Flex,
    Badge,
    Text,
    Button,
    useTheme,
  } from '@aws-amplify/ui-react';
  
export const ActivityCard = (props) => {
const { tokens } = useTheme();
return (
    <View
    backgroundColor={tokens.colors.background.secondary}
    padding={tokens.space.medium}
    >
    <Card>
        <Flex direction="row" alignItems="flex-start">
        <Image
            alt="Road to milford sound"
            src={props.url}
            width="20%"
        />
        <Flex
            direction="column"
            alignItems="flex-start"
            gap={tokens.space.xs}
        >
            <Flex>
            <Badge size="small" variation="info">
                Plus
            </Badge>
            <Badge size="small" variation="success">
                Verified
            </Badge>
            </Flex>

            <Heading level={5}>
            {props.title}
            </Heading>

            <Text as="span">
            {props.description}
            </Text>
            <Button variation="primary">Book it</Button>
            <Badge size="small" variation="success">
                {props.rating}
            </Badge>
        </Flex>
        </Flex>
    </Card>
    </View>
);
};