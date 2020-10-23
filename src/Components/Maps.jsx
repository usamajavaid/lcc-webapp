import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Location from '../Images/location2.png';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Maps extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '65vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBzExTO3QalBTBDIX5BsLcPzVoHI7X2ya8" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text= {<img src={Location}/>}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Maps;