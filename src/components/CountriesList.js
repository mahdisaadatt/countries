import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import api from '../apis/api';
import { Link } from 'react-router-dom';

const CountriesListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 0.3fr));
  gap: 5rem;
  margin: 1rem 0;
  justify-content: center;

  @media only screen and (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 683px) {
    grid-template-columns: 80%;
    gap: 3rem;
  }

  .country {
    width: 100%;
    height: 100%;
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.3s ease;

    &:hover {
      background-color: #999999;
    }

    .img-container {
      width: 100%;
      height: 200px;
      border-radius: 4px 4px 0 0;
      overflow: hidden;
      .country-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.3s ease;

        &:hover {
          transform: scale(1.1);
        }
      }
    }

    .info-container {
      padding: 1.5rem 2rem 1rem;

      .country-name {
        font-family: 'Nunito Extra Bold', sans-serif;
      }
      .country-info {
        margin: 1rem 0 2rem;
        line-height: 28px;
        p {
          font-family: 'Nunito Semi Bold', sans-serif;
          span {
            font-family: 'Nunito Light', sans-serif;
          }
        }
      }
    }
  }
`;

const CountriesList = ({ searchCountry, selectedContinent, onCountrySelect }) => {
  const [responseCountries, setResponseCountries] = useState([]);

  // * [Fetch Countries] *
  const fetchCountries = async () => {
    try {
      if (!localStorage.getItem('countries')) {
        const res = await api.get('/all?fields=name,flags,alpha2Code,alpha3Code,population,region,capital,nativeName,subregion,topLevelDomain,currencies,languages,borders');
        const data = await res.data;
        localStorage.setItem('countries', JSON.stringify(data));
        setResponseCountries(JSON.parse(localStorage.getItem('countries')));
      }
      setResponseCountries(JSON.parse(localStorage.getItem('countries')));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchCountries();
  }, []);

  const rendered = responseCountries.map(country => {
    if (!country.name.toLowerCase().includes(searchCountry) && !country.name.includes(searchCountry)) {
      return null;
    }

    if (selectedContinent.label && !(selectedContinent.label === 'All')) {
      if (!country.region.includes(selectedContinent.label)) {
        return null;
      }
    }

    return (
      <Link to={`/details/${country.alpha3Code}`} onClick={() => onCountrySelect(country)} key={country.alpha3Code}>
        <div className="country">
          <div className="img-container">
            <img className="country-img" src={country.flags.svg ? country.flags.svg : country.flags.png} alt={`${country.name} Flag`} loading="lazy" />
          </div>
          <div className="info-container">
            <h3 className="country-name">{country.name}</h3>
            <div className="country-info">
              <p>
                Population: <span>{country.population.toLocaleString()}</span>
              </p>
              <p>
                Region: <span>{country.region}</span>
              </p>
              <p>
                Capital: <span>{country.capital}</span>
              </p>
            </div>
          </div>
        </div>
      </Link>
    );
  });
  return <CountriesListContainer>{rendered}</CountriesListContainer>;
};

export default CountriesList;
