import React from "react";

function List(props){
    return(
        <ul className="ContainerList">
            {props.items.map(item =>
            <li className="Base" key={item}>{item.text}
            <button onClick={()=>{props.onItemDeleted(item)}}>
            <img src="./lixo.jpg" alt=""></img></button>
            </li>)}
            
        </ul>
    )
}
export default List;