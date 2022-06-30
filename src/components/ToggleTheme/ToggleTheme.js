import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const BackgroundToggle = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  ion-icon {
    margin-right: 10px;
  }
`;

const ToggleTheme = () => {
  const storedTheme = localStorage.getItem('theme');
  if (!storedTheme) {
    localStorage.setItem('theme', 'dark');
  }
  const [theme, setTheme] = useState(storedTheme);

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.remove('dark')
      document.body.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, [theme]);

  const switchTheme = value => {
    setTheme(value);
  };

  return (
    <BackgroundToggle href="#0" onClick={() => switchTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? <ion-icon name="moon"></ion-icon> : <ion-icon name="moon-outline"></ion-icon>}
      Dark Mode
    </BackgroundToggle>
  );
};

export default ToggleTheme;
