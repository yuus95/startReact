import React from 'react';
import Hello from './Hello';
import HelloChild from './HelloChild';
import Wrapper from './Wrapper';

//import (Export명) from (상대경로)
function App() {
  return (
    <Wrapper>
        <Hello />
        <HelloChild name='react' color = 'red'/>
        <HelloChild />
    </Wrapper>

  );
}

export default App;
