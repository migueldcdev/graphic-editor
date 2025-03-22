import { Flex } from '@chakra-ui/react';
import { ImageCanvas } from './components/ImageCanvas';
import { Toolbar } from './components/Toolbar';

function App() {
  return (
    <>
      <Flex>
        <Toolbar />
        <ImageCanvas />
      </Flex>
    </>
  );
}

export default App;
