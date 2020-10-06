import React from 'react';
import Body from './components/Body';
import { NewsContextProvider } from './components/newsFetch';

function App() {
  return (
    <>
      <NewsContextProvider>
        <Body />
      </NewsContextProvider>
    </>
  );
}
export default App;
