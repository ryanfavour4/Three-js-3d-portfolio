import { Routes, Route } from 'react-router-dom';
import styled from "styled-components";
import Index from './page';

import './App.css'

const Container = styled.div`
  height: 100vh;
  scroll-behavior: smooth;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: 3px;
  color: white;
  padding:0 50px;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar{
    background: #3d1c56;
    width: 6px;
  }
  &::-webkit-scrollbar-thumb{
    background: #da4ea2;
  }
`;

function App() {
  return (
    <Routes>
      <Route path='/' element={<Index />}  />
    </Routes>
  );
}

export default App;
