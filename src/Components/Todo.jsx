
const Todo = ({ todo, onComplete, remove, onEdit }) => {

	return (
		<div className="todo">
			<div className={todo.isCompleted ? "complete" : "notComplete"} onClick={onComplete}>{todo.text} </div>
			<div>
				<button className="todoButton" onClick={onEdit}>Edit</button>
				<button className="todoButton" onClick={remove}>Delete</button>
				
			</div>
		</div>
	);
}

export default Todo;