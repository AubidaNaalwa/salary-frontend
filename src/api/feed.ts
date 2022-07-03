import axios from 'axios'
import { API_URL } from './consts'

export const feed = async (token: string) => { 
    try {
        axios.defaults.baseURL = API_URL
        const res2 = await axios.get(`feed/tickets`, {params: {
            token
        }})
        return res2.data.tickets || []
    } catch (error) {
        console.error("feed error")
        return []
    }
} 

export const saveTicket = async (token: string, bodyRequest: Object)=> { 
    try {
        axios.defaults.baseURL = API_URL
        const res2 = await axios.post(`feed/ticket`,  bodyRequest ,{params: {
            token
        }})
        return res2.data.tickets || []
    } catch (error) {
        console.error("feed error")
        return []
    }
}

export const deleteTicketReq = async (token: string, ticketId: string)=> { 
    try {
        axios.defaults.baseURL = API_URL
        const res2 = await axios.delete(`feed/delete-ticket/${ticketId}` ,{params: {
            token
        }})
        return res2.data.tickets || []
    } catch (error) {
        console.error("delete ticket error")
        return []
    }
}