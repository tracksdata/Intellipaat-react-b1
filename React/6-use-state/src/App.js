import { useState,useEffect } from 'react';
const App = () => {

  // declare state variable
  const [city, setCity] = useState()
  const[count,setCount]=useState(0);
  const[employee,setEmployee]=useState({id:10,name:'Praveen',age:78});
  // city -> a propert to be stored in the state object
  // setCity -> setCity is function who make chnages to city property
   
  /*
  useEffect(()=>{ // iif state is changed, then useEffect gets called
    console.log(">>> useEffect");
  })// every state...

  */

  return (
   
    <div>
      <h1>State Management Demo</h1> <hr />
      <h1>City: {city}</h1>
      <h1>Counter: {count}</h1> 

      <h1>{JSON.stringify(employee)}</h1>

      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      <hr/>
      <input type="text" onChange={(e)=>setCity(e.target.value)}/> <br/>
      <select onChange={(e)=>setCity(e.target.value)}>
        <option>Pune</option>
        <option>Bangalore</option>
        <option>Hyderabad</option>
        <option>Chennai</option>
        <option>Kolkata</option>


      </select>

    </div>
  );
};

export default App;