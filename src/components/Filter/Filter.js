import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Dropdown = styled.div`
  margin-left: 20px;
  width: 200px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 720px) {
    margin-top: 20px;
    margin-left: 0;
  }
`;

const SelectedContinent = styled.div`
  width: 100%;
  height: 50px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;
  ion-icon {
    animation-name: animation;
    animation-duration: 0.3s;
    &.animated {
      @keyframes animation {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(90deg);
        }
      }
    }
  }
`;

const ListContainer = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 200px;
  max-height: 0;
  z-index: 0;
  top: 170px;
  padding: 0;
  margin: 5px 0;
  transition: all 0.4s ease-in-out;
  border-radius: 4px;
  overflow: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }
  @media only screen and (max-width: 720px) {
    top: 240px;
  }
  &.show-list {
    max-height: 100vh;
    padding: 10px 0;
    z-index: 100;
    a {
      visibility: visible;
      opacity: 1;
    }
  }
  li {
    a {
      display: block;
      opacity: 0;
      visibility: hidden;
      width: 100%;
      padding: 8px 12px;
      transition: all 0.1s linear;
      &:hover {
        background-color: #888;
      }
    }
  }
`;

const Filter = ({ options, dropdownTitle, selected, setSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef();
  useEffect(() => {
    const showList = e => {
      if (containerRef.current.contains(e.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener('click', showList, true);
    return () => {
      document.body.removeEventListener('click', showList, true);
    };
  }, []);
  const renderedOptions = options.map(option => {
    return (
      <li key={option.value} onClick={() => setSelectedChange(option)}>
        <a href="#0">{option.label}</a>
      </li>
    );
  });
  return (
    <Dropdown className="dropdown" ref={containerRef} onClick={() => setOpen(!open)}>
      <SelectedContinent>
        <p>{selected.label ? selected.label : dropdownTitle}</p>
        <ion-icon name="chevron-forward-outline" className={open ? 'animated' : ''}></ion-icon>
      </SelectedContinent>
      <ListContainer className={open ? 'show-list' : ''}>{renderedOptions}</ListContainer>
    </Dropdown>
  );
};

export default Filter;
