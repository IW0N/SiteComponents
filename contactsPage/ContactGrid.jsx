import {Component} from "react";
import "./ContactGrid.css"
//props:contacts
export default class ContactGrid extends Component
{
    render()
    {
        return (
            <div className="contactGrid">
                {this.props.contacts}
            </div>
        )
    }
}