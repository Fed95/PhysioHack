import React, {useState, useEffect} from "react"
import {compose, withProps} from "recompose"
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"
import {Spin} from 'antd';

import {getCoordinatesFromAddress} from "../utils/Geolocator";
import {useSelector} from "react-redux";

const MAPS_KEY = process.env.REACT_APP_MAPS_API_KEY;

const MapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=" + MAPS_KEY + "&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{height: `100%`}}/>,
        containerElement: <div style={{height: `100%`}}/>,
        mapElement: <div style={{height: `100%`}}/>,
    }),
    withScriptjs,
    withGoogleMap
)((props) => <GoogleMap
        defaultZoom={8}
        defaultCenter={{lat: props.lat, lng: props.lng}}
    >
        {<Marker position={{lat: props.lat, lng: props.lng}}/>}
    </GoogleMap>
);

const Map = () => {


        return <MapComponent
            //lat={res.lat}
            //lng={res.lng}
            lat={45.464664}
            lng={9.188540}
        />
}

export default Map
