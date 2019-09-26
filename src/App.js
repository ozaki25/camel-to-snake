import React, { useState } from 'react';
import styled from 'styled-components';

function camelToSnake(value) {
  return value
    .split(/(?=[A-Z])/)
    .join('_')
    .toLowerCase();
}

function lineToComma(value) {
  return value.replace(/\r?\n/g, ', ');
}

const Container = styled.div`
  margin: 10px 15px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 300px;
`;

const Pre = styled.pre`
  background-color: #e5e5e5;
`;

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [checked, setChecked] = useState(false);

  const onChangeText = e => {
    const value = e.target.value;
    setInput(value);
    const result = checked
      ? lineToComma(camelToSnake(value))
      : camelToSnake(value);
    setResult(result);
  };

  const onChangeCheck = () => {
    setChecked(!checked);
  };

  const onClick = () => {
    setInput('');
    setResult('');
  };

  return (
    <Container>
      <TextArea onChange={onChangeText} value={input} />
      <Pre>{result}</Pre>
      <button onClick={onClick}>クリア</button>
      <label htmlFor="comma">
        カンマ区切り
        <input
          id="comma"
          type="checkbox"
          checked={checked}
          onChange={onChangeCheck}
        />
      </label>
    </Container>
  );
}

export default App;
