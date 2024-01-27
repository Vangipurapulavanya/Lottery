 import { useState } from "react"
 import "./Lottery.css"
import { genTicket, sum } from "./assets/helper";
import Ticket from "./assets/Ticket";
 

export default function Lottery({n =3, winningsum =15}){
   let [ticket,setTicket] = useState(genTicket(3));
    let isWinning = sum(ticket) === winningsum;

    let buyTicket = () => {
      setTicket(genTicket(n));
    }
    return(
        <div>
            <h1>Lottery Game !</h1>
            <Ticket ticket={ticket}/>
          
          <button onClick={buyTicket}>Buy New Ticket</button>
            <h2>{isWinning && "Congratulations, you won !"}</h2> 
        </div>
    )
};