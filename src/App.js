import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {

    console.log('data', this.props.data);
    const { rates } = this.props.data
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
        {this.props.data.loading &&
            <div> 
                <h1>LOADING ...</h1>
            </div> 
        }

        {!this.props.data.loading && 
            rates.map((rate, index) => <p key={index}> {rate.currency } </p>)
        }
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