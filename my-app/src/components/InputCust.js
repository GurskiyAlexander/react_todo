import React, {useState} from 'react';

const InputCust = (props) => {
    const [text, setText] = useState("");

    const newTodo = (e) => {
        e.preventDefault()
        if (text.length > 0) {
            props.addNewTodo({id:Date.now(), title:text})
            setText("")
        }
    }

    return (
        <div>
            <form className="addTodo">
                <input
                    className="input"
                    value={text}
                    type="text"
                    placeholder={props.placeholder}
                    onChange={event => setText(event.target.value)}
                />
                <button onClick={newTodo} className="button">Создать toDo</button>
            </form>
        </div>
    )
}

export default InputCust;
