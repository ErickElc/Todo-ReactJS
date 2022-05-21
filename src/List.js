import React from "react";

function List(props){
    return(
        <ul className="ContainerList">
            {props.items.map(item =>
            <li className="Base" key={item.id}>{item.text}
            <i className="gg-trash">
                <button onClick={()=>{props.onItemDeleted(item)}}id="lixeira"> </button>
            </i>
            </li>)}
            
        </ul>
    )
}
export default List;