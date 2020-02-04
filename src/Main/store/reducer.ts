import {FETCH_IP_LOCATION, SET_LOADING} from "./actions";

export type State = {
    locations: { [ip: string]: string };
    loading: { [ip: string]: boolean };
};

export type Action = {
    type: string;
    payload: Partial<State>;
};

const initialState: State = {
    locations: {},
    loading: {}
};

export default function locations(state = initialState, action: Action) {
    const { type, payload } = action;
    if (type === FETCH_IP_LOCATION) {
        return {
            ...state,
            loading: payload.loading,
            locations: { ...state.locations, ...payload.locations }
        };
    } else if (type === SET_LOADING) {
        return {
            ...state,
            loading: { ...state.loading, ...payload.loading }
        }
    } else {
        return state;
    }
}
