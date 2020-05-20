import React from 'react';
import SearchForm from './components/searchForm';
import {Provider, connect} from 'react-redux';
import store from './store/';
import LandingPage from './components/landingPage'


function App(props) {
  const loading = props.loading
  return (
    <div>
    <Provider store ={store}>
      <LandingPage/>
    </Provider>
    </div>
  );
}

export default App;
