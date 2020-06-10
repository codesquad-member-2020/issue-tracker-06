import React from 'react';
import Issue from '@/components/Issue/Issue';
import GlobalStyleProvider from '@/components/style/GlobalStyle';

const App = () => {
  return (
    <GlobalStyleProvider>
      <Issue />
    </GlobalStyleProvider>
  );
};

export default App;
