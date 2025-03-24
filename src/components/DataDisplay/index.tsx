import { useAppSelector } from '@/app/hooks';
import { Box, Flex, Text } from '@chakra-ui/react';

export const DataDisplay = () => {
  const rectangles = useAppSelector((state) => state.canvas.rectangles);

  return (
    <Box height="vh" bgColor="gray.50" p="3" w="2/12" overflowY="scroll">
      {rectangles.map((rectangle, key) => (
        <Box
          key={rectangle.id}
          p={4}
          width="full"
          bgColor="gray.100"
          borderRadius="md"
          my="2"
        >
          <Text
            textStyle="xs"
            fontWeight="bold"
            borderBottom="1px solid"
            borderColor="gray.300"
            pb={1}
            mb={2}
          >
            Rectangle {key + 1}
          </Text>
          <Flex justify="space-between">
            <Text textStyle="xs" color="gray.500">
              X:
            </Text>
            <Text textStyle="xs" color="gray.600" fontWeight="semibold">
              {rectangle.coordinates.x.toFixed(4)}
            </Text>
          </Flex>
          <Flex justify="space-between">
            <Text textStyle="xs" color="gray.500">
              Y:
            </Text>
            <Text textStyle="xs" color="gray.600" fontWeight="semibold">
              {rectangle.coordinates.y.toFixed(4)}
            </Text>
          </Flex>
          <Flex justify="space-between">
            <Text textStyle="xs" color="gray.500">
              Width:
            </Text>
            <Text textStyle="xs" color="gray.600" fontWeight="semibold">
              {rectangle.width.toFixed(4)}
            </Text>
          </Flex>
          <Flex justify="space-between">
            <Text textStyle="xs" color="gray.500">
              Height:
            </Text>
            <Text textStyle="xs" color="gray.600" fontWeight="semibold">
              {rectangle.height.toFixed(4)}
            </Text>
          </Flex>
          <Flex justify="space-between">
            <Text textStyle="xs" color="gray.500">
              Rotation:
            </Text>
            <Text textStyle="xs" color="gray.600" fontWeight="semibold">
              {rectangle.rotation.toFixed(4)}°
            </Text>
          </Flex>
        </Box>
      ))}
    </Box>
  );
};
