
import { useEffect, useLayoutEffect, useState } from 'react';


function Greeting(){
  const [name, setName] = useState(()=>{
    console.log(" child im renderring");
    return ''
  });
  useEffect(()=>{
    console.log("child im renderring useEffect")
    return ()=>{
      console.log("child cleanup im renderring useEffect")
    }
  },[])
  useLayoutEffect(()=>{
    console.log("child im renderring Layout useEffect")
  },[])
  console.log(" child im renderring out")
  return (
    <div className="App">
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />
     <h1>{name}</h1>
    </div>
  );
}

function App() {
  const [name, setName] = useState(()=>{
    console.log("  im renderring");
    return ''
  });
  useEffect(()=>{
    console.log(" im renderring useEffect")
       return ()=>{
      console.log(" cleanup im renderring useEffect")
    }
  },[])

  useLayoutEffect(()=>{
    console.log(" im renderring Layout useEffect")
  },[])
  console.log("  im renderring out")
  return (
    <div className="App">
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />
     {name}
     <Greeting />
    </div>
  ); 
}

export default App;
