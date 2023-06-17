import axios from 'axios';

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key: "d5584497724a48d9a075d2b39c3c6c6d"
    }
})