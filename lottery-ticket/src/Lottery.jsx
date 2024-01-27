 import { useState } from "react"
// import Ticket from "./assets/Ticket";
 import "./Lottery.css"
import { genTicket, sum } from "./assets/helper";
 

export default function Lottery(){
   let [ticket,setTicket] = useState(genTicket(3));
    let isWinning = sum(ticket) === 15;
    return(
        <div>
            <h1>Lottery Game !</h1>
          <div className="ticket">
            <span>{ticket[0]}</span>
            <span>{ticket[1]}</span>
            <span>{ticket[2]}</span>
          </div>
            <h2>{isWinning && "Congratulations, you won !"}</h2> 
        </div>
    )
};