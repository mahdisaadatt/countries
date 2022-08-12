import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background-color: var(--dark-blue);
  box-shadow: var(--midnight-gray) 0px 1px 5px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  body.light & {
    background-color: var(--white);
    box-shadow: rgba(60, 64, 67, 0.3) 0px 0px 1px -1px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
  &:hover {
    ion-icon {
      right: 10px;
    }
  }
  ion-icon {
    position: relative;
    transition: all 0.3s ease;
    right: 5px;
  }
`;

const style = {
  width: '140px',
  height: '40px',
  display: 'flex',
};

const BackButton = () => {
  return (
    <Link to={-1} style={style}>
      <Container>
        <ion-icon name="arrow-back-outline"></ion-icon>
        Back
      </Container>
    </Link>
  );
};

export default BackButton;
