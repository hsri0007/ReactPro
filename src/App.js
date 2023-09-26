import './App.css';
import { useEffect, useState, memo } from 'react';




function useLocalStorage (key, defaultValue=''){
  const [state, setState] = useState(()=>window.localStorage.getItem(key) || defaultValue); // async


  useEffect(()=>{
    window.localStorage.setItem(key, state)
  },[state, key])//DEPENDENCY


  return [state, setState];

}


const MemoGreeting = memo(function Greeting({initial = ''}){
  const [name, setName] = useLocalStorage('name', initial);

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
