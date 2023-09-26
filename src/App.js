import './App.css';
import { useEffect, useState, memo } from 'react';


const MemoGreeting = memo(function Greeting({initial = ''}){
  const [name, setName] = useState(()=>window.localStorage.getItem('name') || initial); // async
  // const [name, setName] = useState(window.localStorage.getItem('name') || initial); sync

  useEffect(()=>{
    window.localStorage.setItem('name', name)
  },[name])//DEPENDENCY

  return (
    <div className="App">
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />
     <h1>{name}</h1>
    </div>
  ); 
})

function App() {
  const [count, setCount] =useState(0);
  return (
    <div>
      <MemoGreeting initial='sdfs' />
      <button onClick={()=>setCount(count+1)} >{count}</button>
    </div>
  )
}

export default App;
