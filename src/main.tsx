import { Provider as ChakraProvider } from '@/components/ui/provider';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import '../datadog.ts';
import App from './App.tsx';
import { store } from './app/store.ts';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ChakraProvider forcedTheme="light">
        <App />
      </ChakraProvider>
    </Provider>
  </StrictMode>,
);
