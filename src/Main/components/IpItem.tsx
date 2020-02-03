import React from "react";
import TextField from "@material-ui/core/TextField";
import "./IpItem.css";

type IpItemProps = {
    index: number;
};

const IpItem: React.FC<IpItemProps> = ({ index }: IpItemProps): JSX.Element => {
    return (
        <div className="ip-item">
            <div className="row-id">{index}#</div>
            <TextField variant="outlined" size="small" />
        </div>
    );
};

export default IpItem;
