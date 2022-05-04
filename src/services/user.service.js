import axios from 'axios';
import authHeader from "@/services/auth-header";

//const API_URL = 'https://localhost:44356/api/users';
const API_URL = 'https://roomiesapi20220418164342.azurewebsites.net/api/users';

class UserService {
    getAll() {
        console.log(authHeader());
        return axios.get(API_URL, { headers: authHeader() });
    }
}

export default new UserService();
