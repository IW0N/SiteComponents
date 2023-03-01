import React from "react";
//props: quantity, size
export default class PostQuantity extends React.Component
{

    render()
    {
        return(
        <div className="postQuantity">
            {this.props.quantity}
        </div>)
    }
}