import "./App.css";
import { useEffect, useState, memo } from "react";

function useLocalStorage(
  key,
  defaultValue = '',
  { serialize = JSON.stringify, deSerialize = JSON.parse } = {}
) {
  const [state, setState] = useState(() => {
    const valueFromLocal = window.localStorage.getItem(key);
    if (valueFromLocal) {
      return deSerialize(valueFromLocal);
    }
    return  typeof defaultValue === 'function' ? defaultValue() : '';
  }); // async

  useEffect(() => {
    window.localStorage.setItem(key, serialize(state));
  }, [state, key]); //DEPENDENCY

  return [state, setState, serialize];
}

const MemoGreeting = memo(function Greeting() {
  // const [name, setName] = useLocalStorage("name", initial);  defaualtvalue is text
  const [name, setName] = useLocalStorage("name", ()=>"hello"); // defaualtvalue is function

  return (
    <div className="App">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>{name}</h1>
    </div>
  );
});

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <MemoGreeting />
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}

export default App;
