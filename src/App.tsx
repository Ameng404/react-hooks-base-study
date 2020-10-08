import React, { useReducer } from 'react';
import './App.css';


const App: React.FC = () => {
  const [count, dispatch] = useReducer((state: number, action: string) => {
    switch (action) {
      case '+':
        return state + 1
      case '-':
        return state - 1
      default:
        return state
    }
  }, 0)
  return (
    <div className="App">
      <header className="App-header">
        <div>计数器：{count}</div>
        <button onClick={() => dispatch('+')}>+1</button>
        <button onClick={() => dispatch('-')}>-1</button>
      </header>
    </div>
  );
}

export default App;

