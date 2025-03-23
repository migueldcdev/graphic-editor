import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { Tooltip } from '@/components/ui/tooltip';
import {
  selectRectangle,
  unselectRectangle,
} from '@/features/canvas/canvasSlice';
import { Box, IconButton } from '@chakra-ui/react';
import { LuRectangleHorizontal } from 'react-icons/lu';

export const Toolbar = () => {
  const dispatch = useAppDispatch();
  const isRectangleSelected = useAppSelector(
    (state) => state.canvas.isRectangleSelected,
  );

  function handleRectangleClick() {
    if (isRectangleSelected) {
      dispatch(unselectRectangle());
    } else {
      dispatch(selectRectangle());
    }
  }

  return (
    <Box height="100vh" padding="3" paddingTop="2" width="16">
      <Tooltip
        content="Select area in manuscript"
        openDelay={250}
        closeDelay={100}
      >
        <IconButton
          aria-label="Select rectangle"
          variant={!isRectangleSelected ? 'surface' : 'solid'}
          size="sm"
          onClick={handleRectangleClick}
        >
          <LuRectangleHorizontal />
        </IconButton>
      </Tooltip>
    </Box>
  );
};
