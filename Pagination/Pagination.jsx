import { Component } from "react";
import "./Pagination.css"
import Pagination from "@mui/material/Pagination";
import { PaginationItem } from "@mui/material";
const Back=()=>(
    <div style={{display:'flex'}}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow">
            <path d="M10 20L11.7625 18.2375L4.7875 11.25L20 11.25V8.75L4.7875 8.75L11.7625 1.7625L10 0L0 10L10 20Z" fill="#545454"/>
        </svg>
        <span className="text backText">Назад</span>
    </div>
)
const Next=()=>(<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow">
<path d="M10 0L8.2375 1.7625L15.2125 8.75H0V11.25H15.2125L8.2375 18.2375L10 20L20 10L10 0Z" fill="#E53440"/>
</svg>
)
export default class SdrPagination extends Component
{
    render()
    {
        return  <Pagination 
                    siblingCount={2} 
                    count={21} 
                    shape="rounded"
                    renderItem={
                        (item)=>(<PaginationItem slots={{previous:Back,next:Next}} {...item}/>)}
                    onChange={(event,val)=>
                    {
                        if(val>1)
                        {
                            const className='MuiPaginationItem-previousNext';
                            const element=document.getElementById(className);
                            document.documentElement.style+=""
                        }
                    }}
                    />
    }
}