import React, {useState, useEffect} from "react"
import {compose, withProps} from "recompose"
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"
import {Spin} from 'antd';

import {getCoordinatesFromAddress} from "../utils/Geolocator";
import {useSelector} from "react-redux";

const MAPS_KEY = process.env.REACT_APP_MAPS_API_KEY;

const MapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key="+MAPS_KEY+"&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100%` }} />,
        mapElement: <div style={{ height: `100%`}} />,
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
    const [loaded, setLoaded] = useState(false)
    const [res, setRes] = useState({})
    const address = useSelector((state) => state.users)

    useEffect(updateMap, [address]);

    async function updateMap() {
        console.log("updating map. address: ", address)
        if (address && address.length > 0) {
            let res = await getCoordinatesFromAddress(address[0].address)
            setLoaded(true)
            setRes(res)
        }
    }

    if (loaded) {
        return <MapComponent
            lat={res.lat}
            lng={res.lng}
        />
    }
    return <div className={"empty-map center"}>
        <Spin/>
    </div>
}

export default Map
