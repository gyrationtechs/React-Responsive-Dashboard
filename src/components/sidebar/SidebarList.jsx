import React from 'react'
import './sidebarList.css';

export default function SidebarList(props) {
    return (
        <div>
            <h3 className="sidebarTitle">{props.title}</h3> 
            <ul className="sidebarList">
                <li className={`sidebarListItem ${props.active}`}>
                {props.sidebarIconOne}
                {props.listOne}    
                </li>    
                <li className="sidebarListItem">
                {props.sidebarIconTwo}
                {props.listTwo}    
                </li>    
                <li className="sidebarListItem">
                {props.sidebarIconThree}
                {props.listThree}   
                </li>    
                <li className="sidebarListItem">
                {props.sidebarIconFour}
                {props.listFour}   
                </li>    
            </ul>   
        </div>
    )
}
