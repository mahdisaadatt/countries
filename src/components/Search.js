import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  padding: 1rem;
  width: 450px;
  height: 50px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 720px) {
    width: 100%;
  }
  ion-icon {
    font-size: 24px;
    padding: 0 1rem;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  font-size: 14px;
`;

const Search = ({ onSearchSubmit, placeholder }) => {
  const [term, setTerm] = useState('');

  const onSearchChange = e => {
    setTerm(e.target.value);
    onSearchSubmit(term)
  };

  const onFormSubmit = e => {
    e.preventDefault();
    // onSearchSubmit(term);
  };
  return (
    <Form onSubmit={onFormSubmit}>
      <ion-icon name="search"></ion-icon>
      <Input placeholder={placeholder} type="text" value={term} onChange={onSearchChange} />
    </Form>
  );
};

export default Search;
