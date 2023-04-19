import styled from "styled-components";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Who from "../components/Who";
import Works from "../components/Works";

const Container = styled.div`
  height: 100vh;
  scroll-behavior: smooth;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: 3px;
  color: white;
  padding:0px 10px;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar{
    background: #3d1c56;
    width: 6px;
  }
  &::-webkit-scrollbar-thumb{
    background: #da4ea2;
  }
`;

function Index() {
  return (
    <Container>
        <Hero />
        <Who />
        <Works />
        <Contact />
    </Container>
  );
}

export default Index;
