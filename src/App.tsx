import { Flex } from '@chakra-ui/react';
import { useAppSelector } from './app/hooks';
import { FileUploader } from './components/FileUploader';
import { ImageCanvas } from './components/ImageCanvas';
import { Toolbar } from './components/Toolbar';

function App() {
  const isImageUploaded = useAppSelector(
    (state) => state.image.isImageUploaded,
  );
  return (
    <>
      <Flex>
        {isImageUploaded && <Toolbar />}
        {isImageUploaded ? <ImageCanvas /> : <FileUploader />}
      </Flex>
    </>
  );
}

export default App;
