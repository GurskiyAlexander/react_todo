const Todo = (props) => {
    return (
        <div className="todo">
            <h1>{props.title}</h1>
            <button
                className="button"
                onClick={() => {
                    props.remove(props.id);
                }}
            >Удалить
            </button>
        </div>
    );
}


export default Todo;
