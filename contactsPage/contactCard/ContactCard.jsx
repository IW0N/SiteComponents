import React from "react";
import "./ContactCard.css"
import Contact from "./Contact";
import SocialNetwork from "./SocialNetwork"
import TextContentBox from "./TextContentBox";
//props: contact,contactNetwork
export default class ContactCard extends React.Component
{
    get Contact(){return this.props.contact}
    get SocialNetwork(){return this.props.socialMedia}
    render()
    {
        return(
            <div className="contentBox">
                <img src={this.Contact.PhotoSrc}/>
                <TextContentBox contact={this.Contact} socialMedia={this.SocialNetwork}/>
            </div>
        )
    }
}