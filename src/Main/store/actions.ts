import { Action } from "./reducer";
import fetch from "cross-fetch";

export const FETCH_IP_LOCATION = "FETCH_IP_LOCATION";
function getIpLocation(location: {[ip: string]: string}): Action {
    return {
        type: FETCH_IP_LOCATION,
        payload: { location: location }
    };
}

export function fetchIpLocation(ip: string) {
    return function(dispatch: any) {
        return fetch(`/v1/ip2country?find=${ip}`)
            .then(() => {
                const response = {country: "Israel"};

                dispatch(getIpLocation({[ip]: response.country}));
            });
    };
}