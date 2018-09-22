import { ROUTE_REQUEST, ROUTE_SUCCESS, ROUTE_FAILED } from '../constants/route';
import RouteService from '../services/routeService';

export const RequestRoute = (parentName) => (dispatch) => {
    dispatch(request({}));
    RouteService.getRoute(parentName)
                .then(resolve => dispatch(sucess(resolve)));
}

const request = (payload) => ({type: ROUTE_REQUEST, payload});
const sucess = (payload) => ({type: ROUTE_SUCCESS, payload});
const failed = (payload) => ({type: ROUTE_FAILED, payload}); 