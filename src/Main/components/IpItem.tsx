import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import "./IpItem.css";

type IpItemProps = {
    index: number;
    fetchLocation: (ip: string) => void;
    locations: { [ip: string]: string };
    loading: boolean;
};

const IpItem: React.FC<IpItemProps> = ({ index, fetchLocation, locations, loading }: IpItemProps): JSX.Element => {
    const [value, setValue] = useState("");

    return (
        <div className="ip-item">
            <div className="row-id">{index}#</div>
            <TextField
                variant="outlined"
                size="small"
                disabled={loading}
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
