import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 5000, 
    headers:{
        'Bearer': localStorage.token,
        'Content-type':'application/json',
        'Accept':'application/json',
        'Access-Control-Allow-Origin':'*',
        'Authorization':'Token 41f732204651723a6cb2869899852bd8'
    }
})