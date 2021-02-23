import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './../helpers/GlobalStyles';
import Cover from './../components/Cover';
import Form from './../components/Form';
import include from './../helpers/MediaQueries';
import EmailContextProvider from './../contexts/EmailContext';
import PasswordContextProvider from '../contexts/PasswordContext';

const StyledHome = styled.div`
  display: grid;
  grid-template-columns: 56% auto;
  height: 100%;
  position: fixed;
  width: 100%;

  ${
    include('tablet', `
      grid-template-columns: 35% auto;
    `)
  }

  ${
    include('mobile', `
      align-items: center;
      display: flex;
      justify-content: center;
    `)
  }
`;

const Home = () => {
  return (
    <PasswordContextProvider>
      <EmailContextProvider>
        <StyledHome>
          <GlobalStyles />
          <Cover />
          <Form />
        </StyledHome>
      </EmailContextProvider>
    </PasswordContextProvider>
  );
};

export default Home;
