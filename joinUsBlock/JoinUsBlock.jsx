import React from "react";
import FounderCard from "./FounderCard";
import BotCard from "./BotCard";
import "./JoinUsBlock.css"
export default class JoinUsBlock extends React.Component
{
    render()
    {
        
        return(
            <div className="joinUsBlock">
                <div className="mainWrapper">
                    <span className="label">
                        Если вы разделяете наши<br/>
                        ценности и цели и хотите помочь — <br/>
                        <span className="redLabel">присоединяйтесь к нашей работе!</span>
                    </span>
                    <div className="cards">
                        <FounderCard/>
                        <BotCard/>
                    </div>
                </div>
                
            </div>
        )
    }
}