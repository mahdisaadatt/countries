import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Search from './components/Search';
import Filter from './components/Filter';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';
import './App.css';

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 16px 16px;
`;

const SearchContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2.5rem auto;
  @media only screen and (max-width: 720px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const options = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Africa',
    value: 'africa',
  },
  {
    label: 'Americas',
    value: 'american',
  },
  {
    label: 'Asia',
    value: 'asia',
  },
  {
    label: 'Europe',
    value: 'europe',
  },
  {
    label: 'Oceania',
    value: 'oceania',
  },
];

export default () => {
  const [selectedContinent, setSelectedContinent] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchCountry, setSearchCountry] = useState('');

  // * [Get country name from Search component] *
  const onSearchSubmit = searchText => {
    setSearchCountry(searchText);
  };

  // * [Get selected country from CountriesList component] *
  const onCountrySelect = selected => {
    setSelectedCountry(selected);
  };
  
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <SearchContainer>
                  <Search
                    placeholder="Search for a country..."
                    onSearchSubmit={onSearchSubmit}
                  />
                  <Filter
                    options={options}
                    dropdownTitle="Filter by Region"
                    selected={selectedContinent}
                    setSelectedChange={setSelectedContinent}
                  />
                </SearchContainer>
                <CountriesList
                  selectedContinent={selectedContinent}
                  searchCountry={searchCountry}
                  onCountrySelect={onCountrySelect}
                />
              </>
            }
          />

          <Route
            exact
            path="/details/:countryCode"
            element={<CountryDetail selectedCountry={selectedCountry} />}
          />
        </Routes>
      </Container>
    </>
  );
};
