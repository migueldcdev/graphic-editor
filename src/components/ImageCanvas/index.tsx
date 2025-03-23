import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { addRectangle } from '@/features/canvas/canvasSlice';
import { AbsoluteCenter, Box } from '@chakra-ui/react';
import { KonvaEventObject, Node, NodeConfig } from 'konva/lib/Node';
import { Image, Layer, Stage } from 'react-konva';
import useImage from 'use-image';
import { RectangleComponent } from '../Rectangle';

export const ImageCanvas = () => {
  const image = useAppSelector((state) => state.image.image);
  const isCreateRectangleSelected = useAppSelector(
    (state) => state.canvas.isCreateRectangleSelected,
  );
  const rectangles = useAppSelector((state) => state.canvas.rectangles);
  const [img] = useImage(image);
  const dispatch = useAppDispatch();

  function handleOnMouseDown(
    event: KonvaEventObject<MouseEvent, Node<NodeConfig>>,
  ) {
    if (isCreateRectangleSelected) {
      const payload = event.target.getStage()?.getPointerPosition();
      if (payload) dispatch(addRectangle(payload));
    }
  }

  // function handleOnDrag() {

  // }

  return (
    <Box width="full" height="100vh" bgColor="gray.50">
      <AbsoluteCenter>
        <Stage
          width={600}
          height={window.innerHeight}
          onMouseDown={(e) => handleOnMouseDown(e)}
        >
          <Layer>
            {img && (
              <Image
                image={img}
                width={600}
                height={500 * (img.height / img.width)}
              />
            )}
          </Layer>
          <Layer>
            {rectangles.map((rectangle) => (
              <RectangleComponent rectangle={rectangle} />
            ))}
          </Layer>
        </Stage>
      </AbsoluteCenter>
    </Box>
  );
};
