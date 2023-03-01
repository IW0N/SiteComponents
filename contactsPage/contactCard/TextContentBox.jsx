import React, { useEffect } from "react";
import "./TextContentBox.css"
//props: contact,className
export default class TextContentBox extends React.Component
{
    render()
    {
        const contact=this.props.contact
        const socialMedia=this.props.socialMedia;
        const socialMediaName=socialMedia.Name
        const link=socialMedia.Link
        const contactId=contact.Id
        const socialNetwork=<a className="link" href={link}>{socialMediaName}</a>
        const moreDetailed=<a className="link" href={`/contacts/${contactId}`} style={this.socialNameStyle}>Подробнее</a>;
        return (
            <div className="textContentBox">
                <span className="name1">{contact.Name}</span>
                <div className="descrBlock">{contact.ShortDescription}</div>
                <div className="links">
                    {socialNetwork}
                    {moreDetailed}
                </div>
            </div>)
    }
}