import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import "./IpItem.css";

type IpItemProps = {
    index: number;
    fetchLocation: (ip: string) => void;
    locations: { [ip: string]: string };
};

const IpItem: React.FC<IpItemProps> = ({ index, fetchLocation, locations }: IpItemProps): JSX.Element => {
    const [value, setValue] = useState("");

    return (
        <div className="ip-item">
            <div className="row-id">{index}#</div>
            <TextField
                variant="outlined"
                size="small"
                onBlur={(event) => {
                    fetchLocation(event.target.value);
                    setValue(event.target.value);
                }}
            />
            <div className="location">{locations[value]}</div>
        </div>
    );
};

export default IpItem;
