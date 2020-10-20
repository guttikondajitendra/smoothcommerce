import React, {Component} from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { fetchLocationData } from './actions/locationActions';
import LocationComponent from './LocationComponent';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    
  return (
    <div>
      <LocationComponent />
    </div>
  );
}
}

export default App;
