import React, { Component } from "react"
import Footer from "../../footer/Footer"
import Header from "../../header/Header"
import JoinUsBlock from "../../joinUsBlock/JoinUsBlock"
import Breadcrumbs from "../../breadcrumbs/BreadCrumbs"
import AboutPartyBlock from "../../aboutPartyBlock/AboutPartyBlock"
import "./PageTemplate.css"
import SdrPagination from "../../Pagination/Pagination"
//props: content, hasJoinUsBlock,has
export default abstract class PageTemplate extends Component
{
    protected readonly content:any
    protected readonly breadCrumbsItems:any[]
    protected readonly showJoinUsBlock:boolean
    protected readonly title:string
    protected showAboutPartyBlock=false;
    constructor(props)
    {
        super(props)
    }
    isVoid(value)
    {
        return value==null||value==undefined;
    }
    render(): React.ReactNode 
    {
        
        const joinUsBlock=this.showJoinUsBlock?<JoinUsBlock/>:null;
        const aboutPartyBlock=this.showAboutPartyBlock?<AboutPartyBlock/>:null;
        let titleContent=<div className="title">{this.title}</div>;
        let breadcrumbsContent;
        if(this.isVoid(this.title))
        {
            titleContent=<></>;
        }
        if(this.isVoid(this.breadCrumbsItems)){
            breadcrumbsContent=<></>
        }
        else{
            breadcrumbsContent=<Breadcrumbs items={this.breadCrumbsItems}/>
        }
        return (
            <div className="page">
                <Header/>
                <div className="mainWrapper">
                    {breadcrumbsContent}
                    {titleContent}
                    <div className="content">
                        {this.content}
                    </div>
                    <SdrPagination/>
                </div>
                {aboutPartyBlock}
                {joinUsBlock}
                <Footer/>
            </div>)
    }
}