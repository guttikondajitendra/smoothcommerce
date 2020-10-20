import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import logo from './logo.svg';
import './App.css';
import { fetchLocationData } from './actions/locationActions';
import LocationDetails from "./LocationDetails";
import "./location.css";

class LocationComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
        showLocation: false,
        currentLocation: null
    }
  }

  loadLocation = (loc) => {
    this.setState({currentLocation: loc, showLocation: true});
  }

  backToLocationList = () => {
    this.setState({showLocation: false});
  }

  componentDidMount(){
  const { fetchLocationData } = this.props;
    fetchLocationData();
  }

  render() {
    const { locationReducer } = this.props;
    const {showLocation, currentLocation } = this.state;
    const result = locationReducer && locationReducer.result || [];
    console.log(locationReducer);
  return (
    showLocation ? 
     <LocationDetails loc={currentLocation} backToLocationList={this.backToLocationList} />
    :
    <div>
      <table className="location-table">
          <thead>
              <tr>
                  <th>Bussiness Id</th>
                  <th>Bussiness Name</th>
                  <th>Website</th>
                  <th>Address</th>
              </tr>
          </thead>
          <tbody>
              {
                  result.map((res, index) => 
                    <tr key={index}>
                        <td>{index}</td>
                        <td><input onClick={() => this.loadLocation(res)} type="button" value = {res.name} /></td>
                        <td>{res.website}</td>
                        <td>{res.address}</td>
                    </tr>
                    )
              }
          </tbody>
      </table>
    </div>
  );
}
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => bindActionCreators({fetchLocationData}, dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(LocationComponent);
