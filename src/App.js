import React from 'react';
import Api from './component/api';
import { WheaterProvider } from './context/WheaterContex';

function App(){
  return (
    <WheaterProvider>
    <Api/>
    </WheaterProvider>
  );
};

export default App;