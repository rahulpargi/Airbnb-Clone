import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './App.css';
import Flat from './components/flat';
import Marker from './components/marker'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      flats:[]
    };
  }

  componentDidMount(){
    const url="https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json";
    fetch(url)
    .then(response=>response.json())
    .then((data)=>{
      console.log(data);
      this.setState({
        flats:data
      });
    })
  }
;
  render() {
    
  const center={
   
    lat: 48.8566,
    lng: 2.3522
  
}
const key="AIzaSyAIW-eWe8hZlWjIc5o3V7wcmI3Z0GTpbS4";
     return (
      <div className="app">
          <div className="main">
            <div className="search">
            </div>
            <div className="flats">
              {this.state.flats.map((flat)=>{
                return <Flat flat={flat}/>
              })}
            </div>
            
          </div>
          <div className="map">
          <GoogleMapReact
          bootstrapURLKeys={{ key:key}}
          center={center}
          zoom={11}
        >
         {this.state.flats.map((flat)=>{
                return <Marker lat={flat.lat} lng={flat.lng} text={flat.price}/>
              })}
        </GoogleMapReact>
          </div>
      </div>
    );
  }
}

export default App;
