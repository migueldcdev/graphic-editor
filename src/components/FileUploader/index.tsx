import { useAppDispatch } from '@/app/hooks';
import { setImage } from '@/features/image/imageSlice';
import { AbsoluteCenter, Box, Flex, Text } from '@chakra-ui/react';
import { useRef } from 'react';
import { SlCloudUpload } from 'react-icons/sl';

export const FileUploader = () => {
  const dispatch = useAppDispatch();
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();

    if (event.dataTransfer.files.length > 0) {
      const file = event.dataTransfer.files[0];
      const localImageUrl = window.URL.createObjectURL(file);
      dispatch(setImage(localImageUrl));
    }
    if (event.dataTransfer.files.length < 1) fileInputRef.current?.click();
  }

  function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
  }

  function handleClick() {
    fileInputRef.current?.click();
  }

  function handleUpload(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const localImageUrl = window.URL.createObjectURL(file);
      dispatch(setImage(localImageUrl));
    }
  }

  return (
    <Box
      width="full"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      height="100vh"
      bgColor="gray.50"
    >
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={(e) => handleUpload(e)}
      />
      <AbsoluteCenter onClick={handleClick} cursor="pointer">
        <Box>
          <Flex justify="center">
            <SlCloudUpload size={'3em'} />
          </Flex>
          <Text textStyle="lg" marginTop="4">
            Click to upload or drag an image
          </Text>
        </Box>
      </AbsoluteCenter>
    </Box>
  );
};
