import "./App.css";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [counterX, setCounterX] = useState(0);
  const [counterY, setCounterY] = useState(0);
  const [name, setName] = useState("Jason");
  const [nameInput, setNameInput] = useState("");

  const increment = (counter, setCounter) => {
    setCounter(counter + 1);
  };

  const decrement = (counter, setCounter) => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Hello {name}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setName("Bob")}>Change Name</button>
      <hr />
      <p>CounterX: {counterX}</p>
      <button
        onClick={() => {
          decrement(counterX, setCounterX);
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          increment(counterX, setCounterX);
        }}
      >
        Increment
      </button>
      <hr />
      <p>CounterY: {counterY}</p>
      <button
        onClick={() => {
          decrement(counterY, setCounterY);
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          increment(counterY, setCounterY);
        }}
      >
        Increment
      </button>
    </>
  );
}

export default App;
