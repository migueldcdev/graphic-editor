import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { Tooltip } from '@/components/ui/tooltip';
import {
  selectCreateRectangle,
  unselectCreateRectangle,
} from '@/features/canvas/canvasSlice';
import { Box, IconButton } from '@chakra-ui/react';
import { LuRectangleHorizontal } from 'react-icons/lu';

export const Toolbar = () => {
  const dispatch = useAppDispatch();
  const isCreateRectangleSelected = useAppSelector(
    (state) => state.canvas.isCreateRectangleSelected,
  );

  function handleRectangleClick() {
    if (isCreateRectangleSelected) {
      dispatch(unselectCreateRectangle());
    } else {
      dispatch(selectCreateRectangle());
    }
  }

  return (
    <Box height="100vh" padding="3" paddingTop="2" width="16" bgColor="gray.50">
      <Tooltip
        content="Select area in manuscript"
        openDelay={250}
        closeDelay={100}
      >
        <IconButton
          aria-label="Select rectangle"
          variant={!isCreateRectangleSelected ? 'surface' : 'solid'}
          size="sm"
          onClick={handleRectangleClick}
        >
          <LuRectangleHorizontal />
        </IconButton>
      </Tooltip>
    </Box>
  );
};
