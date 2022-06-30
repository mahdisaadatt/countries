import React, { useEffect } from 'react';
import styled from 'styled-components';
import Link from '../Link';
import BackButton from '../BackButton/BackButton';
import BorderCountries from '../BorderCountries/BorderCountries';

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
  height: 400px;
  @media only screen and (max-width: 992px) {
    width: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
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

const CountryDetail = ({ selectedCountry, allCountries }) => {
  // * [Numbers Formatter] *
  const n = selectedCountry.population;
  const numberFormatter = Intl.NumberFormat('en-US');
  const formatted = numberFormatter.format(n);

  // * [Words Formatter] *
  const formatWords = word => {
    const l = Array.from(word);
    const langFormatter = l.map(index => index.key);
    return langFormatter.join(', ');
  };

  const topLevelDomain = selectedCountry.topLevelDomain.map(domain => {
    return <span key={domain}>{domain}</span>;
  });

  const currencies = selectedCountry.currencies.map(({ name }) => {
    return <span key={name}>{name}</span>;
  });

  const languages = selectedCountry.languages.map(({ name }) => {
    return <span key={name}>{name}</span>;
  });

  const countries = allCountries.map(country => {
    return country;
  });

  const borders = selectedCountry.borders.map(border => {
    return (
      <Link href={`/detail/${border}`} key={border}>
        {/* TODO: change border code to border name */}
        {border}
      </Link>
    );
  });
  return (
    <Container>
      <BackButton />
      <Country>
        <ImgContainer>
          <img src={selectedCountry.flags.svg ? selectedCountry.flags.svg : selectedCountry.flags.png} alt={`${selectedCountry.name} Flag`} />
        </ImgContainer>
        <InfoContainer>
          <h2>{selectedCountry.name}</h2>
          <Info>
            <div>
              <p>
                Native Name: <span>{selectedCountry.nativeName}</span>
              </p>
              <p>
                Population: <span>{formatted}</span>
              </p>
              <p>
                Region: <span>{selectedCountry.region}</span>
              </p>
              <p>
                Sub Region: <span>{selectedCountry.subregion}</span>
              </p>
              <p>
                Capital: <span>{selectedCountry.capital}</span>
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
          <BorderCountries borders={borders} />
        </InfoContainer>
      </Country>
    </Container>
  );
};

export default CountryDetail;
