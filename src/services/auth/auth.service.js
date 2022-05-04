// auth.service.js
// Authentication Service
import axios from 'axios';

//const API_URL = 'https://localhost:44356/api/users/authenticate';
const API_URL = 'https://roomiesapi20220418164342.azurewebsites.net/api/users/authenticate';
class AuthService {
    login(user) {
        console.log('About to request');
        return axios.post(API_URL, JSON.stringify({
                username: user.username,
                password: user.password}),
            {headers: {'Content-Type': 'application/json'}})
            .then(function (response)  {
                console.log(`Response arrived with status ${response.status}`);
                if (response.data.token) {
                    console.log(`user: ${response.data}`);
                    localStorage.setItem('user', JSON.stringify(response.data));
                }
                console.log(user);
                console.log(response.data.result)
                return response.data.result;
            })
            .catch(function (error)  {
                if (error.response) {
                    console.log(error.response.status);
                    console.log(error.response.data);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log(error.message);
                }
                console.log(error.config);
                return error;
            });
    }
    logout() {
        localStorage.removeItem('user');
    }
    register(user) {
        return axios.post('https://roomiesapi20220418164342.azurewebsites.net/api/users', {
        //return axios.post('https://localhost:44356/api/users', {
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            password: user.password
        });
    }
}

export default new AuthService();
