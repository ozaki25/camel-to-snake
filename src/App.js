import React, { useState } from 'react';
import styled from 'styled-components';

function camelToSnake(value) {
  return value
    .split(/(?=[A-Z])/)
    .join('_')
    .toLowerCase();
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
    <Container>
      <TextArea onChange={onChange}>{input}</TextArea>
      <Pre>{result}</Pre>
      <button onClick={onClick}>クリア</button>
    </Container>
  );
}

export default App;
