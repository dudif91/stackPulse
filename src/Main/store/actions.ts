import { Action } from "./reducer";
import fetch from "cross-fetch";

export const FETCH_IP_LOCATION = "FETCH_IP_LOCATION";
function getIpLocation(location: {[ip: string]: string}): Action {
    return {
        type: FETCH_IP_LOCATION,
        payload: { locations: location }
    };
}

export const SET_LOADING = "SET_LOADING";
function setLoading(loading: boolean) {
    return {
        type: SET_LOADING,
        payload: { loading }
    }
}

export function fetchIpLocation(ip: string) {
    return function(dispatch: any) {
        dispatch(setLoading(true));
        return fetch(`/v1/ip2country?find=${ip}`)
            .then(() => {
                let response;

                if (!ip) {
                    return;
                }

                if (ip.startsWith("1")) {
                    response = {country: "Israel"};
                } else if (ip.startsWith("2")) {
                    response = {country: "Usa"};
                } else {
                    response = {country: "China"};
                }

                dispatch(getIpLocation({[ip]: response.country}));
            });
    };
}