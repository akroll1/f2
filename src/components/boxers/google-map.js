import React from 'react'
import { withScriptjs,withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const GMap = withScriptjs(withGoogleMap((props) => {
    const {boxerLatLong} = props; 
    console.log('boxerLatLong: ',boxerLatLong);
    const location = {
        address: '1600 Amphitheatre Parkway, Mountain View, california.',
        lat: boxerLatLong[1],
        lng: boxerLatLong[0],
    }
    return (
        <div style={{width: '100%',height: '350px'}}>
              <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
            >
                {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}

            </GoogleMap>
        </div>
    )
}))
export default GMap