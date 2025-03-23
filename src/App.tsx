import { Flex } from '@chakra-ui/react';
import { useAppSelector } from './app/hooks';
import { FileUploader } from './components/FileUploader';
import { ImageCanvas } from './components/ImageCanvas';
import { Toolbar } from './components/Toolbar';

function App() {
  const image = useAppSelector((state) => state.image.image);
  return (
    <>
      <Flex>
        {image && <Toolbar />}
        {image ? <ImageCanvas /> : <FileUploader />}
      </Flex>
    </>
  );
}

export default App;
