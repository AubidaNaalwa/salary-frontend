import React, { FC } from "react";
import style from './Ticket.module.css'

type Props = { 
    porpuse: string; 
    total: number; 
    description?: string;
}

export const Ticket:FC<Props>= ({porpuse, total, description}) => {
    return(
        <div className= {style.ticket}>
            <div>
            porpuse: {porpuse}
            </div>
            <div>
            total: {total}
            </div>
            <div>
            description: {description}
            </div>
            <button >
                update
            </button>
            <button>
                delete
            </button>
            
        </div>
    )
} 
