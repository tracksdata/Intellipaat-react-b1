import React from 'react';

const App = () => { // 
  
   let name='Bucky Wall';
   function display(e){
    console.log(">>> Display");
    console.log(e.target.value);
    name = e.target.value;
   }
    
  return (
    //View 
    <div>
      <h1>APP Component</h1>

      <h1>Name: {name}</h1>
      
      <input type="text" onChange={(e)=>display(e)}/> <br/>
      <button onClick={(e)=>display(e)}>Click Here</button>
    
      <hr/>

    </div>
  );
};

export default App;