import { useState } from "react"
import Todo from "./Todo"
import TodoForm from "./TodoForm";
const TodoList = ({ todos, onComplete, remove, onUpdateTodo }) => {

	const [edit, setEdit] = useState({ id: null, text: "" });


	const editTodo = (newValue) => {
		onUpdateTodo(edit.id, newValue);
		setEdit({ id: null, text: "" });
	}

	const renderTodo = () => {

		if (todos.length === 0) { return <p className="title">Please Add Todo</p> }
		return (
			todos.map((todo) => {
				return (
					<Todo
						key={todo.id}
						todo={todo}
						onComplete={() => onComplete(todo.id)}
						remove={() => remove(todo.id)}
						onEdit={() => setEdit(todo)}

					/>
				)
			}
			)
		)
	}
	return (
		<div>{edit.id ? <TodoForm submitTodo={editTodo} edit={edit} /> : renderTodo()}</div>
	)
}

export default TodoList;


















