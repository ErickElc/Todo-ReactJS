import React ,{ useState }from "react";
import "./Todo.css";
import List from "./List";
import TodoForm from "./todoForm";
function Elements(){

    const [items,setItems] = useState([]);
    function onAddItem(item){
        setItems([...items, item])
    }
    return(
        <div className="Containers">
                <h1 id="Title">Todo List</h1>
                <TodoForm onAddItem={onAddItem}></TodoForm>
                <List items={items}></List>
        </div>

    )
}
export default Elements;
