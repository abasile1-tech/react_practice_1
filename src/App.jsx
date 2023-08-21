import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("Jason");

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Hello {name}</h1>
      <button onClick={() => setName("Bob")}>Change Name</button>
      <hr />
      <p>Counter: {counter}</p>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </>
  );
}

export default App;
