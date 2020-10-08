import React, { useState, createContext, useContext } from 'react';
import './App.css';

const countContext = createContext(0)

const Count: React.FC = () => {
  const count = useContext(countContext)
  return <div>{count}</div>
}

const App: React.FC = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <countContext.Provider value={count}>
          <Count />
        </countContext.Provider>
        <button onClick={() => setCount(count + 1)}>+1</button>
      </header>
    </div>
  );
}

export default App;

