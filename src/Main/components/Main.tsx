import React from "react";
import { connect } from "react-redux";
import { getIpLocations } from "../store/selectors";
import { fetchIpLocation } from "../store/actions";

interface MoviesAndWeatherProps {
    fetchIpLocation: () => void;
}

class MoviesAndWeather extends React.Component<MoviesAndWeatherProps> {
    componentDidMount(): void {
        this.props.fetchIpLocation();
    }

    render(): React.ReactElement {
        return (
            <div className="main-div">

            </div>
        );
    }
}

export default connect(
    (state) => ({
        locations: getIpLocations(state)
    }),
    {
        fetchIpLocation
    }
)(MoviesAndWeather);