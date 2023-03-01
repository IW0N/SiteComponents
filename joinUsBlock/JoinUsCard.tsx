import React from 'react'
import "./JoinUsCard.css"
//@ts-ignore
import { ReactComponent as Arrow } from "./arrow.svg"
export default abstract class JoinUsCard extends React.Component
{
    protected abstract text:string
    protected abstract joinLinkText:string
    protected abstract joinLink:string
    render(): React.ReactNode
    {
        
        return (
        <div className="joinUsCard" onClick={()=>window.location.assign(this.joinLink)}>
            <Arrow/>
            <div className='joinCardDescript'>{this.text}</div>
            <span className='joinLinkText'>{this.joinLinkText} →</span>
        </div>)       
    }
}