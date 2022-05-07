import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ShowData } from './Components/showData/ShowData';
import { Title } from './Components/Title/Title';
import  theme  from './Theme/theme';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme} >
      <Title />
      <ShowData />
    </ChakraProvider>
  </React.StrictMode>
);

