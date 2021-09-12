
// rsf - functional componentt with ES5
// rcc - class component 
// rsc - functional componentt with ES6 

import React from 'react';
import Greet from './Greet';

function App() {
  return (
    <div>
        <h1>
        Hello, React JS !
        </h1>
        <Greet/>
        <Greet/>
        <Greet/>
        <Greet/>
        <Greet/>

    </div>
  );
}

export default App;