import {ROUTE_REQUEST, ROUTE_SUCCESS, ROUTE_FAILED} from '../constants/route';
const initialState = {
    route: {
        title: '',
        subTitle: '',
        sub: []
    }
}

const Route = (state = initialState, action = {}) => {
    switch (action.type)
    {
        case ROUTE_REQUEST:
            return Object.assign({}, state, {isPending: true});
        case ROUTE_SUCCESS:
            return Object.assign({}, state, {route: action.payload, isPending: false});
        case ROUTE_FAILED:
            return Object.assign({}, state, {error: action.payload});
        default:
            return state;
    }
};

export default Route;