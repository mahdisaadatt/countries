import React from 'react';
import styled from 'styled-components';

const BorderContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
`;

const Borders = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 0 8px;
  flex-wrap: wrap;
  flex: 1 1 0;
  a {
    margin: 8px;
    padding: 6px 24px;
    background-color: hsl(209, 23%, 22%);
    border-radius: 4px;
    transition: all 0.3s ease;
    box-shadow: var(--midnight-gray) 0px 1px 5px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    body.light & {
      background-color: hsl(0, 0%, 100%);
      color: var(--dark-blue);
      box-shadow: rgba(60, 64, 67, 0.3) 0px 0px 1px -1px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
      &:hover {
        background-color: rgba(000, 000, 000, 0.1);
      }
    }
  }
`;

const BorderCountries = ({ borders }) => {
  return (
    <BorderContainer>
      <p>Border Countries: </p>
      <Borders>{borders}</Borders>
    </BorderContainer>
  );
};

export default BorderCountries;
