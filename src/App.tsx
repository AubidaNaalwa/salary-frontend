import React, { useEffect, useState } from 'react';
import { feed } from './api/feed';
import { login } from './api/user';
import {  saveTicket, deleteTicketReq } from './api/feed';

import { Ticket } from './components/Ticket';
import style from './App.module.css'
import { Login } from './components/login';


type iTicket = { 
  porpuse: string; 
  total: number; 
  description?: string;
  _id: string;
}
function App() {
  const [tickets, setTickets] = useState<iTicket[]>([])
  const [porpuse, setPorpuse] =  useState<string>('')
  const [total, setTotal] =  useState<number>(.0)
  const [description, setDescription] =  useState<string>('')
  const [token, setToken] = useState<string>('')

  const appendTicket = async () => { 
    await saveTicket(token, {porpuse, total, description})
    const tickets = await feed(token)
    setTickets(tickets)
  }

  const deleteTicket = async (ticketId: string) => {
     await deleteTicketReq(token, ticketId)
     const tickets = await feed(token)
     setTickets(tickets)
  }

  const signIn = async(username: string, password: string) => { 
    const token = await login(username, password)
    setToken(token);
    const tickets = await feed(token)
    setTickets(tickets)
  }

  if(!token){ 
    return <Login signIn={signIn}/>
  }
  return (
    <>
        <div>
          <span>porpuse : </span>
          <input type="text" value={porpuse} onChange= {({target}) => setPorpuse(target.value)}/>
          <span > total : </span>
          <input type="number" min="0" value={total} onChange= {({target}) => setTotal(parseFloat(target.value))} />
          <span> description : </span>
          <input type="text" value={description} onChange= {({target}) => setDescription(target.value)} />
          <button onClick={appendTicket}> save</button>
        </div>
        <div className={style.Tickets}>
        { tickets.map(ticket => <Ticket key={ticket._id} {...ticket} deleteTicket={deleteTicket}/>) }
        </div>
    </>
  );
}

export default App;

