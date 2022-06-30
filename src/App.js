import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Filter from './components/Filter/Filter';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetail from './components/CountryDetail/CountryDetail';
import Route from './components/Route';
import './App.css';

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 16px;
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
    value: 'all'
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
  const [allCountries, setAllCountries] = useState([]);

  // * [Get country name from Search component] *
  const onSearchSubmit = searchText => {
    setSearchCountry(searchText);
  };

  // * [Get selected country from CountriesList component] *
  const onCountrySelect = selected => {
    setSelectedCountry(selected);
  };

  const setCountries = countries => {
    setAllCountries(countries);
  };

  return (
    <>
      <Header />
      <Container>
        <Route path="/">
          <SearchContainer className="search-container">
            <Search placeholder="Search for a country..." onSearchSubmit={onSearchSubmit} />
            <Filter options={options} dropdownTitle="Filter by Region" selected={selectedContinent} setSelectedChange={setSelectedContinent} />
          </SearchContainer>
          <CountriesList setCountries={setCountries} selectedContinent={selectedContinent} searchCountry={searchCountry} onCountrySelect={onCountrySelect} />
        </Route>
        <Route path={selectedCountry ? `/detail/${selectedCountry.alpha3Code}` : ''}>
          {/* TODO: Fixing route for refresh page and hiding elem */}
          <CountryDetail allCountries={allCountries} selectedCountry={selectedCountry} />
        </Route>
      </Container>
    </>
  );
};
