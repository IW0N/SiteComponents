import PostQuantity from "./PostQuantity"
import React from "react"
import "./PostCategoryCard.css"
//props: category
//category={id:string,name:string,quantity:number,link:string}
export default class CategoryCard extends React.Component
{
    redirectToCategoryPage()
    {
        const themeId=this.#category.id;
        console.log(this.#category)
        window.location.href="/posts/categories/"+themeId
    }
    get #category()
    {
        return this.props.category;
    }
    constructor(props)
    {
        super(props)
        this.redirectToCategoryPage=this.redirectToCategoryPage.bind(this)
    }
    render()
    {
        const quantity=this.#category.quantity
        const text=this.#category.name
        
        return (
        <div className="categoryCard" onClick={this.redirectToCategoryPage}>
            <PostQuantity quantity={quantity}/>
            <span>{text}</span>
        </div>)
    }
}