
import './App.css';
import Button from './components/Button';
import styled from 'styled-components';
import Dialog from './components/Dialog';
import { useState } from 'react';
import Box from './components/Box';

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 50px;
  border: 1px solid black;
  padding: 10px;
`;

function App() {
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  }
  const onCancle = () => {
    setDialog(false);
    console.log('취소');
  }
  const onConfirm = () => {
    setDialog(false);
    console.log('삭제');
  }
  return (
    <>
      <AppBlock>
        <Button>BUTTON1</Button>
        <Button>BUTTON2</Button>
        <Button onClick={onClick}>BUTTON3</Button>
      </AppBlock>
    <Dialog title="정말로 삭제하시겠습니까?" confirmText="삭제" cancleText="취소" visible={dialog} onCancle={onCancle} onConfirm={onConfirm}>
      데이터를 삭제하시겠습니까?
    </Dialog>
    <Box/>
    </>

  );
}

export default App;
