import React from 'react';
import {Provider, connect} from 'react-redux';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo';
import store from './store/';
import LandingPage from './components/landingPage'

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql/pins',
});

function App(props) {
  const loading = props.loading
  return (
    //lol
    <div>
    <ApolloProvider client = {client}>
      <Provider store = {store}>
        <LandingPage/>
      </Provider>
    </ApolloProvider>
    </div>
  );
}

export default App;
