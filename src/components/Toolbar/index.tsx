import { Tooltip } from '@/components/ui/tooltip';
import { Box, IconButton } from '@chakra-ui/react';
import { LuRectangleHorizontal } from 'react-icons/lu';

export const Toolbar = () => {
  return (
    <Box height="100vh" paddingLeft="3" paddingTop="2" width="12">
      <Tooltip
        content="Select area in manuscript"
        openDelay={250}
        closeDelay={100}
      >
        <IconButton aria-label="Select " variant="surface" size="sm">
          <LuRectangleHorizontal />
        </IconButton>
      </Tooltip>
    </Box>
  );
};
