import React from 'react';
import styled from 'styled-components';
import ToggleTheme from '../ToggleTheme/ToggleTheme';
import Link from '../Link';

const Nav = styled.nav`
  width: 100%;
  height: 80px;
  transition: background-color 0.1s linear;
  @media only screen and (max-width: 375px) {
    height: 100px;
  }
`;

const NavContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  @media only screen and (max-width: 375px) {
    flex-direction: column;
    justify-content: space-evenly;
  }
  a {
    text-align: center;
    transition: all 0.3s ease;
    font-family: 'Nunito Semi Bold', sans-serif;
    &:hover {
      opacity: 0.8;
    }
  }
`;

const Header = () => {
  return (
    <Nav>
      <NavContainer>
        <Link href="/">
          <h2>Where in the world?</h2>
        </Link>
        <ToggleTheme />
      </NavContainer>
    </Nav>
  );
};

export default Header;
