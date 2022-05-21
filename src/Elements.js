import React ,{ useState }from "react";
import "./Todo.css";
import List from "./List";
import TodoForm from "./todoForm";
import Item from "./Item";
function Elements(){

    const [items,setItems] = useState([]);
    function onAddItem(text){
        let it = new Item(text)
        setItems([...items, it])
    }
    function onItemDeleted(item){
        let FiltredItems = items.filter(it =>it.id !== item.id);
        setItems(FiltredItems)

    }
    return(
        <div className="Containers">
                <h1 id="Title">Todo List</h1>
                <TodoForm onAddItem={onAddItem}></TodoForm>
                <List onItemDeleted={onItemDeleted} items={items}></List>
        </div>

    )
}
export default Elements;
