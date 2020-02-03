import React from "react";
import TextField from "@material-ui/core/TextField";
import "./IpItem.css";

type IpItemProps = {
    index: number;
    fetchLocation: (ip: string) => void;
};

const IpItem: React.FC<IpItemProps> = ({ index, fetchLocation }: IpItemProps): JSX.Element => {
    return (
        <div className="ip-item">
            <div className="row-id">{index}#</div>
            <TextField variant="outlined" size="small" onBlur={(event) => fetchLocation(event.target.value)} />
        </div>
    );
};

export default IpItem;
