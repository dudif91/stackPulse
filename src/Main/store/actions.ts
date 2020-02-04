import { Action } from "./reducer";
import fetch from "cross-fetch";

export const FETCH_IP_LOCATION = "FETCH_IP_LOCATION";
function getIpLocation(location: { [ip: string]: string }, loading: { [ip: string]: boolean }): Action {
    return {
        type: FETCH_IP_LOCATION,
        payload: { locations: location, loading }
    };
}

export const SET_LOADING = "SET_LOADING";
function setLoading(loading: { [ip: string]: boolean }) {
    return {
        type: SET_LOADING,
        payload: { loading }
    };
}

export function fetchIpLocation(ip: string) {
    return function(dispatch: any) {
        dispatch(setLoading({ [ip]: true }));
        return fetch(`/v1/ip2country?find=${ip}`).then(async () => {
            let response;

            if (!ip) {
                return;
            }

            if (ip.startsWith("1")) {
                response = { country: "Israel" };
            } else if (ip.startsWith("2")) {
                response = { country: "Usa" };
            } else {
                response = { country: "China" };
            }

            await new Promise((r) => setTimeout(r, 5000));

            dispatch(getIpLocation({ [ip]: response.country }, { [ip]: false }));
        });
    };
}
