import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 95vw;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;

  // @media only screen and (max-width: 768px) {
  //   padding: 10px;
  // }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 2.5em;
  filter: drop-shadow(1px 1px 12px white);
`;

const Menu = styled.img`
  @media only screen and (max-width: 768px) {
    display: block;
  }
  height: 2.5em;
  display: none;
  cursor: pointer;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;


const Button = styled.button`
  width: 100px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = () => {
  const [openSlide, setOpenSlide] = useState(true);
  return (
    <Section>
      <Container>
        <Links onClick={() => setOpenSlide((openSlide) => !openSlide)}>
          <Logo src="./img/logo.png" />
          <List className={`navbar_ul ${openSlide ? "sink_up" : ""}`}>
            <ListItem><Link className="navbar_links" to="/hall">Documents</Link></ListItem>
            <ListItem><Link className="navbar_links" to="/hall">Works</Link></ListItem>
            <ListItem><Link className="navbar_links" to="/hall">Contact</Link></ListItem>
            <Button><a className="navbar_links" href="tel:+2348063769884">Hire Now</a></Button>
          </List>
        </Links>
        <Icons>
          <Button><a className="navbar_links" href="tel:+2348063769884">Hire Now</a></Button>
          <Menu onClick={() => setOpenSlide((openSlide) => !openSlide)} src="../../public/img/menu.svg" />
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
