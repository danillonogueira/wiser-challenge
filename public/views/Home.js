import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './../helpers/GlobalStyles';
import Cover from './../components/Cover';
import Form from './../components/Form';
import include from './../helpers/MediaQueries';

const StyledHome = styled.div`
  display: grid;
  grid-template-columns: 56% auto;
  position: fixed;
  width: 100%;
  height: 100%;

  ${
    include('tablet', `
      grid-template-columns: 35% auto;
    `)
  }

  ${
    include('mobile', `
      display: flex;
      justify-content: center;
      align-items: center;
    `)
  }
`;

export default function Home() {
  return (
    <StyledHome>
      <GlobalStyles />
      <Cover />
      <Form />

    </StyledHome>
  );
}

