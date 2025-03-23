import { useAppSelector } from '@/app/hooks';
import { AbsoluteCenter, Box } from '@chakra-ui/react';
import { Image, Layer, Stage } from 'react-konva';
import useImage from 'use-image';

export const ImageCanvas = () => {
  const image = useAppSelector((state) => state.image.image);
  const [img] = useImage(image);
  return (
    <Box width="full" height="100vh" bgColor="gray.50">
      <AbsoluteCenter>
        <Stage width={600} height={window.innerHeight}>
          <Layer>
            {img && (
              <Image
                image={img}
                width={600}
                height={500 * (img.height / img.width)}
              />
            )}
          </Layer>
        </Stage>
      </AbsoluteCenter>
    </Box>
  );
};
