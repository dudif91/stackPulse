import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import "./Actions.css";

const Actions: React.FC = (): JSX.Element => {
    return (
        <div className="actions">
            <div>it will search as type</div>
            <Fab color="primary" aria-label="add" size="small">
                <AddIcon />
            </Fab>
        </div>
    );
};

export default Actions;
