import React from "react";
import { connect } from "react-redux";
import { getIpLocations } from "../store/selectors";
import { fetchIpLocation } from "../store/actions";
import Header from "./Header";
import Actions from "./Actions";
import IpItem from "./IpItem";
import "./Main.css";

interface MainProps {
    fetchIpLocation: () => void;
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
            return <IpItem index={index + 1} key={index} />;
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

export default connect(
    (state) => ({
        locations: getIpLocations(state)
    }),
    {
        fetchIpLocation
    }
)(Main);
