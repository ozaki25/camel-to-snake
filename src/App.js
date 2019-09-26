import React, { useState } from 'react';

function camelToSnake(value) {
  return value
    .split(/(?=[A-Z])/)
    .join('_')
    .toLowerCase();
}

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const onChange = e => {
    const value = e.target.value;
    setInput(value);
    setResult(camelToSnake(value));
  };

  const onClick = () => {
    setInput('');
    setResult('');
  };

  return (
    <div>
      <input onChange={onChange} value={input} />
      <p>{result}</p>
      <button onClick={onClick}>クリア</button>
    </div>
  );
}

export default App;
