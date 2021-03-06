import React, { useEffect, useState } from 'react';
import { feed } from './api/feed';
import { login } from './api/user';
import {  saveTicket, deleteTicketReq } from './api/feed';

import { Ticket } from './components/Ticket';
import style from './App.module.css'
import { Login } from './components/login';
import { getWithExpiry, setWithExpiry } from './libs/storage';
import { NavBar } from './components/NavBar';
import { Chart } from './components/chart';


type iTicket = { 
  porpuse: string; 
  total: number; 
  description?: string;
  _id: string;
}
function App() {
  const [tickets, setTickets] = useState<iTicket[]>([])
  const [porpuse, setPorpuse] =  useState<string>('')
  const [total, setTotal] =  useState<number>(0)
  const [description, setDescription] =  useState<string>('')
  const [token, setToken] = useState<string>('')

  const appendTicket = async () => { 
    setPorpuse('');
    setTotal(0);
    setDescription('');
    await saveTicket(token, {porpuse, total, description})
    await getFeed()


  }

  const deleteTicket = async (ticketId: string) => {
    if(!confirm("are you sure want to delete the ticket ? ")){ 
      return
    }
     await deleteTicketReq(token, ticketId)
     await getFeed()
  }

  const signIn = async(username: string, password: string) => { 
    const token = await login(username, password)
    if(!token) { 
      return alert("error with signing in ")
    }
    setWithExpiry('token', token, 2)
    setToken(token);
    await getFeed()
  }

  const getFeed =async() => {
    const token = getWithExpiry('token')
    if(token) { 
      setToken(token);
      const tickets = await feed(token)
      setTickets(tickets)
    }
  }

  useEffect(()=> {
    getFeed()
  },[])

  if(!token){ 
    return <Login signIn={signIn} />
  }

  return (
    <>
        <NavBar token={token} setToken={setToken}/>
        <div className={style.inputs}>
          <input type="text" value={porpuse} onChange= {({target}) => setPorpuse(target.value)} placeholder="purpose" />
          <input type="number" min="0" value={total} onChange= {({target}) => setTotal(parseFloat(target.value))} placeholder="total" />
          <input type="text" value={description} onChange= {({target}) => setDescription(target.value)} placeholder="description" />
          <button onClick={appendTicket} disabled={!(porpuse && porpuse)} > save</button>
        </div>
        <div>
          total amount: {tickets.reduce((partialSum, ticket) => partialSum + ticket.total, 0)} / 2000 shekels
        </div>
        <div className={style.Tickets}>
        { tickets.map(ticket => <Ticket key={ticket._id} {...ticket} deleteTicket={deleteTicket} />) }
        </div>
        <Chart />
    </>
  );
}

export default App;

