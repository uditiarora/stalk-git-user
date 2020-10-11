import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { simpleAction } from './actions/simpleAction'

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})


const mapStateToProps = state => ({
  ...state
})

class App extends Component {
  
  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render() {
    return (
      <div>Hello World!</div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
