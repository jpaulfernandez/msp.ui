import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT} from '../constants/login';

const initialState = {
    token:'',
    isLoggedIn: false,
    isPending: true
};

const Login = (state = initialState, action = {}) => {
    switch (action.type)
    {
        case LOGIN_REQUEST:
            return Object.assign({}, state, {isPending: true});
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {isPending: false, isLoggedIn: true});
        case LOGIN_FAILED:
            return Object.assign({}, state, {error: action.payload});
        case LOGOUT: 
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
};

export default Login;