import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyB3ikzce_N3sxXJMCb4GWv-k-HxbsRJkwk&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%`}} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: props.lat, lng: props.lgn }}
    >
        {<Marker position={{ lat: props.lat, lng: props.lgn }} onClick={props.onMarkerClick} />}
    </GoogleMap>
);

export function Map() {
    return <MapComponent
                lat={-34.397}
                lgn={150.644}
            />
}
