import React from 'react';

import { client } from './config/client-graphql'
import { ApolloProvider } from '@apollo/client'

import Header from './components/Header/Header';
import PageContent from './components/PageContent/PageContent';

import './App.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <PageContent />
      </div>
    </ApolloProvider>
  );
}

export default App;
