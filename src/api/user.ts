import axios from 'axios'
import { API_URL } from './consts'
axios.defaults.baseURL = API_URL
export const login = async (email:string, password:string) => { 
    try {
        axios.defaults.baseURL = "https://salary-backend-server.herokuapp.com/"
        const res = await axios.post(`user/login`, { email, password})
        axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`
        return res.data.token || '';
    } catch (error) {
        console.error("fail login ")
    }
} 

export const signUp =() => { 

}