// import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar'
import {CountriesList} from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import wikiCountries from './countries.json'


import React, { Component } from 'react'

export default class App extends Component {
  state = {
    countries: wikiCountries
  }

  render() {
    return (
      <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={this.state.countries}/>
          <Switch>
            <Route exact path="/" component={CountriesList}/>
            <Route exact path="/countries/:id" component={CountryDetails}/>
          </Switch>
        </div>
      </div>
    </div>
    )
  }
}
