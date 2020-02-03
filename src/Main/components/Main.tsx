import React from "react";
import { connect } from "react-redux";
import { getIpLocations, isLoading } from "../store/selectors";
import { fetchIpLocation } from "../store/actions";
import Header from "./Header";
import Actions from "./Actions";
import IpItem from "./IpItem";
import "./Main.css";

interface MainProps {
    fetchIpLocation: (ip: string) => void;
    locations: { [ip: string]: string };
    loading: boolean;
}

interface MainState {
    rows: string[];
}

class Main extends React.Component<MainProps, MainState> {
    state: MainState = {
        rows: [""]
    };

    getIpRows = (): JSX.Element[] => {
        return this.state.rows.map((row, index) => {
            return <IpItem index={index + 1} key={index} fetchLocation={this.props.fetchIpLocation} locations={this.props.locations} loading={this.props.loading} />;
        });
    };

    addRow = (): void => {
        this.setState((prevState) => {
            const rows = prevState.rows;
            rows.push("");

            return {
                rows
            };
        });
    };

    render(): React.ReactElement {
        return (
            <div className="main-div">
                <Header />
                <div className="instructions">Enter one or more IP addresses and get their country</div>
                <Actions addRow={this.addRow} />
                <div className="rows-div">{this.getIpRows()}</div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchIpLocation: (ip: string) => dispatch(fetchIpLocation(ip))
    };
};

export default connect(
    (state) => ({
        locations: getIpLocations(state),
        loading: isLoading(state)
    }),
    mapDispatchToProps
)(Main);
