import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom'

import MovieList from '../MovieList/MovieList'
import MovieDetail from '../MovieDetail/MovieDetail'
import MovieEdit from '../MovieEdit/MovieEdit'
class App extends Component {
  // Renders the entire app on the DOM
  componentDidMount() {
    this.props.dispatch({type: 'FETCH_MOVIES'})
  }

  render() {
    return (
      <Router>
        <div className="App">
          
          <Route path='/' exact component={MovieList} />
          <Route path='/detail' exact component={MovieDetail} />
          <Route path='/edit' exact component={MovieEdit} />

        </div>
      </Router>
      
    );
  }
}

export default connect()(App);
