import React from "react";
import { IconButton } from "@material-ui/core";
import { Cancel } from "@material-ui/icons";
import "./Header.css";

const Header: React.FC = (): JSX.Element => {
    return (
        <div className="header">
            <div>IP Lookup</div>
            <IconButton>
                <Cancel/>
            </IconButton>
        </div>
    );
};

export default Header;
