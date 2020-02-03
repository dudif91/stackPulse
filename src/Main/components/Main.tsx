import React from "react";
import { connect } from "react-redux";
import { getIpLocations } from "../store/selectors";
import { fetchIpLocation } from "../store/actions";
import "./Main.css";
import Header from "./Header";

interface MoviesAndWeatherProps {
    fetchIpLocation: () => void;
}

class MoviesAndWeather extends React.Component<MoviesAndWeatherProps> {
    render(): React.ReactElement {
        return (
            <div className="main-div">
                <Header />
                <div className="instructions">Enter one or more IP addresses and get their country</div>
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
