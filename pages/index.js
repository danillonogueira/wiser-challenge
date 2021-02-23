import Home from './../app/views/Home';
import Head from 'next/head';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <Head>
        <link rel="shortcut icon" href="./favicons/favicon.ico" />
      </Head>
      <Home />
    </React.Fragment>
  );
};

export default App;
