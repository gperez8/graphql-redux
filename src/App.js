import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    console.log(this.props.data);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const RatesQuery = gql`
  query {
    rates(currency: "USD") {
      currency
    }
  }
`

export default graphql(RatesQuery)(App);