import { Action } from "./reducer";
import fetch from "cross-fetch";

export const FETCH_IP_LOCATION = "FETCH_IP_LOCATION";
function getIpLocation(location: string): Action {
    return {
        type: FETCH_IP_LOCATION,
        payload: { locations: [location] }
    };
}

export function fetchIpLocation() {
    return function(dispatch: any) {
        return fetch("/v1/ip2country?find=ip")
            .then(() => {
                dispatch(getIpLocation(""));
            });
    };
}