import React, { FC } from "react";
import style from './Ticket.module.css'

type Props = {
    _id: string;
    porpuse: string; 
    total: number; 
    description?: string;
    deleteTicket: (id:string)=>void;
}

export const Ticket:FC<Props>= ({porpuse, total, description, deleteTicket, _id}) => {
    const updateTicket =() => { 

    }


    return(
        <div className= {style.ticket}>
                        <div>
            id: {_id}
            </div>
            <div>
            porpuse: {porpuse}
            </div>
            <div>
            total: {total}
            </div>
            <div>
            description: {description}
            </div>
            <button onClick={updateTicket}>
                update
            </button>
            <button onClick={()=> deleteTicket(_id)}>
                delete
            </button>
        </div>
    )
} 
