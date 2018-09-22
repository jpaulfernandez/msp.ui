import { path } from '../helpers/path';


class RouteService {
    static getRoute(parent) {
        return new Promise((resolve, reject) => {
            path.map((p,i) => {
                if (path[i].name === parent) {
                    let { title, subTitle, sub } = path[i];
                    resolve({
                        title,
                        subTitle,
                        sub
                    });
                }
            });
        });
    }
}

export default RouteService;