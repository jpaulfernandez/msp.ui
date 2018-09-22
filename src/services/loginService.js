import * as axios from "axios";

class LoginService {
    
    static login(userName, password) {
        return new Promise((resolve, reject) => {
            axios.post('http://localhost:8080/public/v1/auth', {
                username: 'admin',
                password: 'admin'
            }).then(res => {
                resolve(res.data);
            }, rej => {
                reject(rej);
            })
        });
    }

    logout() {
    }
}

export default LoginService;