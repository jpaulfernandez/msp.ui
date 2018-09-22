import { USER_REQUESTED, 
         USER_SUBMITTED, 
         USER_REQUEST_SUCCESS, 
         USER_SUBMIT_SUCCESS, 
         USER_REQUEST_FAILED, 
         USER_SUBMIT_FAILED, 
         USER_REQUEST_PENDING, 
         USER_SUBMIT_PENDING,
         USER_MODEL_CHANGE} from '../constants/user';

const initialState = {
    firstName: '',
    lastName: '',
    middleName: '',
    role: '',
    employeeId: '',
    civilStatus: '',
    birthday: '',
    contactNo: '',
    email: '',
    password: '',
    password2: '',
    profilePicture: 'https://png.icons8.com/color/200/000000/user.png'
}

const Route = (state = initialState, action = {}) => {
    switch (action.type)
    {
        case USER_REQUESTED:
            console.log('request user');
            return Object.assign({}, state, {isPending: true});
        case USER_REQUEST_SUCCESS:
            console.log(action.payload);
            return Object.assign({}, state, action.payload);
        case USER_REQUEST_FAILED:
            return Object.assign({}, state, {error: 'unable to get user', isPending:false});
        case USER_SUBMITTED:
            return Object.assign({}, state);
        case USER_SUBMIT_SUCCESS:
            return Object.assign({}, state, {success: true})
        case USER_SUBMIT_FAILED:
            return Object.assign({},state,{success: false});
        case USER_MODEL_CHANGE:
            console.log(action.payload);
            return Object.assign({}, state, action.payload)
        default:
            return state;
    }
};

export default Route;