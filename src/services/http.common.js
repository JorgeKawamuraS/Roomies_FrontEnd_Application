import axios from 'axios'

export default axios.create({
    //baseURL: 'https://localhost:44356/api',
    baseURL: 'https://roomiesapi20220418164342.azurewebsites.net/api',
    headers: {
        'Content-type':'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }
});