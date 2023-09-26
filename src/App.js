import './App.css';
import { useState } from 'react';


function Greeting({initial}){
  const [name, setName] = useState(initial);
  return (
    <div className="App">
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />
     <h1>{name}</h1>
    </div>
  ); 
}

function App() {
  return <Greeting initial='hello' />
}

export default App;
