import React, {useState} from 'react';
import InputCust from './components/InputCust';
import Todo from './components/Todo';
import './styles/App.css';

function App() {
    const [todos, setTodos] = useState([{id: Date.now(), title:'test1'}])
    const [text, setText] = useState('')
    const removeTodo = (todo) => {
        const newTodos = todos.filter((item) => {
            return item.id !== todo
        })
        setTodos(newTodos)
    };

    const addNewTodo = (item) => {
        console.log(item.title)
        setTodos([...todos, {id: item.id, title: item.title}])
        setText('')
    };

    return (
        <div className="App">
            <div className="post">
                <InputCust
                    placeholder={'Название todo'}
                    value={text}
                    addNewTodo={addNewTodo}
                />
            </div>
            <ul>
                {todos.map((todo, key) =>
                        <Todo
                            key={key}
                            id = {todo.id}
                            title={todo.title}
                            remove={removeTodo}
                        />
                )}
            </ul>
        </div>
    );
}

export default App;
