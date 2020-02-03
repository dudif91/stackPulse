import { FETCH_IP_LOCATION } from "./actions";

export type State = {
    locations: string[]
};

export type Action = {
    type: string;
    payload: Partial<State>;
};

const initialState: State = {
    locations: []
};

export default function locations(state = initialState, action: Action) {
    const { type, payload } = action;
    if (type === FETCH_IP_LOCATION) {
        return {
            ...state,
            locations: payload.locations
        };
    } else {
        return state;
    }
}
