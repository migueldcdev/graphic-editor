import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { Tooltip } from '@/components/ui/tooltip';
import {
  selectCreateRectangle,
  selectShowGrid,
  unselectCreateRectangle,
  unselectShowGrid,
} from '@/features/canvas/canvasSlice';
import { Box, IconButton } from '@chakra-ui/react';
import { LuRectangleHorizontal } from 'react-icons/lu';
import { MdOutlineGrid4X4 } from 'react-icons/md';

export const Toolbar = () => {
  const dispatch = useAppDispatch();
  const isCreateRectangleSelected = useAppSelector(
    (state) => state.canvas.isCreateRectangleSelected,
  );
  const isShowGridSelected = useAppSelector(
    (state) => state.canvas.isShowGridSelected,
  );
  function handleRectangleClick() {
    if (isCreateRectangleSelected) {
      dispatch(unselectCreateRectangle());
    } else {
      dispatch(selectCreateRectangle());
    }
  }

  function handleGridClick() {
    if (isShowGridSelected) {
      dispatch(unselectShowGrid());
    } else {
      dispatch(selectShowGrid());
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
          my="4"
          aria-label="Select rectangle"
          variant={!isCreateRectangleSelected ? 'surface' : 'solid'}
          size="sm"
          onClick={handleRectangleClick}
        >
          <LuRectangleHorizontal />
        </IconButton>
      </Tooltip>
      <Tooltip content="Show selection grid" openDelay={250} closeDelay={100}>
        <IconButton
          aria-label="Select grid"
          variant={!isShowGridSelected ? 'surface' : 'solid'}
          size="sm"
          onClick={handleGridClick}
        >
          <MdOutlineGrid4X4 />
        </IconButton>
      </Tooltip>
    </Box>
  );
};
