import React from 'react';
import Link from '../Link';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 40px;
  border-radius: 4px;
  background-color: var(--dark-blue);
  box-shadow: var(--midnight-gray) 0px 1px 5px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  body.light & {
    background-color: var(--white);
    box-shadow: rgba(60, 64, 67, 0.3) 0px 0px 1px -1px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
  &:hover {
    ion-icon {
      right: 5px;
    }
  }
  ion-icon {
    position: relative;
    transition: all 0.3s ease;
    right: 10px;
  }
`;

const BackButton = () => {
  return (
    // TODO: change back button style
    <Link href="/">
      <Container>
        <ion-icon name="arrow-back-outline"></ion-icon>
        Back
      </Container>
    </Link>
  );
};

export default BackButton;
