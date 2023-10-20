import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })
API.interceptors.request.use((req) => {
    if (localStorage.getItem('accessToken')) {
        req.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
    }
    return req;
});


export const getAllStores = () => API.get('/store/allStores')

export const getStore = (storeId: string) => API.get('/store/' + storeId)