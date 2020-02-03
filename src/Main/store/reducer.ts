import { FETCH_IP_LOCATION } from "./actions";

export type State = {
    locations: {[ip: string]: string}
};

export type Action = {
    type: string;
    payload: {location: {[ip: string]: string}};
};

const initialState: State = {
    locations: {}
};

export default function locations(state = initialState, action: Action) {
    const { type, payload } = action;
    if (type === FETCH_IP_LOCATION) {
        return {
            ...state,
            locations: {...state.locations, ...payload.location}
        };
    } else {
        return state;
    }
}
