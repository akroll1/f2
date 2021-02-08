import React from 'react'
// import {GoogleApiWrapper} from 'google-maps-react';
import GoogleMapReact from 'google-map-react'
// import MapSection from './components/map/Map' // import the map here

// import './map.css'


const GoogleMap = ({boxerLatLong}) => {
    console.log('boxerLatLong: ',boxerLatLong);
    const location = {
        address: '1600 Amphitheatre Parkway, Mountain View, california.',
        lat: boxerLatLong[1],
        lng: boxerLatLong[0],
    }
    return (
        <div style={{width: '100%',height: '350px'}}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
                defaultCenter={location}
                defaultZoom={11}
                >
                {/* <LocationPin
                lat={location.lat}
                lng={location.lng}
                text={location.address}
            /> */}
            </GoogleMapReact>
        </div>
    )
}
export default GoogleMap