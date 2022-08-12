import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BackButton from './BackButton';
import BorderCountries from './BorderCountries';
import api from '../apis/api';
import { useParams } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  margin: 2rem 0;
  @media only screen and (max-width: 992px) {
    padding: 20px;
  }
`;

const Country = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6rem;
  margin: 2rem 0;
  @media only screen and (max-width: 992px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
`;
const ImgContainer = styled.div`
  width: 50%;
  height: auto;
  @media only screen and (max-width: 992px) {
    width: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const InfoContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 2rem;
  @media only screen and (max-width: 992px) {
    margin: 0;
    width: 100%;
  }
  h2 {
    font-family: 'Nunito Extra Bold', sans-serif;
  }
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  line-height: 1.6rem;
  @media only screen and (max-width: 992px) {
    flex-direction: column;
    gap: 3rem;
  }
  p {
    font-family: 'Nunito Semi Bold', sans-serif;
    .span {
      font-family: 'Nunito Light', sans-serif;
    }
  }
`;

const CountryDetail = ({ selectedCountry }) => {
  const [fetchedCountry, setFetchedCountry] = useState(selectedCountry);
  const { countryCode } = useParams();
  const fetchCountry = async countryCode => {
    const res = await api.get(`/alpha/${countryCode}`);
    const data = await res.data;
    setFetchedCountry(data);
  };
  useEffect(() => {
    fetchCountry(countryCode);
  }, [countryCode]);

  // * [Words Formatter] *
  const formatWords = word => {
    const w = Array.from(word);
    const wordFormatter = w.map(index => index.key);
    return wordFormatter.join(', ');
  };

  let borders;
  let topLevelDomain;
  let currencies;
  let languages;
  if (fetchedCountry) {
    topLevelDomain = fetchedCountry.topLevelDomain.map(domain => {
      return <span key={domain}>{domain}</span>;
    });

    currencies = fetchedCountry.currencies.map(({ name }) => {
      return <span key={name}>{name}</span>;
    });

    languages = fetchedCountry.languages.map(({ name }) => {
      return <span key={name}>{name}</span>;
    });

    if (fetchedCountry.borders) {
      borders = fetchedCountry.borders.map(border => {
        return (
          <Link to={`/details/${border}`} key={border}>
            {border}
          </Link>
        );
      });
    }
  }
  if (!fetchedCountry) {
    return <h1>Loading ...</h1>;
  }
  return (
    <Container>
      <BackButton />
      <Country>
        <ImgContainer>
          <img
            src={
              fetchedCountry.flags.svg
                ? fetchedCountry.flags.svg
                : fetchedCountry.flags.png
            }
            alt={`${fetchedCountry.name} Flag`}
          />
        </ImgContainer>
        <InfoContainer>
          <h2>{fetchedCountry.name}</h2>
          <Info>
            <div>
              <p>
                Native Name: <span>{fetchedCountry.nativeName}</span>
              </p>
              <p>
                Population:{' '}
                <span>{fetchedCountry.population.toLocaleString()}</span>
              </p>
              <p>
                Region: <span>{fetchedCountry.region}</span>
              </p>
              <p>
                Sub Region: <span>{fetchedCountry.subregion}</span>
              </p>
              <p>
                Capital: <span>{fetchedCountry.capital}</span>
              </p>
            </div>
            <div>
              <p>
                Top Level Domain: <span>{formatWords(topLevelDomain)}</span>
              </p>
              <p>
                Currencies: <span>{formatWords(currencies)}</span>
              </p>
              <p>
                Languages: <span>{formatWords(languages)}</span>
              </p>
            </div>
          </Info>
          {borders ? <BorderCountries borders={borders} /> : 'It has no border'}
        </InfoContainer>
      </Country>
    </Container>
  );
};

export default CountryDetail;
