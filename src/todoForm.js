import React ,{ useState }from "react";

function TodoForm(props){
    const [text, setText] = useState('');

    function handleChange(event){
        let t = event.target.value;
        setText(t);
    }
    function addItem(event){
        event.preventDefault();
        if(text){
            props.onAddItem(text);
            setText("");
        }
        
    }
    return(
        <div>
            
            <form className="Formulario">
                <input id="input" className="inputs" type="text" onChange={handleChange} value={text} maxLength="48"></input>
                <button id="Botao" className="inputs" onClick={addItem}>Add</button>
            </form>
        </div>
    );
}
export default TodoForm;
