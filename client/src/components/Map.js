import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { Spin } from 'antd';

import { getCoordinatesFromAddress } from "../utils/Geolocator";

const MapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyB3ikzce_N3sxXJMCb4GWv-k-HxbsRJkwk&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%`}} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) =>  <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: props.lat, lng: props.lng }}
    >
        {<Marker position={{ lat: props.lat, lng: props.lng }} />}
    </GoogleMap>
);

class Map extends React.Component {

    constructor() {
        super();
        this.state = {
            loaded: false
        }
    }

    async componentDidMount() {
        let res = await getCoordinatesFromAddress("saint peter's")
        this.setState({loaded: true, res: res})
    }

    render() {
        if (this.state.loaded) {
            return <MapComponent
                lat={this.state.res.lat}
                lng={this.state.res.lng}
            />
        }
        return <div className={"empty-map center"}>
            <Spin />
        </div>
    }
}

export default Map
