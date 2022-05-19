import React from "react";

function List(props){
    return(
        <ul className="ContainerList">
            {props.items.map(item =><li className="Base" key={item} >{item}</li>)}
        </ul>
    )
}
export default List;